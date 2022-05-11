import React, { useState, useEffect } from 'react'
import axios from 'axios'

const prompts = [
    'Tell us about your favorite food?',
    'Tell us about your favorite color?',
    'Tell us about your favorite animal?',
    'Tell us about your favorite movie?',
    'Tell us about your favorite snack?',
]
const initialInput = {
    answer: ''
}
const Form = () => {
    const secret = process.env.REACT_APP_OPENAI_SECRET
    const [input, setInput] = useState(initialInput)
    const [prompt, setPrompt] = useState('')
    const handleChange = e => {
        setInput({            
            [e.target.name]: e.target.value
        })        
    }

    const handleSubmit = e => {
        e.preventDefault()
        let dataToSend = {
            prompt: prompt,
            input: input.answer
        }
        console.log(dataToSend)
        axios.post('https://api.openai.com/v1/engines/text-curie-001/completions', JSON.stringify(dataToSend), {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${secret}`
            }
        })
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }
    useEffect(() => {
        let num = Math.floor(Math.random()*4)
        setPrompt(prompts[num])
    }, [])
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor='prompt'>Prompt</label>
                <h2>{prompt}</h2>
                <label htmlFor='answer'>Your Answer</label>
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