import { Outlet } from 'react-router'
import { Link } from 'react-router-dom'

export default function Root() {
  return (
    <>
      <Link to={'/welcome'}>欢迎</Link>
      <br />
      <Link to={'/'}>首页</Link>
      <section>
        <Outlet />
      </section>
    </>
  )
}
