'use client'

import React from 'react'
import {
  AvatarImage, 
  Image,
  Heading, 
  Typography,
  YouTubeEmbed,
  SoundcloudEmbed,
  VimeoEmbed,
  GoogleMap  
} from '../../../components'
import { HeroProps } from './Hero'
import { Badge } from 'frontend-shadcn'

const HeroList: React.FC<HeroProps> = (props) => {
	
  const {
    variant,
		image,
		label,
		title,
		subtitle,
    location,
    lat,
    lng,
    startsAt,
    endsAt,
    publishedAt,
    html,
		description,
    youtubeSrc,
    soundcloudSrc,
    vimeoSrc,    
    tags=[],
		actions,
		secondaryAction,
    disableImage,
    enableGradient,
    enableOverlay,    
	} = props || {}

	return (
		<div className="container mx-auto max-w-screen-lg">
			<div className="flex flex-col w-full justify-start items-center space-y-6">
				<Heading
					label={label}
					title={title}
					subtitle={subtitle}
					textAlign="center"
					size="lg"
				/>
        {(startsAt || endsAt) && (
          <Typography variant="subtitle2" className="text-muted-foreground">
            { startsAt } - { endsAt }
          </Typography>
        )}
        { publishedAt && (
          <Typography variant="subtitle2" className="text-muted-foreground">
           { publishedAt }
          </Typography>
        )}
        { location && (
          <Typography variant="subtitle2" className="text-muted-foreground">
            { location }
          </Typography>
        )}
				{secondaryAction && secondaryAction}
        {!disableImage && (
          <div className="w-full flex items-center justify-center rounded ">            
            { variant !== 'circular' && (
              <div className='py-10'>
                <Image
                  aspectRatio={2.0}
                  src={image}
                  alt={title}
                  height={400}
                  label={label}
                  enableGradient={enableGradient}
                  enableOverlay={enableOverlay}
                />
              </div>
            )}
            { variant == 'circular' && (
              <AvatarImage
                src={image}
                alt={title}
                size={160}
                enableGradient={enableGradient}
                enableOverlay={enableOverlay}
              /> 
            )}
          </div>
        )}
        { youtubeSrc && (
          <YouTubeEmbed src={youtubeSrc} />
        )}
        { soundcloudSrc && (
          <SoundcloudEmbed src={soundcloudSrc} />
        )}
        { vimeoSrc && (
          <VimeoEmbed src={vimeoSrc} /> 
        )}
        {(lat && lng) && (
          <GoogleMap 
            label={ title }
            lat={ lat }
            lng={ lng }
          />
        )}
				{actions}
				<div className="w-full max-w-[500px] sm:max-w-screen-sm">
          { description && (
            <Typography variant="subtitle2" className="text-muted-foreground">
              {description}
            </Typography>
          )}
          { html && (
            <div className="w-full prose">
              <div dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          )}
          {(tags?.length > 0 && (
            <div className='w-full flex flex-wrap gap-3'>
              {tags.map((tag, index) => (
                <Badge key={index} variant="outline" className="px-3 py-1 text-muted-foreground">
                  {tag}
                </Badge>
              ))}
            </div>
          ))}
				</div>
			</div>
		</div>
	)
}

export default HeroList
