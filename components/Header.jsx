import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between'>
        <div className='font-bold'>
            LOGO
        </div>
        <div className='flex gap-10 font-semibold'>
            <div>
                <button className='text-[#009379]'>Contact</button>
            </div>
            <div >
                <button>How it Works</button>
            </div>
            <div>
                <button>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Header