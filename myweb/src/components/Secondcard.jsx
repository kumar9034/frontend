import React from 'react'

const Secondcard = ({image, title, name, language, language2}) => {
  return (
    <div className='h-82  w-70 bg-[#333333] mt-5'>
      <div>
        <img src={image} alt="" />
      </div>
      <div className='flex '>
        <div className='border-1 border-[#8a8a8a] w-auto mt-5 ml-3 text-sm text-[#8a8a8a] flex font-bold pr-2 pl-2 justify-center items-center '>{language}</div>
        <div className='border-1 border-[#8a8a8a] w-auto mt-5 ml-2 text-sm text-[#8a8a8a] flex font-bold pr-2 pl-2 justify-center items-center '>{language2}</div>
      </div>
      <h1 className='text-[18px] w-60 text-white font-bold ml-3 mt-2'>{title}</h1>
      <p className='text-sm text-[#8a8a8a] mt-10 ml-3'>By <span className='font-bold'>{name}</span> </p>
    </div>
  )
}

export default Secondcard
