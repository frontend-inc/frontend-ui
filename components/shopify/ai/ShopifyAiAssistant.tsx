import React, { useEffect, useState } from 'react'
import { useChat, experimental_useObject as useObject } from 'ai/react'
import { ToolInvocation } from 'ai'
import { IconButton, RemixIcon, Typography, Button } from '../../../components'
import { TextArea } from '../../../components'
import { Avatar, ShopifyProductCollection, ShopifyProductArray } from '../../../components'
import { cn } from '@nextui-org/react'
import { toast } from 'sonner'
import { Container } from '../../../components'
import { Loader2 } from 'lucide-react'
import { useParams } from 'next/navigation'
import { 
  Card,
  CardContent,
  Avatar as ShadcnAvatar,
  AvatarFallback 
} from 'frontend-shadcn'
//@ts-ignore
import Markdown from 'react-markdown'

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
				result: 'No, thanks.',
			})
			return
		}else{
      addToolResult({
        toolCallId: toolInvocation.toolCallId,
        result: 'Yes, please.',
      })
    }

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
		api: '/api/v1/ai/shopify_assistant',
    async onToolCall({ toolCall }: { toolCall: any }) {
    },    
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

	return (
    <Container maxWidth='md'>
		<div
			className={cn(
				'p-4 relative flex flex-col justify-between w-full',
				loading && 'opacity-50'
			)}
		>
			<div className="w-full overflow-y-scroll"> 
        <ul className="list-none py-2 space-y-2">               
          <li>
            <Card className="w-full">
              <CardContent className="w-full flex items-center space-x-4">
                <Avatar                  
                  src={ avatar } 
                  alt="avatar"            
                />          
                <Typography variant="body1" className="text-foreground/70">
                  Hi! I'm your shopping assistant. Ask me anything about our products.
                </Typography>
              </CardContent>
            </Card>
          </li>
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
									'flex flex-col space-y-2 w-full',
								)}
							>
                <Card className='w-full'>
                  <CardContent className="flex flex-col space-y-2">
                  <div className="flex flex-row space-x-4">
                    <div className="flex flex-row justify-center">
                      {message?.role === 'assistant' ? (
                        <Avatar src={ avatar } alt="avatar" />                    
                      ):(
                        <ShadcnAvatar className="rounded-lg">                    
                          <AvatarFallback className="rounded-lg">
                            <RemixIcon name="ri-user-6-line" className="text-primary" />
                          </AvatarFallback>
                        </ShadcnAvatar>                      
                      )}  
                    </div> 
                    {message?.role === 'assistant' ? (
                      <div className="prose prose-sm text-left text-primary flex flex-col">
                        <Typography variant="body1" className="font-bold">Assistant:</Typography>
                        <Markdown>{message.content}</Markdown>
                      </div>
                    ) : (
                      <div className="flex flex-col">
                        <Typography variant="body2" className="font-bold">You:</Typography>
                        <Typography variant="body2">{message?.content}</Typography>
                      </div>
                    )}      
                </div>
								{message.toolInvocations?.map(
									(toolInvocation: ToolInvocation) => {
										const { toolName, args } = toolInvocation

										let toolMessage

										switch (toolName) {
											case 'shopifyProducts':
												toolMessage = 'Do you need more help?'
												break
											default:
												break
										}

										return (
											<div
												className="flex flex-col space-y-2 text-foreground"
												key={toolInvocation.toolCallId}
											>
                        
                        <Markdown>{args?.reason}</Markdown>

                        {(toolName == 'shopifyProducts' && 
                          Array.isArray(args?.shopifyHandles) && 
                          args?.shopifyHandles?.length > 0) && (
                          <div className="flex flex-col space-y-2 w-full">
                            <ShopifyProductArray
                              enableAddToCart
                              handles={args.shopifyHandles}                            
                            />
                          </div> 
                        )}

                        {(toolName == 'shopifyCollection' && args?.collectionHandle) && (
                          <div className="flex flex-col space-y-2 w-full">
                            <ShopifyProductCollection 
                              shopifyCollection={args.collectionHandle}
                              enableAddToCart
                            />
                          </div> 
                        )}                          
												{!('result' in toolInvocation) && (
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
																	Sure!
																</Button>
																<Button
																	onClick={() =>
																		dispatchTool(toolInvocation, 'No')
																	}
																>
																	No thanks
																</Button>
															</div>
														)}
													</div>
												)}
											</div>
										)
									}
								)}
                </CardContent>          
              </Card>
						</li>
						)
					})}
				</ul>
			</div>
			<div className="flex flex-col space-y-2 w-full">
				<TextArea
					name="prompt"
					placeholder="Ask a question about our products..."
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
    </Container>
	)
}

export default AiShopifyAssistant
