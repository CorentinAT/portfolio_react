import { useEffect, useRef, useState } from 'react'

import { VideoModel } from '@models/videoModel'

import classes from './videoSection.module.css'

interface Props {
	video: VideoModel
}

export default function VideoSection({ video }: Props) {
	const infosRef = useRef<HTMLDivElement>(null)
	const [isVisible, setIsVisible] = useState(false)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true)
					} else {
						setIsVisible(false)
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (infosRef.current) {
			observer.observe(infosRef.current)
		}

		return () => observer.disconnect()
	}, [])

	return (
		<section
			className={classes['video-section']}
			style={{ backgroundColor: video.color }}
		>
			<div
				ref={infosRef}
				className={`${classes['video-infos']} ${
					isVisible ? classes['animate-appears'] : ''
				}`}
			>
				<h2>{video.title}</h2>
				<p>{video.description}</p>
			</div>
			<iframe
				className={classes['video-frame']}
				width='960'
				height='540'
				src='http://www.youtube.com/embed/goDoggW5hxE?enablejsapi=1&origin=http://example.com'
			></iframe>
		</section>
	)
}
