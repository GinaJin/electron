import { use } from "react"
import context from "../context"
import { FileItemProps } from "../types"
import FavItem from "./FavItem"

type Props = {
  items: FileItemProps[]
}

export default function ({ items }: Props) {
  const { currentDir, setCurrentDir, removeFavdir, go } = use(context)

  const handleClick = path => {
    setCurrentDir(path)
    go(path)
  }

  return (
    <div className="flex flex-col h-[100%] bg-[#eee]">
      <b>Favorites</b>
      <ul className="preview flex-grow-1 w-[130px]">
        {items.map(item => (
          <FavItem
            key={item.path}
            path={item.path}
            isDir={item.isDir}
            isSelected={currentDir === item.path}
            onRemove={removeFavdir}
            onClick={handleClick}
          ></FavItem>
        ))}
      </ul>
    </div>
  )
}
