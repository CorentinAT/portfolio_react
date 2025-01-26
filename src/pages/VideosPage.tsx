import '@styles/videosPage.css'

import { VideoModel } from '@models/videoModel'

import videos from '@content/videos.json'

export default function VideosPage() {
	const videosSections = (videos as VideoModel[]).map((video, index) => (
		<section
			key={index}
			className='video'
			style={{ backgroundColor: video.color }}
		>
			<p>{video.name}</p>
			<p>{video.description}</p>
		</section>
	))

	return (
		<div className='videos-container'>
			<section key='initial'>accueil</section>
			{videosSections}
		</div>
	)
}
