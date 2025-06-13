import WelcomeKit from "@/lib/welcome/WelcomeKit"
import { CirclesFourIcon, HouseLineIcon } from "@phosphor-icons/react"
import Disk from "../pages/Disk"

export default [
  {
    index: true,
    element: <Disk />,
    icon: <HouseLineIcon size={24} />,
  },
  {
    path: "welcome",
    element: <WelcomeKit />,
    icon: <CirclesFourIcon size={24} />,
  },
]
