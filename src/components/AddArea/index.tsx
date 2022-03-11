import { useState, KeyboardEvent } from 'react';
import * as C from './styles';

export const AddArea = () => {
    const [inputText, setInputText] = useState ('')

    const handleKeyUp = (e: KeyboardEvent) => {
        console.log(e.code);

    }

    return(
        <C.Container>
            <div className="image">➕</div>
            <input
            type="text"
            placeholder="Adcione uma tarefa"
            value={inputText}
            onChange={e=>setInputText(e.target.value)}
            onKeyUp={handleKeyUp}
            />
            
        </C.Container>

    )
}