import { Calendar } from "@/components/ui/calendar"
import { DropdownMenu } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const IndexView = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  return (
    <>
      <h1 className="flex text-3xl font-bold text-red-500">Halo dunia</h1>
      <h2 className="text-5xl font-bold text-green-500">
        Selamat tinggal dunia
      </h2>

      <Calendar
        selected={date}
        onSelect={setDate}
        className="border-2 border-red-500 bg-slate-300 text-red-500"
      />
      <Button>Tai</Button>
      <DropdownMenu />
    </>
  )
}
export default IndexView
