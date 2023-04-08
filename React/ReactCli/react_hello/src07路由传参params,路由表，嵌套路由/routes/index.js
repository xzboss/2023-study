import { Navigate } from "react-router-dom"
import About from "../page/About"
import Home from "../page/Home"
import News from "../page/Home/News"
import Message from "../page/Home/Message"
import Detail from "../component/Detail"
const routes = [
	{
		path: '/about',
		element: <About />
	},
	{
		path: '/home',
		element: <Home />,
		children: [
			{
				path: 'news',
				element: <News />,
				children: [
					{
						path: 'detail/:id/:name/:content',
						element:<Detail/>
					}
				]
			},
			{
				path: 'message',
				element: <Message />
			}
		]
	},
	{
		path: '/',
		element: <Navigate to='/about' />
	}
]
export default routes