import { SoftwareEnum, VideoModel } from '@models/videoModel'

export const videos: VideoModel[] = [
	{
		title: 'Fête de la science',
		description:
			"Vidéo qui retrace la fête de la science 2023 à l'IUT Lyon 1. J'ai été embauché par l'IUT pour filmer l'évènement pendant une journée et en faire une vidéo d'environ 1min30 qui met en scène chronologiquement la journée.",
		url: '57KM1N3qxJA',
		background:
			'linear-gradient(100deg, rgba(255,205,69,1) 0%, rgba(247,255,0,1) 100%)',
		software: SoftwareEnum.HITFILM,
		date: 'Octobre 2023'
	},
	{
		title: 'Zoocar',
		description:
			"Vidéo de présentation de notre site Zoocar, imaginé et créé pour un projet de cours. Nous devions faire une vidéo pour présenter le site. Nous avons choisi de poser un contexte et d'ajouter des plans filmés en plus des images du site.",
		url: 'goDoggW5hxE',
		background:
			'linear-gradient(315deg, rgba(0,156,9,1) 0%, rgba(29,255,0,1) 100%)',
		software: SoftwareEnum.HITFILM,
		date: 'Janvier 2024'
	},
	{
		title: 'Le Règlement',
		description:
			"Participé au montage d'une vidéo de 'Le Règlement' sur Youtube. J'ai rythmé et illustré en grande partie de 8:36 à 30:23 (sauf l'intégration commerciale).",
		url: 'utGpZb47tF4',
		start: 515,
		background:
			'linear-gradient(45deg, rgba(218,140,255,1) 0%, rgba(153,63,194,1) 41%, rgba(100,0,144,1) 100%)',
		software: SoftwareEnum.FINALCUT,
		date: 'Juillet 2024'
	},
	{
		title: 'NextJS tutorial',
		description:
			"Tutoriel sur le framework NextJS en anglais. Nous devions faire un tutoriel en anglais sur une technologie liée à l'informatique. Nous avons choisi d'ajouter des scènes de début et de fin un peu marrantes et d'avoir un résultat bien dynamique, par les animations et la face-cam.",
		url: 'VcNvb72zeJI',
		background:
			'linear-gradient(202deg, rgba(3,0,148,1) 0%, rgba(83,145,212,1) 100%)',
		software: SoftwareEnum.DAVINCI,
		date: 'Mai 2024'
	},
	{
		title: "Nuit de l'info 2022",
		description:
			"Vidéo qui suit notre équipe de développeurs lors de la Nuit de l'Info 2022 (un concours dans lequel on doit développer une application web en une nuit). Un des défis qu'on a choisi est de faire une vidéo de 5 minutes qui respecte un plan (les 5 parties de la vidéo).",
		url: '8v_yZyIDS3o',
		background:
			'linear-gradient(52deg, rgba(44,255,208,1) 0%, rgba(0,255,147,1) 100%)',
		software: SoftwareEnum.HITFILM,
		date: 'Décembre 2022'
	},
	{
		title: 'Enligh Profile',
		description:
			"Présentation de moi-même en anglais, en suivant une structure vue en cours. J'ai ajouté quelques effets/transitions que je voulais tester.",
		url: 'lp1LmDzMQHk',
		background:
			'linear-gradient(329deg, rgba(255,172,114,1) 0%, rgba(162,88,0,1) 100%)',
		software: SoftwareEnum.FINALCUT,
		date: 'Janvier 2025'
	},
	{
		title: 'Montage Overwatch',
		description:
			"Compilation d'actions d'un ami, qui est un bon joueur d'Overwatch. Je connais pas grand chose au jeu donc il paraît que les actions ne sont pas très impressionnantes mais au moins le montage est cool. J'ai testé et découvert pleins d'effets différents.",
		url: 'ubqUqjQ6ZCU',
		background:
			'linear-gradient(101deg, rgba(255,148,20,1) 0%, rgba(255,76,102,1) 100%)',
		software: SoftwareEnum.HITFILM,
		date: 'Septembre 2022'
	},
	{
		title: "Nuit de l'info 2023",
		description:
			"Revanche sur l'année précédente, la même équipe revient à la Nuit de l'Info 2023. On s'était imposé le thème années 90 mais on a mal calculé le temps investi dans la vidéo et la fatigue de la nuit (ça part vite de traviole).",
		url: 'Q2VQeUIaWg8',
		background:
			'linear-gradient(240deg, rgba(209,158,255,1) 0%, rgba(255,76,249,1) 100%)',
		software: SoftwareEnum.HITFILM,
		date: 'Décembre 2023'
	}
]
