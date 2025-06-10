import Applications from "@/app/assets/Applications.png"
import Desktop from "@/app/assets/Desktop.png"
import Documents from "@/app/assets/Documents.png"
import Downloads from "@/app/assets/Downloads.png"
import file from "@/app/assets/file.png"
import folder from "@/app/assets/folder.png"
import image from "@/app/assets/image.png"
import js from "@/app/assets/js.png"
import Movies from "@/app/assets/Movies.png"
import Music from "@/app/assets/Music.png"
import pdf from "@/app/assets/pdf.png"
import Photos from "@/app/assets/Photos.png"
import Pictures from "@/app/assets/Pictures.png"
import Public from "@/app/assets/Public.png"
import ts from "@/app/assets/ts.png"

const icons = {
  file,
  Movies,
  Applications,
  folder,
  Downloads,
  Music,
  Photos,
  Public,
  Pictures,
  Documents,
  Desktop,
  ts,
  js,
  pdf,
  jpeg: image,
  jpg: image,
  png: image,
  gif: image,
  bpm: image,
  webp: image,
  svg: image,
} as const

type Props = {
  name: string
  path: string
  type: string
  isDir: boolean
}
type Iconkey = keyof typeof icons

const getFileName = ({ name, type, isDir }: Props) => {
  const target = icons[name as Iconkey] || icons[type as Iconkey]
  if (target) return target
  return isDir ? icons.folder : icons.file
}

export default function FileItemIcon(fileItem: Props) {
  const icon = getFileName(fileItem)
  return (
    <div>
      <img src={icon} className="folderIcon" width={"24px"} height={"24px"} />
    </div>
  )
}
