import React from 'react';
import styled from 'styled-components';

const CardStyled = styled.div`
    border-radius: 10px;
    background-color: #FFF;
    box-shadow: 0 0 2px #ddd;
`;

const Card = (props) => {
    return (
        <CardStyled className={`card`} >
            {props.children}
        </CardStyled>
    )
}

export default Card;