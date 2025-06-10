import { FileItemProps } from "../types"
import ActionBar from "./ActionBar"
import MainItem from "./MainItem"

type Props = {
  items: FileItemProps[]
}

export default function ({ items }: Props) {
  return (
    <div className="flex flex-col gap-[8px] w-full">
      <ul className="flex gap-[16px] bg-[#f5f6f7] rounded-[4px]">
        <ActionBar />
      </ul>
      <ul className="preview flex-grow-1">
        {items.map((item, index) => (
          <MainItem key={index} {...item}></MainItem>
        ))}
      </ul>
    </div>
  )
}
