import { LegacyRef } from 'react'
import { Close } from '@mui/icons-material'
import GitHubIcon from '@mui/icons-material/GitHub'
import OpenInNew from '@mui/icons-material/OpenInNew'

import { ProjectModel } from '@models/projectModel'

import classes from './projectDetails.module.css'

interface Props {
	project: ProjectModel
	dialogRef: LegacyRef<HTMLDialogElement>
	onClose: () => void
}
export default function ProjectDetails(props: Props) {
	return (
		<dialog
			onClose={props.onClose}
			ref={props.dialogRef}
			className={classes.dialog}
		>
			<div className={classes.container}>
				<div className={classes.header}>
					<div className={classes.title}>
						<h3>{props.project.name}</h3>
						<p>{props.project.date}</p>
					</div>
					<div onClick={props.onClose} className={classes.close}>
						<Close />
					</div>
				</div>
			</div>
			<div className={classes['image-container']}>
				<img src={props.project.image} />
			</div>
			<p>{props.project.description}</p>
			<p>{props.project.details}</p>
			<div className={classes.footer}>
				<div className={classes.tools}>
					{props.project.tools.map((tool) => (
						<div className={classes.tool}>{tool}</div>
					))}
				</div>
				<div className={classes.access}>
					{props.project.github && (
						<a
							href={`https://github.com/${props.project.github}`}
							target='_blank'
						>
							<GitHubIcon titleAccess='github' sx={{ fontSize: '35px' }} />
						</a>
					)}
					{props.project.url && (
						<a href={props.project.url} target='_blank'>
							<OpenInNew titleAccess='site' sx={{ fontSize: '35px' }} />
						</a>
					)}
				</div>
			</div>
		</dialog>
	)
}
