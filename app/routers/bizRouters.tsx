import WelcomeKit from "@/lib/welcome/WelcomeKit"
import {
  CirclesFourIcon,
  HouseLineIcon,
  NotebookIcon,
} from "@phosphor-icons/react"
import Disk from "../pages/Disk"
import Home from "../pages/Home"

export default [
  {
    index: true,
    element: <Home />,
    icon: <HouseLineIcon size={24} />,
  },
  {
    path: "welcome",
    element: <WelcomeKit />,
    icon: <CirclesFourIcon size={24} />,
  },
  {
    path: "disk",
    element: <Disk />,
    icon: <NotebookIcon size={24} />,
  },
]
