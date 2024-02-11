
import React, {useRef, useState} from 'react'
import Color from './Color';

const Search = ({data}) => {
    const inputRef = useRef()
    const [word, setWord] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        setWord(inputRef.current.value)
    }

  return (
    <div className='p-4'>
        <form onSubmit={handleSubmit} className=''>
            <input
                ref={inputRef}
                placeholder='Enter color'
                type='text'
                className='p-2 bg-gray-200 rounded-md gap-5'
            />
            <button className='text-white mx-2 bg-cyan-800 py-2 px-1 rounded-md'>Search</button>
        </form>

        <Color data={data} color={word}/>
    </div>
  )
}

export default Search