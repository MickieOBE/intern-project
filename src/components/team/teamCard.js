import React from 'react'

function TeamCard({name, profession, image}) {
  return (
      <div className='bg-white shadow-md w-[20vw] rounded-2xl m-2 min-w-[250px] transition hover:translate-y-2 delay-75 hover:brightness-75 '>
        <div className=' h-[15rem] w-full'>
          <img src={image} alt="" className='w-full h-full object-cover rounded-t-2xl'/>
        </div>
        <div className=' w-full  flex flex-col items-center justify-center p-2'>
          <h1 className=' font-extrabold text-lg text-[#0F123B]'>{name}</h1>
          <p className='text-[#0F123B]/60'>{profession}</p>
          <div className='flex items-center justify-center p-2'>
            <div className='w-[20px] h-[20px]  rounded-full m-2'>
              <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687811518/icons8-facebook-50_rmmudy.png" alt="" className='w-full h-full object-cover'/>
            </div>
             <div className='w-[20px] h-[20px]rounded-full m-2'>
              <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687811518/icons8-instagram-48_jl2od5.png" alt="" className='w-full h-full object-cover'/>
            </div>
             <div className='w-[20px] h-[20px] rounded-full m-2'>
              <img src="https://res.cloudinary.com/dmhsf5hqd/image/upload/v1687811519/icons8-twitter-30_az2vz7.png" alt="" className='w-full h-full object-cover'/>
            </div>
            
          </div>
        </div>
      </div>
  )
}

export default TeamCard