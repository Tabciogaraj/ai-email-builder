"use client"
import { useUserDetail } from '@/app/provider'
import EmailTemplateList from '@/components/custom/EmailTemplateList';
import Header from '@/components/custom/Header'
import { Button } from '@/components/ui/button';
import React from 'react'

function Dashboard() {

    const {userDetail,setUserDetail}=useUserDetail();

  return (
    <div>
        <Header />
        <div className='p-10 md:px-28 lg:px-40 xl:px-56 mt-10'>
            <div className='flex justify-between'>
                <h2 className='font-bold text-3xl'>Cześć, {userDetail?.name}</h2>
                <Button>+ Stwórz nowy szablon </Button>
            </div>
            <EmailTemplateList />
        </div>
    </div>
  )
}

export default Dashboard