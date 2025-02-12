import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Link } from 'react-router-dom'

import '@styles/navBar.css'

export default function NavBar() {
	return (
		<nav className='navbar'>
			<Link to='/'>
				<ArrowBackIcon sx={{ fontSize: '35px' }} />
			</Link>
		</nav>
	)
}
