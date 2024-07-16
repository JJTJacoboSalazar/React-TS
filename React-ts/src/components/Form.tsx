import {Sub} from '../types'
import useNewFormSub from "../hooks/useNewSubForm";
import './Form.module.css'

interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {

    const [inputValues, dispatch] = useNewFormSub()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        onNewSub(inputValues)
        dispatch({
            type: 'clear',
            payload: {
                inputName: '',
                inputValue: '',
            },
        })

    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>  ) => {
        const {name, value} = e.target
        dispatch({
            type: 'change_value',
            payload: {
                inputName: name,
                inputValue: value
            }
        })
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit} className="form">
                <input className="input" name="nick" onChange={handleChange} value={inputValues.nick} type="text" placeholder="Name" />
                <input className="input" name="subMonths" onChange={handleChange} value={inputValues.subMonths} type="number" placeholder="Sub Months" />
                <input className="input" name="avatar" onChange={handleChange} value={inputValues.avatar} type="text" placeholder="Avatar" />
                <input className="input" name="description" onChange={handleChange} value={inputValues.description} type="text" placeholder="Description"/>
                <button className="button clear" type="button">Clear</button>
                <button className="button submit" type="submit">Add</button>
            </form>
        </div>
    );
}

export default Form