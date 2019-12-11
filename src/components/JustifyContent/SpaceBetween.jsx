import React from 'react';
import styled from 'styled-components';


export function SpaceBetween(props) {
    
    const nBoxes = props.nBoxes ? props.nBoxes : 3
    const Boxes = [];

    for (let i = 0; i < nBoxes; i ++) {
        Boxes.push(
            <BoxElement key={i}/>
        )
    }

    return (
        <SpaceBetweenAlignment>
            {
                Boxes
            }
        </SpaceBetweenAlignment>
    );
}

const SpaceBetweenAlignment = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 10px;
`;

const BoxElement = styled.div`
    width: 50px;
    height: 50px;
    background: red;
`;
