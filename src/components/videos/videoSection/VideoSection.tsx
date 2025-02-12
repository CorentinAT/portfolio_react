import { useEffect, useRef, useState } from 'react'

import { VideoModel } from '@models/videoModel'

import VideoDetails from '../videoDetails/VideoDetails'
import classes from './videoSection.module.css'

interface Props {
	video: VideoModel
	index: number
	total: number
}

export default function VideoSection(props: Props) {
	const infosRef = useRef<HTMLDivElement>(null)

	const [isVisible, setIsVisible] = useState(false)
	const [showDetails, setShowDetails] = useState(false)
	const [animate, setAnimate] = useState(props.index === 0)

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					setShowDetails(false)
					if (entry.isIntersecting) {
						setIsVisible(true)
						setAnimate(false)
					} else {
						setIsVisible(false)
						setAnimate(props.index === 0)
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
		<>
			{showDetails && (
				<VideoDetails
					onClose={() => setShowDetails(false)}
					video={props.video}
				/>
			)}
			<section
				className={`${classes['video-section']} ${animate ? classes.animate : ''}`}
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
					{/* <p
						className={classes['video-details']}
						onClick={() => setShowDetails(true)}
					>
						En savoir plus
					</p> */}
					<p>
						Faite avec{' '}
						<strong className='semibold'>{props.video.software}</strong>, en{' '}
						<strong className='semibold'>{props.video.date}</strong>
					</p>
				</div>
				<iframe
					className={classes['video-frame']}
					width='960'
					height='540'
					src={`http://www.youtube.com/embed/${props.video.url}?enablejsapi=1&start=${props.video.start}`}
				></iframe>
			</section>
		</>
	)
}
