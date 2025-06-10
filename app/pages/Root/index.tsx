import { Outlet } from "react-router"
import "../../styles/app.css"
import Sidebar from "./Siderbar"

export default function Root() {
  return (
    <div className="flex flex-col">
      <main className="flex" style={{ height: "calc(100vh - 39px)" }}>
        <div className="w-[48px] overflow-hidden">
          <Sidebar></Sidebar>
        </div>
        <section className="flex-grow-1">
          <Outlet />
        </section>
      </main>
    </div>
  )
}
