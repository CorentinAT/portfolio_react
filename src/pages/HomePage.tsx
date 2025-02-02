import '@styles/homePage.css'

import { useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom'

import dev from '@assets/dev.webp'
import tpose from '@assets/tpose.gif'
import videos from '@assets/videos.webp'

import InfoBubble from '@components/infoBubble/InfoBubble'

import { infos } from '@content/infos'

export default function HomePage() {
	const [devImageVisibility, setDevImageVisibility] = useState('')
	const [videosImageVisibility, setVideosImageVisibility] = useState('')

	return (
		<div className='home-container'>
			<div>
				<h1>Corentin ALBERT</h1>
				<div className='tpose'>
					<img src={tpose} />{' '}
				</div>
				<InfoBubble text={infos.home} left='40%' top='60%' />
			</div>
			<Link
				className='link-dev'
				to='dev'
				onMouseEnter={() => setDevImageVisibility('visible')}
				onMouseLeave={() => setDevImageVisibility('invisible')}
			>
				Informatique
			</Link>
			<Link
				className='link-videos'
				to='videos'
				onMouseEnter={() => setVideosImageVisibility('visible')}
				onMouseLeave={() => setVideosImageVisibility('invisible')}
			>
				Vidéos
			</Link>
			<img className={`videos-image ${videosImageVisibility}`} src={videos} />
			<img className={`dev-image ${devImageVisibility}`} src={dev} />
			<div className='external-links'>
				<a href='https://github.com/corentinat' target='_blank'>
					<GitHubIcon titleAccess='github' sx={{ fontSize: '35px' }} />
				</a>
				<a
					href='https://www.linkedin.com/in/corentin-albert-75a939251'
					target='_blank'
				>
					<LinkedInIcon titleAccess='linkedin' sx={{ fontSize: '40px' }} />
				</a>
			</div>
		</div>
	)
}
