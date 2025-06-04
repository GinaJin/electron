import business from "@/app/routers/bizRouters"
import { NavLink } from "react-router"

export default function () {
  return business.map(route => {
    return (
      <NavLink
        className="flex items-center justify-center w-[48px] h-[48px] cursor-pointer"
        to={route.path || ""}
      >
        {route.icon}
      </NavLink>
    )
  })
}
