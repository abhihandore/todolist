import React from 'react';
import styled from 'styled-components';

const ButtonStyled = styled.button`
        display: inline-block;
        font-size: 1rem;
        line-height: 2.375rem;
        height: 2.5rem;
        border: 1px solid #0072CE;
        min-width: 11.75rem;
        color: #000;
        padding: 0 .895rem;
        cursor: pointer;

        &.disabled{
            opacity: 0.8;
            pointer-events: none;
        }
    `

const Button = (props) => {
    return (
        <ButtonStyled className={`btn btn-primary ${props.className}`} type={props.type} onClick={props.onClick} >
            {props.children}
        </ButtonStyled>
    )
}

export default Button;