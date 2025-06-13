import getFileName from "@/app/utils/filename"
import { MouseEvent, use, useMemo } from "react"
import context from "../context"
import { FileInfoProps } from "../types"
import FileItemIcon from "./FileItemIcon"

type MainFileInfoProps = Omit<FileInfoProps, "onRemove" | "isSelected">

export default function ({ path, isDir }: MainFileInfoProps) {
  const { go, setSelected, selected } = use(context)
  const name = getFileName(path)

  const handleDoubleClick = () => {
    if (!isDir) return
    go(path)
  }

  const handleClick = (e: MouseEvent<HTMLLIElement>) => {
    e.stopPropagation()
    setSelected({ path, isDir })
  }

  const selectedClass = useMemo(() => {
    return selected.path === path ? " selected " : ""
  }, [selected])

  return (
    <li
      className={"fileInfo flex items-center" + selectedClass}
      onDoubleClick={handleDoubleClick}
      onClick={handleClick}
    >
      <FileItemIcon
        isDir={isDir}
        type={name.split(".").at(-1)!}
        name={name}
        path={path}
      />
      <span>{name}</span>
    </li>
  )
}
