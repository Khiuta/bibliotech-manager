import React from 'react'
import Link from 'next/link';
import PropTypes from 'prop-types';

import { HiMiniSquares2X2 } from "react-icons/hi2";
import { FaRegHourglass } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa";

const Sidebar = ({ selected }) => {
  let bg1 = (selected == '1') ? 'selected' : 'main';
  let bg2 = (selected == '2') ? 'selected' : 'main';
  let bg3 = (selected == '3') ? 'selected' : 'main';
  let bg4 = (selected == '4') ? 'selected' : 'main';

  return (
    <div className='flex flex-col w-[15%] h-screen bg-main border-r-[1px] border-r-[#454545]'>
      <div className='flex w-full justify-center items-center h-[40%]'>

      </div>
      <div className='flex flex-col w-full h-[60%]'>
      <Link href='/Home' className={`flex items-center bg-${bg1} gap-2 py-8 px-2 w-full h-8`}>
        <HiMiniSquares2X2 color='#ffffff' size={40} />
        <p className='text-3xl'>Início</p>
      </Link>
      <Link href='/History' className={`flex items-center bg-${bg2} gap-2 py-8 px-2 w-full h-8`}>
        <FaRegHourglass color='#ffffff' size={40} />
        <p className='text-3xl'>Histórico</p>
      </Link>
      <Link href='/Lendings' className={`flex items-center bg-${bg3} gap-2 py-8 px-2 w-full h-8`}>
        <FaBook color='#ffffff' size={40} />
        <p className='text-3xl'>Empréstimos</p>
      </Link>
      <Link href='/Collection' className={`flex items-center bg-${bg4} gap-2 py-8 px-2 w-full h-8`}>
        <FaRegBookmark color='#ffffff' size={40} />
        <p className='text-3xl'>Acervo</p>
      </Link>
      </div>
    </div>
  )
}

Sidebar.propTypes = {
  selected: PropTypes.string.isRequired,
}

export default Sidebar