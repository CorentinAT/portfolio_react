import { NavLink } from 'react-router-dom'

import '@styles/navBar.css'

export default function NavBar() {
	return (
		<nav className='navbar'>
			<NavLink to='/'>Accueil</NavLink>
			<NavLink to='/dev'>Informatique</NavLink>
			<NavLink to='/videos'>Vidéos</NavLink>
		</nav>
	)
}
