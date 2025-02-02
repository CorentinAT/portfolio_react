import '@styles/videosPage.css'

import NavBar from '@components/NavBar'
import VideoSection from '@components/videos/videoSection/VideoSection'
import VideosHome from '@components/videos/videosHome/VideosHome'

import { VideoModel } from '@models/videoModel'

import { videos } from '@content/videos'

export default function VideosPage() {
	const videosSections = (videos as VideoModel[]).map((video, index) => (
		<VideoSection
			key={index}
			video={video}
			index={index}
			total={videos.length}
		/>
	))

	return (
		<>
			<NavBar />
			<div className='videos-container'>
				<VideosHome />
				{videosSections}
			</div>
		</>
	)
}
