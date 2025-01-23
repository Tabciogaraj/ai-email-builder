import Image from 'next/image';
import React, { useState } from 'react'
import { Button } from '../ui/button';

function EmailTemplateList() {
    const [emailList,setEmailList]=useState([]);
  return (
    <div>
        <h2 className='font-bold text-xl apka-gradient mt-8 '>Workspace</h2>
        {emailList?.length==0&&
        <div className='flex flex-col items-center justify-center mt-7'>
           <Image src={'/email.png'}
            alt='email' height={250}
            width={250}
             />
             <Button className="mt-7">+ Stwórz szablon</Button>   
        </div>
    }
    </div>
  )
}

export default EmailTemplateList