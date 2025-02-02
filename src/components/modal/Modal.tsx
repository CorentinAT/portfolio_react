import { createPortal } from 'react-dom'

import classes from './modal.module.css'

interface Props {
	children: JSX.Element
	onClose: () => void
}

export default function Modal(props: Props) {
	const portalElement = document.getElementById('overlays')

	return (
		<>
			{createPortal(
				<div className={classes.backdrop} onClick={props.onClose}></div>,
				portalElement as HTMLElement
			)}
			{createPortal(
				<div className={classes.modal}>{props.children}</div>,
				portalElement as HTMLElement
			)}
		</>
	)
}
