"use client"

import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import SignInButton from './SignInButton'
import { useUserDetail } from '@/app/provider'
import Link from 'next/link'

function Header() {
  const {userDetail, setUserDetail} = useUserDetail();
  return (
    <div className='flex justify-between items-center 
    p-4 shadow-sm px-4'>
        <Image src={'/logo.svg'} alt='logo'
        width={180}
        height={140}
        />

        <div>
          {userDetail?.email ?
        <div className='flex gap-3 items-center'>
          <Link href={'/dashboard'}>
          <Button className='shadow-md'>Dashboard</Button>
          </Link>
          <Image className='rounded-full shadow-md' src={userDetail?.picture} alt='user' width={35} height={35} />
        </div>  : <SignInButton/>
        }
            
        </div>
    </div>
  )
}

export default Header