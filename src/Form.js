import React, { useState } from 'react'
import './Form.css'

function Form() {
  const [err, setErr] = useState('')
  const [nums, setNums] = useState('')
  const [selection, setSelection] = useState('')
  const [result, setResult] = useState('')
  const regex = /[a-zA-Z ]/
  const submit = e => {
    e.preventDefault()
    if (nums === '' || regex.test(nums)) {
      setErr('Invalid input.')
    } else if (selection === 'sum') {
      const arr = nums.split(',')
      console.log(arr)
      setResult(arr.reduce((acc, cur) => +acc + +cur, 0))
    } else if (selection === 'average') {
      const arr = nums.split(',')
      console.log(arr)
      setResult(arr.reduce((acc, cur) => +acc + +cur, 0) / arr.length)
    } else {
      const obj = {}
      const arr = nums.split(',')
      let cur = arr[0]
      arr.forEach(el => {
        if (obj[el]) {
          obj[el] = obj[el]+1
        } else {
          obj[el] = 1
        }
      })
      for(const el in obj){
        if(obj[el]>obj[cur]){
          cur = el
        }
      }
        setResult(cur)
      }
    }
  
  const handleTextInput = e => {
    setNums(e.target.value)
    console.log(nums)
  }
  const handleSelection = e => {
    setSelection(e.target.value)
  }
  return (
    <>
      <form onSubmit={submit}>
        <input
          id='values'
          name='values'
          type='text'
          onChange={handleTextInput}
        />
        <p>{err}</p>
        <select id='operation' name='operation' onChange={handleSelection}>
          <option value=''></option>
          <option value='sum'>sum</option>
          <option value='average'>average</option>
          <option value='mode'>mode</option>
        </select>
        <button type='submit'>Calculate</button>
      </form>
      <section id='result'>
        <p>{result}</p>
      </section>
    </>
  )
}

export default Form
