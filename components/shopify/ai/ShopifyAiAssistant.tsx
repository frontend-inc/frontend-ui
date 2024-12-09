import React, { useEffect, useState } from 'react'
import { useChat, experimental_useObject as useObject } from 'ai/react'
import { ToolInvocation } from 'ai'
import { IconButton, RemixIcon, Typography, Button } from '../../../components'
import { TextArea } from '../../../components'
import { ShopifyProductArray } from '../../../components'
import { AvatarImage, cn } from 'frontend-shadcn'
import { toast } from 'sonner'
import { Loader2 } from 'lucide-react'
import { useParams } from 'next/navigation'
//@ts-ignore
import Markdown from 'react-markdown'
import { 
  Avatar,
  AvatarFallback
} from 'frontend-shadcn'

export type ShopifyAiAssistantProps = {
  avatar: string
  children?: any	
}

const AiShopifyAssistant: React.FC<ShopifyAiAssistantProps> = (props) => {

  const { avatar } = props || {}

  const { app_id: appId } = useParams() as any 

	const [loading, setLoading] = useState(false)

	const dispatchTool = async (toolInvocation: any, result: string) => {
		
    if (result === 'No') {
			addToolResult({
				toolCallId: toolInvocation.toolCallId,
				result: 'Cancelled',
			})
			return
		}

		setLoading(true)
		const toolCallId = toolInvocation.toolCallId
		const toolName = toolInvocation.toolName

		addToolResult({
			toolCallId,
			result,
		})
    
    setLoading(false)
	}

	const {
		isLoading,
		input,
		handleInputChange,
		messages,
		setMessages,
		handleSubmit,
		addToolResult,
		stop,
	} = useChat({
		api: '/api/ai/shopify_assistant',
		onError: (error) => {
			setLoading(false)
			console.log('Error', error)
		},
	})

	const handleChatSubmit = (event) => {
		event.preventDefault()
		handleSubmit(event, {
			data: {
				appId,
			},
		})
	}
	// Scroll down to the latest message by dom ID
	useEffect(() => {
		const latestMessage = document.getElementById('latest-message')
		if (latestMessage) {
			latestMessage.scrollIntoView({ behavior: 'smooth' })
		}
	}, [messages])

	return (
		<div
			className={cn(
				'p-4 relative flex flex-col justify-between w-full',
				loading && 'opacity-50'
			)}
		>
			<div className="w-full overflow-y-scroll">        
				<ul className="list-none py-2 space-y-2">
					{messages?.map((message, index) => {
						return (
							<li
								id={
									index === messages.length - 1
										? 'latest-message'
										: `message-${index}`
								}
								key={'message-' + index}
								className={cn(
									'flex flex-row space-x-2 text-sm border-2 border-border/50 hover:border-accent p-3 rounded-lg whitespace-pre-line'
								)}
							>
                <div className="min-w-[64px]">
                  {message?.role === 'assistant' ? (
                    <Avatar>
                      <AvatarImage src={ avatar } alt="avatar" />
                      <AvatarFallback>
                        <RemixIcon name="ri-gemini-fill" className="text-primary" />
                      </AvatarFallback>
                    </Avatar>                      
                  ):(
                    <Avatar>                    
                      <AvatarFallback>
                        <RemixIcon name="ri-user-3-fill" className="text-primary" />
                      </AvatarFallback>
                    </Avatar>                      
                  )}  
                </div> 
								{message?.role === 'assistant' ? (
									<div className="prose prose-sm text-left text-primary">
										<Markdown>{message.content}</Markdown>
									</div>
								) : (
									<Typography variant="body2">{message?.content}</Typography>
								)}                
								{message.toolInvocations?.map(
									(toolInvocation: ToolInvocation) => {
										const { toolName, args } = toolInvocation

										let toolMessage

										switch (toolName) {
											case 'recommendProducts':
												toolMessage = 'How did I do?'
												break
											default:
												break
										}

										return (
											<div
												className="flex flex-col space-y-2 text-primary"
												key={toolInvocation.toolCallId}
											>
                        {(Array.isArray(args?.shopifyHandles) && args?.shopifyHandles?.length > 0) && (
                          <div className="flex flex-col space-y-2 w-full">
                            <ShopifyProductArray
                              enableAddToCart
                              handles={args.shopifyHandles}                            
                            />
                          </div> 
                        )}                          
                        { args.reason && (
                          <span className="text-sm text-primary text-left">
                            <b>Reason:</b> {toolInvocation.args.reason}
                          </span>
                        )}
												{'result' in toolInvocation ? (
													toolInvocation.result
												) : (
													<div className="w-full flex flex-row space-x-2 justify-between items-center">
														<Typography
															variant="body2"
															className="text-primary"
														>
															{toolMessage}
														</Typography>
														{!loading && (
															<div className="flex flex-row space-x-2">
																<Button
																	onClick={() =>
																		dispatchTool(toolInvocation, 'Yes')
																	}
																>
																	Yes
																</Button>
																<Button
																	onClick={() =>
																		dispatchTool(toolInvocation, 'No')
																	}
																>
																	No
																</Button>
															</div>
														)}
													</div>
												)}
											</div>
										)
									}
								)}
							</li>
						)
					})}
				</ul>
			</div>
			<div className="flex flex-col space-y-2 w-full">
				<TextArea
					name="prompt"
					placeholder="Describe the website to build..."
					value={input}
					handleChange={handleInputChange}
					disableDebounce
				/>
				<div className="flex flex-row space-x-2">
					<Button
						fullWidth
						onClick={handleChatSubmit}
						loading={isLoading}
						disabled={isLoading}
						className="w-full bg-primary text-primary-foreground"
						startIcon={
							<RemixIcon name="ri-gemini-fill" className="text-white" />
						}
					>
						{isLoading ? 'thinking...' : 'Submit'}
					</Button>
					<IconButton
						onClick={stop}
						className="bg-primary hover:bg-primary/80"
					>
						<RemixIcon name="ri-stop-fill" className="text-primary-foreground" />
					</IconButton>
				</div>
			</div>
			{loading && (
				<div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
					<Loader2 size={64} className="text-white animate-spin" />
				</div>
			)}
		</div>
	)
}

export default AiShopifyAssistant
