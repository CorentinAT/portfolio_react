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
	const [animate, setAnimate] = useState(props.index === 0)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true)
						setAnimate(false)
					} else {
						setTimeout(() => {
							setIsVisible(false)
							if (entry.isIntersecting && props.index === 0) {
								setAnimate(true)
							} else {
								setAnimate(false)
							}
						}, 500)
					}
				})
			},
			{ threshold: 0.5 }
		)

		if (infosRef.current) {
			observer.observe(infosRef.current)
		}

		return () => observer.disconnect()
	}, [props.index])

	return (
		<section
			className={`${classes['video-section']} ${animate ? classes['animate-bounce'] : ''}`}
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
				<p>
					Faite avec{' '}
					<strong className='semibold'>{props.video.software}</strong>, en{' '}
					<strong className='semibold'>{props.video.date}</strong>
				</p>
			</div>
			<iframe
				className={`${classes['video-frame']} ${
					isVisible ? classes['animate-appears'] : ''
				}`}
				width='960'
				height='540'
				allowFullScreen
				src={`https://www.youtube-nocookie.com/embed/${props.video.url}?enablejsapi=1&start=${props.video.start}`}
			></iframe>
		</section>
	)
}
