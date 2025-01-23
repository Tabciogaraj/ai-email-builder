import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import SignInButton from './SignInButton'

function Hero() {
  return (
    <div className='px-10 md:px-28 lg:px-44 xl:px-56
    flex flex-col items-center mt-24'>
        <h2 className='font-bold text-4xl text-center
        '>AI-Powered
         <span className='bg-gradient-to-r from-violet-600 to-indigo-600 bg-clip-text text-transparent'> Email Templates</span></h2>
    
        <p className='text-center mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, dolorem aspernatur? Debitis eos atque alias voluptatem magni deleniti sit, explicabo nostrum ipsa necessitatibus laboriosam inventore consequuntur voluptatum sequi officiis. Deserunt?</p>
    
        <div className='flex gap-5 mt-6'>
        <Button variant="outline">Wypróbuj za darmo</Button>
        <SignInButton/>
        </div>

        <Image src={'/landing.png'} alt='landing' width={1000} height={800}
        className='mt-12 rounded-xl'
        />
        
    
    </div>

    
  )
}

export default Hero