import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState(['One Punch']);
    const inputChange = (event) => {
        let _inputValue = event.target.value
        setInputValue(_inputValue);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const _inputValue = inputValue.trim();
        if(_inputValue === '') return;

        onNewCategory( _inputValue )
        setInputValue('');
    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
            type="text" 
            placeholder="Buscar gifs "
            value={inputValue}
            onChange={ inputChange }
            />
        </form>
    )
} 