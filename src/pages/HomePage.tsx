import '@styles/homePage.css'

import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Link } from 'react-router-dom'

import InfoBubble from '@components/infoBubble/InfoBubble'

import { infos } from '@content/infos'

export default function HomePage() {
	return (
		<div className='home-container'>
			<InfoBubble text={infos.home} left='40%' top='15%' />

			<div className='home-content'>
				<a href='cv.pdf' download='cv_corentin_albert.pdf'>
					<h1>
						Corentin
						<br />
						Albert
					</h1>
				</a>
			</div>

			<div className='right-links'>
				<Link to='videos' className='big-link'>
					Vidéo
				</Link>
				<Link to='dev' className='big-link'>
					Informatique
				</Link>
			</div>

			<div className='external-links'>
				<a
					href='https://github.com/corentinat'
					target='_blank'
					rel='noopener noreferrer'
				>
					<GitHubIcon titleAccess='GitHub' sx={{ fontSize: '35px' }} />
				</a>
				<a
					href='https://www.linkedin.com/in/corentin-albert-75a939251'
					target='_blank'
					rel='noopener noreferrer'
				>
					<LinkedInIcon titleAccess='LinkedIn' sx={{ fontSize: '40px' }} />
				</a>
			</div>
		</div>
	)
}
