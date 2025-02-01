import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'

import InfoBubble from '@components/infoBubble/InfoBubble'

import { infos } from '@content/infos'

import classes from './videosHome.module.css'

export default function VideosHome() {
	return (
		<section className={classes.container}>
			<h1>VIDEOS</h1>
			<InfoBubble text={infos.videos} left='400px' top='300px' />
			<div className={classes.arrows}>
				<ArrowDropDownIcon className={classes.arrow} fontSize='large' />
				<ArrowDropDownIcon className={classes.arrow} fontSize='large' />
			</div>
		</section>
	)
}
