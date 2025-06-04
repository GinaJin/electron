import { createBrowserRouter } from "react-router"
import Root from "../pages/Root"
import bizRouters from "./bizRouters"
import publicRouters from "./publicRouters"

export default createBrowserRouter([
  {
    element: <Root />,
    children: [...publicRouters, ...bizRouters],
  },
])
