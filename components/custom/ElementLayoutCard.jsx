import React from 'react'

function ElementLayoutCard({ layout }) {
    return (
        <div
            className='flex flex-col items-center justify-center border-dashed 
                     border rounded-xl p-3 group hover:shadow-md hover:bg-blue-100 cursor-pointer'>
            {<layout.icon className='p-2 h-9 w-9 group-hover:text-primary' />}
            <h2 className='text-sm'>{layout.label}</h2>
        </div>
    )
}

export default ElementLayoutCard