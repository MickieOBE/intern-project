import React from 'react'
import TeamCard from './teamCard'

function Team() {
  const teamData=[
    {
      name: 'Baluku Wilton',
      profession: 'Project manager',
      image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image3_mmlqmd.webp"
    },
     {
      name: 'Asiimwe Fred',
      profession: 'Director',
      image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image6_n44pde.webp"
    },
       {
      name: 'Bukenya Kizza Ronald',
      profession: 'Thief',
      image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image5_zrmly0.webp"
    },
        {
      name: 'Ouma Benard',
      profession: 'Thief',
      image: "https://res.cloudinary.com/dmhsf5hqd/image/upload/v1686837946/image7_heqwyq.webp"
    },
  ];
  return (
    <div className='space-y-4  mt-[7rem] w-full border-t-2 py-8 grid grid-cols-1 gap-2   items-enter'>
     <div className='  text-center '>
       <h1 className='text-[#E74545] mb-4 '>Team</h1>
      <p className=' text-3xl text-[#0F123B] font-bold mb-4'>Our Team</p>
      <p className='text-[#0F123B]/60'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate illum necessitatibus quaerat </p>
     </div>
      <div className='grid grid-cols-1 gap-2 md:flex items-center justify-center '>
        {
        teamData.map((data)=>
        <TeamCard name={data.name} profession={data.profession} image={data.image}/>
        )
      }
      </div>
    </div>
  )
}

export default Team

 