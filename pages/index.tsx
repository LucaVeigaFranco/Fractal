import { useState } from "react"

export default function Home() {

  const [name, setName]= useState ("stranger")
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-5xl text-red-500 text-center">
        
        Hello Luca
     
        
      </div>
        <label>
          Name:
          <input className="text-red-500" type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
        </label>

        <div className="text-5xl text-red-500 text-center">
        
          Hello {name}
     
        
      </div>

    </main>
  )
}
