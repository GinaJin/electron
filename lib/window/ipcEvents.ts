import { readDir } from "@/lib/main/dirs"
import { type BrowserWindow, ipcMain, session, shell } from "electron"
import os from "os"

const handleIPC = (channel: string, handler: (...args: any[]) => void) => {
  ipcMain.handle(channel, handler)
}

export const registerWindowIPC = (mainWindow: BrowserWindow) => {
  // Hide the menu bar
  mainWindow.setMenuBarVisibility(false)

  // Register window IPC
  handleIPC("init-window", () => {
    const { width, height } = mainWindow.getBounds()
    const minimizable = mainWindow.isMinimizable()
    const maximizable = mainWindow.isMaximizable()
    const platform = os.platform()

    return { width, height, minimizable, maximizable, platform }
  })

  handleIPC("is-window-minimizable", () => mainWindow.isMinimizable())
  handleIPC("is-window-maximizable", () => mainWindow.isMaximizable())
  handleIPC("window-minimize", () => mainWindow.minimize())
  handleIPC("window-maximize", () => mainWindow.maximize())
  handleIPC("window-close", () => mainWindow.close())
  handleIPC("window-maximize-toggle", () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  })

  const webContents = mainWindow.webContents
  handleIPC("web-undo", () => webContents.undo())
  handleIPC("web-redo", () => webContents.redo())
  handleIPC("web-cut", () => webContents.cut())
  handleIPC("web-copy", () => webContents.copy())
  handleIPC("web-paste", () => webContents.paste())
  handleIPC("web-delete", () => webContents.delete())
  handleIPC("web-select-all", () => webContents.selectAll())
  handleIPC("web-reload", () => webContents.reload())
  handleIPC("web-force-reload", () => webContents.reloadIgnoringCache())
  handleIPC("web-toggle-devtools", () => webContents.toggleDevTools())
  handleIPC("web-actual-size", () => webContents.setZoomLevel(0))
  handleIPC("web-zoom-in", () =>
    webContents.setZoomLevel(webContents.zoomLevel + 0.5),
  )
  handleIPC("web-zoom-out", () =>
    webContents.setZoomLevel(webContents.zoomLevel - 0.5),
  )
  handleIPC("web-toggle-fullscreen", () =>
    mainWindow.setFullScreen(!mainWindow.fullScreen),
  )
  handleIPC("web-open-url", (_e, url) => shell.openExternal(url))

  handleIPC("read-dirs", async (_e, { path, showHidden, dirOnly }) => {
    const home = process.env.HOME!

    let items = await readDir({
      path: path || home,
      showHidden,
      dirOnly,
    })
    return items
  })
  handleIPC("main-dir", async () => {
    const home = process.env.HOME!
    const cookies = await session.defaultSession.cookies.get({
      name: "main-dir",
    })
    return cookies.length ? cookies[0] : home
  })
}
