export enum SoftwareEnum {
	DAVINCI = 'Davinci Resolve',
	FINALCUT = 'Final Cut Pro',
	HITFILM = 'Hitfilm'
}

export interface VideoModel {
	title: string
	description: string
	url: string
	background: string
	start?: number
	software: SoftwareEnum
	date: string
}
