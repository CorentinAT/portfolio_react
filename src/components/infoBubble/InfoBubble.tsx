import { useState } from 'react'

import pp from '@assets/pp.webp'

import classes from './infoBubble.module.css'

interface Props {
	text: string
	left: string
	top: string
}

export default function InfoBubble(props: Props) {
	const [displayText, setDisplayText] = useState(false)

	const chars = props.text.split('')
	console.log(chars)
	const delay = 20
	const initialDelay = 600
	const lettersList = chars.map((char, index) => {
		if (char === '>') {
			return <br />
		}
		return (
			<span
				className={classes.letter}
				style={{
					animationDelay: `${initialDelay + delay * index}ms`,
					width: char === ' ' ? '5px' : 'auto'
				}}
			>
				{char}
			</span>
		)
	})

	return (
		<div
			className={classes.container}
			style={{ left: props.left, top: props.top }}
			onMouseEnter={() => setDisplayText(true)}
			onMouseLeave={() => setDisplayText(false)}
		>
			<div className={classes['image-container']}>
				<img src={pp} alt="Corentin Albert's profile picture" />
			</div>
			{!displayText ? (
				<div className={classes['typing-indicator']}>
					<div className={classes.dot}></div>
					<div className={classes.dot}></div>
					<div className={classes.dot}></div>
				</div>
			) : (
				<div className={classes['text-container']}>{lettersList}</div>
			)}
		</div>
	)
}
