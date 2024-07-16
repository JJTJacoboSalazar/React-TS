import { useReducer } from "react"
import { Sub } from '../types'

const initial_state = {	
    nick: '',
    subMonths: 0,
    avatar: '',
    description: ''

}


interface FormState {
    inputValues: Sub
}

const formReducer = (state: FormState["inputValues"] , action: FormReducerAction) => {
    switch (action.type) {
        case "change_value":
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
            case "clear":
                return initial_state
                default:
                    return state
                }
            }
            
            
            type FormReducerAction = {
type: "change_value" | "clear"
payload: {
    inputName: string
    inputValue: string | number
}
}

const useNewFormSub = () => {
    return useReducer(formReducer, initial_state)
}

export default useNewFormSub