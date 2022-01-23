import React from 'react';
import styled from 'styled-components';

const InputStyled = styled.input`
    height: 2.5rem;
    border: 1px solid #ddd;

`;

const Input = (props) => {
    return (
        <div className={`${props.isValid ? 'valid' : 'invalid' } field`}>
            <label className="label" htmlFor={props.id}>{props.label}</label>
            <div className="control">
                <InputStyled id={props.id} type={props.type} className={`input-field ${props.className} `} value={props.value} name={props.name} onChange={props.onChange} />
            </div>
        </div>
        
    )
}
export default Input;