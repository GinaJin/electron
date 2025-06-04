import NoAuth from '../pages/40X/401'
import NotFound from '../pages/40X/404'
export default [
  {
    path: '401',
    element: <NoAuth />,
  },
  {
    path: '404',
    element: <NotFound/>,
  },
]
