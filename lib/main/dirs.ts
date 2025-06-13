import fs from "fs"
import path from "path"

export async function createDir({ path: dir, folderName }) {
  const fullPath = path.join(dir, folderName)
  const exists = await checkFileExists(fullPath)
  if (exists) {
    return { status: "error", msg: "文件夹已存在" }
  }
  await fs.promises.mkdir(fullPath)
  return { status: "success", msg: "新建成功" }
}

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

export async function upload({ dir, filePath }) {
  if (!filePath) return { status: "error", msg: "文件为空" }
  const fileName = getFileName(filePath)
  const dest = path.join(dir, fileName)
  console.log("copy file======>", filePath, dest)
  try {
    await fs.promises.copyFile(filePath, dest, fs.constants.COPYFILE_EXCL)
    return true
  } catch (err) {}
  return false
}

function isDir(path) {
  try {
    return fs.statSync(path).isDirectory()
  } catch {
    return false
  }
}

async function checkFileExists(filePath: string) {
  try {
    await fs.promises.access(filePath, fs.constants.F_OK)
    return true // 文件存在
  } catch {
    return false // 文件不存在
  }
}

function getFileName(path: string) {
  return path.split("/").at(-1) || "/"
}
