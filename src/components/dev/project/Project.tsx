import { useRef } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNew from '@mui/icons-material/OpenInNew'

import { ProjectModel } from '@models/projectModel'

import ProjectDetails from '../projectDetails/ProjectDetails'
import classes from './project.module.css'

interface Props {
	project: ProjectModel
}
export default function Project(props: Props) {
	const detailsRef = useRef<HTMLDialogElement>(null)

	return (
		<div className={classes.project}>
			<h2 onClick={() => detailsRef.current?.showModal()}>
				{props.project.name}
			</h2>
			<p>{props.project.description}</p>
			{props.project.github && (
				<a href={`https://github.com/${props.project.github}`} target='_blank'>
					<GitHubIcon titleAccess='github' sx={{ fontSize: '35px' }} />
				</a>
			)}
			{props.project.url && (
				<a href={props.project.url} target='_blank'>
					<OpenInNew titleAccess='site' sx={{ fontSize: '35px' }} />
				</a>
			)}
			<ProjectDetails
				dialogRef={detailsRef}
				project={props.project}
				onClose={() => detailsRef.current?.close()}
			/>
		</div>
	)
}
