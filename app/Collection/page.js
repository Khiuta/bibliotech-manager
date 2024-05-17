import React from 'react'

import axios from '../services/axios'
import Sidebar from '../components/Sidebar'
import BookCard from '../components/BookCard';

const Collection = async () => {
  let searchData = (await axios.get('/book')).data;

  async function getData() {
    searchData = (await axios.get('/book')).data;
    console.log(searchData)
  }

  return (
    <main className='flex w-full h-screen'>
      <Sidebar selected='4' />
      <div className='flex flex-col w-full h-screen bg-main'>
        <header className='flex w-full h-[15%] items-end justify-between px-10'>
          <h1 className='text-5xl'>Acervo</h1>
          <input className='flex bg-[#191919] w-[30%] h-[40%] rounded-2xl p-4 text-xl focus: outline-none' placeholder='Procure por um livro' />
        </header>
        <div className='flex flex-col w-full h-[85%] px-4 py-10 items-center gap-4'>
          {searchData != undefined ? <BookCard books={searchData} /> : null}
        </div>
      </div>
    </main>
  )
}

export default Collection