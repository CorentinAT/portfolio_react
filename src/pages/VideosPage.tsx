import '@styles/videosPage.css'

import VideoSection from '@components/videos/videoSection/VideoSection'
import VideosHome from '@components/videos/videosHome/VideosHome'

import { VideoModel } from '@models/videoModel'

import { videos } from '@content/videos'

export default function VideosPage() {
	const videosSections = (videos as VideoModel[]).map((video, index) => (
		<VideoSection key={index} video={video} />
	))

	return (
		<div className='videos-container'>
			<VideosHome />
			{videosSections}
		</div>
	)
}
