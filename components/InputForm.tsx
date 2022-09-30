import { useState } from 'react'

const InputForm = (props: any) => {
  
  const [number, setNumber] = useState('')

  function handleChange(event: any) {
    setNumber(event.target.value);
  }

  function handleKeyDown(event: any) {
    if (event.key === 'Enter') {
      props.addNumber(number.toLocaleLowerCase());
      setNumber('');
    }
  }
  console.log(number)
  return (
    <input
      id="id"
      type="text"
      placeholder="Enter a number o the word random"
      value={number}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  )
}

export default InputForm
