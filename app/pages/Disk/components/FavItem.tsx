import { XIcon } from "@phosphor-icons/react"
import { FileInfoProps } from "../types"

type FavFileInfoProps = Omit<FileInfoProps, "onDoubleClick">

export default function ({ path, onRemove, onClick }: FavFileInfoProps) {
  return (
    <li className="fileInfo flex items-center" onClick={() => onClick(path)}>
      <span>{path}</span>
      <XIcon size={16} onClick={onRemove} />
    </li>
  )
}
