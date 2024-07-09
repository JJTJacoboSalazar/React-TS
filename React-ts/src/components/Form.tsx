import { useState } from "react";

const Form = () => {
    const [inputValues, setInputValues] = useState({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })

    const handleSubmit = () => {
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValues({
            ...inputValues,
            [e.target.placeholder]: e.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" placeholder="Nick" />
                <input onChange={handleChange} value={inputValues.subMonths} type="number" placeholder="Sub months" />
                <input onChange={handleChange} value={inputValues.avatar} type="text" placeholder="Avatar" />
                <input onChange={handleChange} value={inputValues.description} type="text" placeholder="description" />
                <button type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form