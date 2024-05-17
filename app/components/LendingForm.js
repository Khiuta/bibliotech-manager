'use client';
import React, { useState } from 'react'
import moment from 'moment';

import axios from '../services/axios';

const LendingForm = () => {
  const initialData = {
    book_name: '',
    book_author: '',
    student_name: '',
    student_class: '',
    student_grade: '',
  }
  const [lendData, setLendData] = useState(initialData)
  const data_emprestimo = moment().format('DD/MM/YY');
  const data_entrega = moment().add(15, 'days').format('DD/MM/YY');

  const handleChange = (e) => {
    const { value, name } = e.target;
    setLendData({...lendData, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/lending', lendData)
      setLendData(initialData);
      toast.success('Livro emprestado!');
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full h-[85%] p-6'>
      <label htmlFor='livro' className='flex flex-col w-[50%] h-[15%] p-4 text-2xl'>
        <p>Livro</p>
        <input 
          id='livro' 
          className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none'
          value={lendData.book_name}
          name='book_name'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='autor' className='flex flex-col w-[50%] h-[15%] p-4 text-2xl'>
        <p>Autor</p>
        <input 
          id='autor' 
          className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none'
          value={lendData.book_author}
          name='book_author'
          onChange={handleChange}
        />
      </label>
      <label htmlFor='aluno' className='flex flex-col w-[50%] h-[15%] p-4 text-2xl'>
        <p>Aluno</p>
        <input 
          id='aluno' 
          className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none'
          value={lendData.student_name}
          name='student_name'
          onChange={handleChange}
        />
      </label>
      <div className='flex w-[50%] h-[15%]'>
        <label htmlFor='turma' className='flex flex-col w-[50%] h-full p-4 text-2xl'>
          <p>Turma</p>
          <input 
          id='livro' 
          className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none'
          value={lendData.student_class}
          name='student_class'
          onChange={handleChange}
        />
        </label>
        <label htmlFor='serie' className='flex flex-col w-[50%] h-full p-4 text-2xl'>
          <p>Série</p>
          <input 
          id='livro' 
          className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none'
          value={lendData.student_grade}
          name='student_grade'
          onChange={handleChange}
        />
        </label>
      </div>
      <div className='flex w-[50%] h-[15%]'>
        <label htmlFor='data_emp' className='flex flex-col w-[50%] h-full p-4 text-2xl'>
          <p>Data de empréstimo</p>
          <input 
            id='data_emp' 
            className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none' 
            value={data_emprestimo}
            readOnly
          />
        </label>
        <label htmlFor='data_ent' className='flex flex-col w-[50%] h-full p-4 text-2xl'>
          <p>Data de entrega</p>
          <input 
            id='data_ent'
            className='flex text-black bg-white w-[80%] min-h-[60%] rounded-lg p-2 border-none focus:outline-none' 
            value={data_entrega}
            readOnly
          />
        </label>
      </div>
      <footer className='flex w-[50%] h-[15%] items-center justify-center'>
        <button type='submit' className='text-2xl text-black border-none bg-white p-4 rounded-lg'>Emprestar</button>
      </footer>
    </form>
  )
}

export default LendingForm