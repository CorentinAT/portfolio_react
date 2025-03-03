import NavBar from '@components/NavBar'

import '@styles/devPage.css'

import Project from '@components/dev/project/Project'
import InfoBubble from '@components/infoBubble/InfoBubble'

import { infos } from '@content/infos'
import { projects } from '@content/projects'

export default function DevPage() {
	return (
		<>
			<NavBar />
			<InfoBubble text={infos.dev} left='400px' top='250px' />
			<div className='dev-container'>
				<h1>Informatique</h1>
				{projects.map((project) => (
					<Project project={project} />
				))}
			</div>
		</>
	)
}
