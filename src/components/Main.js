import React from 'react'
import Button from '@mui/material/Button';

function Main() {
    return (
        <div className="relative flex flex-col z-30 h-full">
           <div className="bg-gray-300 w-full text-center bg-opacity-90 p-10">
                 <h1 className="text-5xl font-600">UGV International Students Official Site</h1>
                 <p className="p-3 text-justify font-light align-middle pt-10 pb-10">Welcome to UGV international student site, here we showcase our life and exprence in university of global village,<br/> our details, semester, courses, and many more.</p>
                 <Button coloor="primary"className="bg-blue-700 hover:bg-yellow-500">Learn More</Button>
             </div> 
        </div>
    )
}

export default Main
