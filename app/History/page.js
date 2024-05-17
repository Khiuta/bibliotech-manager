import React from 'react'

import axios from '../services/axios';
import Sidebar from '../components/Sidebar'

const History = async () => {
  let searchData = (await axios.get('/lending')).data;

  return (
    <main className='flex w-full h-screen bg-main'>
      <Sidebar selected='2' />
      <div className='flex flex-col w-full h-screen'>
        <header className='flex w-full h-[15%] items-end justify-between px-10'>
          <h1 className='text-5xl'>Histórico</h1>
          <input className='flex bg-[#191919] w-[30%] h-[40%] rounded-2xl p-4 text-xl focus: outline-none' placeholder='Procure por um livro' />
        </header>
        <div className='flex w-full h-[15%] items-end justify-center gap-[10%]'>
          <div className='pt-4 pb-1 border-b-lend-bar border-b-4 rounded-sm'>
            <h1 className='text-4xl'>No prazo</h1>
          </div>
          <div className='flex pt-4 pb-1 border-b-pend-bar border- border-b-4 rounded-sm'>
            <h1 className='text-4xl'>Pendentes</h1>
          </div>
        </div>
        <div className='flex flex-col w-full h-[70%] items-center overflow-y-auto'>
          {searchData.map(lend => (
            lend.pendent == false ?
            <div className='flex w-full min-h-[15%] justify-center p-4 gap-8'>
              <div className='flex w-[70%] h-full items-center px-[5%] bg-gradient-to-r from-lend-bar from-[5%] to-5% to-white rounded-full'>
                <h1 className='text-black text-xl'>{lend.book_name} | {lend.student_name} / {lend.student_class} {lend.student_grade}</h1>
              </div>
              <button className='border-none rounded-full bg-white h-full w-[4%]' />
            </div> :
            <div className='flex w-full min-h-[15%] justify-center p-4'>
              <div className='flex w-[70%] h-full items-center px-[5%] bg-gradient-to-r from-pend-bar from-[5%] to-5% to-white rounded-full'>
                <h1 className='text-black text-xl'>{lend.book_name} | {lend.student_name} / {lend.student_class} {lend.student_grade}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}

export default History