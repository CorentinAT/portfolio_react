import { createBrowserRouter } from 'react-router-dom'

import DevPage from '@pages/devPage'
import HomePage from '@pages/HomePage'
import VideosPage from '@pages/VideosPage'

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />
	},
	{
		path: 'videos',
		element: <VideosPage />
	},
	{
		path: 'dev',
		element: <DevPage />
	}
])

export default router
