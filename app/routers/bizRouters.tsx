import WelcomeKit from '@/lib/welcome/WelcomeKit'
import Home from '../pages/Home'
export default [
  {
    index: true,
    path: '/',
    element: <Home />,
  },
  {
    path: 'welcome',
    element: <WelcomeKit />,
  },
]
