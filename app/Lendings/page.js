import React from 'react'

import axios from '../services/axios';
import Sidebar from '../components/Sidebar'
import LendingForm from '../components/LendingForm';

const Lendings = () => {
  return (
    <main className='flex w-full h-screen'>
      <Sidebar selected='3' />
      <div className='flex flex-col w-full h-screen bg-main'>
        <header className='flex w-full h-[15%] items-end px-10 '>
          <h1 className='text-5xl'>Empréstimo de livros</h1>
        </header>
        <LendingForm />
      </div>
    </main>
  )
}

export default Lendings