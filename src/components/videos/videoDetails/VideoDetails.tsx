import CloseIcon from '@mui/icons-material/Close'

import Modal from '@components/modal/Modal'

import { VideoModel } from '@models/videoModel'

import classes from './videoDetails.module.css'

interface Props {
	onClose: () => void
	video: VideoModel
}

export default function VideoDetails(props: Props) {
	return (
		<Modal onClose={props.onClose}>
			<>
				<div className={classes.header}>
					<h2>{props.video.title}</h2>
					<div onClick={props.onClose}>
						<CloseIcon className={classes.close} sx={{ fontSize: '30px' }} />
					</div>
				</div>
				<div className={classes.content}>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
						pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
						culpa qui officia deserunt mollit anim id est laborum.
					</p>
				</div>
			</>
		</Modal>
	)
}
