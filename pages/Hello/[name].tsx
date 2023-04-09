import { useRouter } from "next/router"

export default function Home() {

  const router=useRouter()
  const name=router.query.name
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl text-red-500 text-center">
        
        Hello {name}
      </div>
        
      
    </main>
  )
}
