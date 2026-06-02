import { Header } from "@/components/Header"
import { redirect } from "next/dist/server/api-utils"
export default function Page() {
  return (
    <div>
      <Header/>
      <h1>Odeio a nassau!!</h1>
    </div>
  )
}
