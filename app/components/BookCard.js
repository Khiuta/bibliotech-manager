'use client';
import React, { useState } from 'react'
import { LuTriangle } from "react-icons/lu";
import PropTypes from 'prop-types';

const BookCard = ({ books }) => {
  const [selected, setSelected] = useState(-1);

  const handleClick = (e) => {
    let newSelected = parseInt(e);
    setSelected(newSelected);
  }

  return(
    <>
      {books.map((book) => (
        <>
        {selected == book.id ?
          <div key={book.id} className='flex w-[70%] h-[15%] items-center px-[2%] justify-between bg-gradient-to-l from-green-main from-[8%] to-[8%] to-white rounded-3xl'>
            <section className='flex flex-col gap-4'>
              <h1 className='text-black text-xl'>{book.title} - {book.author}</h1>
              <h1 className='text-black text-xl'>
                Volume {book.volume} | Edição {book.edition} | Editora {book.editor} | Lançamento: {book.release_year} | Quantidade: {book.quantity}
              </h1>
              </section>
            <LuTriangle id={-1} color='#000' size={30} className='cursor-pointer' onClick={e => handleClick(e.target.id)}  />
          </div> :
          <div key={book.id} className='flex w-[70%] h-[10%] items-center px-[2%] justify-between bg-gradient-to-l from-green-main from-[8%] to-[8%] to-white rounded-full'>
            <h1 className='text-black text-xl'>{book.title} - {book.author}</h1>
            <LuTriangle id={book.id} size={30} color='#000' className='cursor-pointer rotate-180' onClick={e => handleClick(e.target.id)} />
          </div>
        }
        </>
      ))}
    </>
  )
}

BookCard.propTypes = {
  books: PropTypes.array.isRequired,
}

export default BookCard