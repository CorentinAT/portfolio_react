import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'

import InfoBubble from '@components/infoBubble/InfoBubble'

import { infos } from '@content/infos'

import classes from './videosHome.module.css'

export default function VideosHome() {
	return (
		<section className={classes.container}>
			<h1 className='semibold'>VIDEOS</h1>
			<InfoBubble text={infos.videos} left='400px' top='250px' />
			<div className={classes.arrows}>
				<ArrowDropUpIcon className={classes.arrow} sx={{ fontSize: '80px' }} />
				<ArrowDropUpIcon className={classes.arrow} sx={{ fontSize: '80px' }} />
			</div>
		</section>
	)
}
