import ActionBarFile from "./ActionBarFile"
import ActionBarNav from "./ActionBarNav"

export default function ActionBar() {
  return (
    <ul className="flex items-center gap-[16px] p-[8px] bg-[#f5f6f7] rounded-[4px] mb-[4px]">
      <ActionBarNav />
      <ActionBarFile />
    </ul>
  )
}
