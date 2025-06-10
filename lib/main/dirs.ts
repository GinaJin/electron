import fs from "fs"
import path from "path"

export async function readDir({
  path: dir,
  dirOnly = false,
  showHidden = false,
}) {
  try {
    let items = fs.readdirSync(dir)
    console.log(items)
    if (!showHidden) {
      items = items.filter(item => !item.startsWith("."))
    }

    let fullPathItems = items
      .map(item => path.join(dir, item)) // 全路径
      .map(item => ({
        isDir: isDir(item),
        path: item,
      }))

    if (dirOnly) {
      fullPathItems = fullPathItems.filter(item => item.isDir)
    }

    return fullPathItems
  } catch (e) {
    console.log(e)
    return []
  }
}

function isDir(path) {
  try {
    return fs.statSync(path).isDirectory()
  } catch {
    return false
  }
}
