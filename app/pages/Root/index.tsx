import { Outlet } from "react-router"
import "../../styles/app.css"
import Sidebar from "./Siderbar"

export default function Root() {
  return (
    <div className="flex flex-col">
      <main className="flex">
        <div className="w-[48px] overflow-hidden">
          <Sidebar></Sidebar>
        </div>
        <section>
          <Outlet />
        </section>
      </main>
    </div>
  )
}
