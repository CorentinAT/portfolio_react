import { useEffect, useRef, useState } from 'react'

import { VideoModel } from '@models/videoModel'

import classes from './videoSection.module.css'

interface Props {
	video: VideoModel
	index: number
	total: number
}

export default function VideoSection(props: Props) {
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
			style={{ background: props.video.background }}
		>
			<p className={classes.pagination}>
				{props.index + 1}/{props.total}
			</p>
			<div
				ref={infosRef}
				className={`${classes['video-infos']} ${
					isVisible ? classes['animate-appears'] : ''
				}`}
			>
				<h2 className='semibold'>{props.video.title}</h2>
				<p>{props.video.description}</p>
				<p className={classes['video-details']}>En savoir plus</p>
			</div>
			<iframe
				className={classes['video-frame']}
				width='960'
				height='540'
				src={`http://www.youtube.com/embed/${props.video.url}?enablejsapi=1&start=${props.video.start}`}
			></iframe>
		</section>
	)
}
