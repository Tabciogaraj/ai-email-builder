import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { Code, CodeSquare, Monitor, Smartphone } from 'lucide-react'

function EditorHeader() {
  return (
    <div className='p-4 shadow-sm flex justify-between items-center'>
        <Image src={'/logo.svg'} alt='logo' width={160} height={150} />
        <div>
            <Button className="hover:text-primary
            hover:bg-blue-100" variant="ghost "> <Monitor /> Pełny ekran</Button>
            <Button className="hover:text-primary
            hover:bg-blue-100" variant="ghost"> <Smartphone /> Mobilne</Button>
        </div>
        <div className='flex gap-3'>
            <Button variant="ghost"
            className="hover:text-primary
            hover:bg-blue-100">
                <Code />
            </Button>
            <Button variant="outline">Wyślij testowego meila</Button>
            <Button>Zapisz</Button>
        </div>
    </div>
  )
}

export default EditorHeader