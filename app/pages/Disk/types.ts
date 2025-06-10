export type FileInfoProps = {
  isSelected: boolean
  onClick: (path: string) => void
  onDoubleClick: (path: string) => void
  onRemove: (e) => void
} & FileItemProps

export type FileItemProps = {
  path: string
  isDir: boolean
}

export type VoidFn = () => void
export type SetDirFn = (path: string) => void
export type DiskContext = {
  currentDir: string
  setCurrentDir: SetDirFn
  listDir: (path: string) => void
  listParentDir: VoidFn
  back: VoidFn
  forward: VoidFn
  go: (path: string) => void
  canBack: boolean
  canForward: boolean
  addFavDir: (path: string) => void
  removeFavdir: (path: string) => void
}
