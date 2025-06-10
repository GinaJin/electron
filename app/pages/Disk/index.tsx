import toast from "@/app/utils/toast"
import { useEffect, useState } from "react"
import { useEffectOnce } from "react-use"
import Fav from "./components/Fav"
import Main from "./components/Main"
import Context from "./context"
import useBackForward from "./useBackForward"

export default function () {
  const [currentDir, setCurrentDir] = useState("")
  const [favDirs, setFavDirs] = useState([] as any[])
  const [dirs, setDirs] = useState([] as any[])
  const [selected, setSelected] = useState("")
  const [showHidden, setShowHidden] = useState(false)
  const [dirOnly, setDirOnly] = useState(false)
  const { back, forward, go, canBack, canForward } =
    useBackForward(setCurrentDir)

  useEffectOnce(() => {
    window.api.invoke("main-dir").then(dir => go(dir))
  })

  useEffect(() => {
    if (!currentDir) return
    listDir(currentDir)
  }, [currentDir, showHidden, dirOnly])

  const listDir = (path?: string) => {
    window.api.invoke("read-dirs", { path, showHidden, dirOnly }).then(dirs => {
      setDirs(dirs)
    })
  }

  const listParentDir = () => {
    const parentPath = currentDir.split("/").slice(0, -1).join("/") || "/"
    go(parentPath)
  }

  const addFavDir = path => {
    const next = [...new Set([...favDirs, path])]
    setFavDirs([...next])
    toast.show("移除成功!")
  }

  const removeFavdir = (path: string) => {
    const favSet = new Set(favDirs)
    favSet.delete(path)
    const next = [...favSet]
    setFavDirs(next)
    toast.show("移除收藏成功!")
  }

  return (
    <Context
      value={{
        currentDir,
        setCurrentDir,
        listDir,
        listParentDir,
        go,
        back,
        forward,
        canBack,
        canForward,
        addFavDir,
        removeFavdir,
        selected,
        setSelected,
        setShowHidden,
        setDirOnly,
      }}
    >
      <div className="disk flex w-full gap-[8px]">
        <Fav items={favDirs}></Fav>
        <Main items={dirs}></Main>
      </div>
    </Context>
  )
}
