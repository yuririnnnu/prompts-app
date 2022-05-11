import React, { useState } from 'react'
import axios from 'axios'

const initialInput = {
    prompt: '',
    answer: ''
}

const Form = () => {
    const [input, setInput] = useState(initialInput)

    const handleChange = e => {
        setInput({
            prompt: e.target.prompt,
            answer: e.target.answer
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios.post('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label for='prompt'>Name</label>
                <input 
                value={input.prompt}
                onChange={handleChange}                
                placeholder='Prompt'
                name='prompt'
                type='text'
                />
                <label for='answer'></label>
                <input 
                value={input.answer}
                onChange={handleChange}
                placeholder='You can input anything here'
                name='answer'
                type='text'
                />
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form