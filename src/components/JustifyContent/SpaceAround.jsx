import React from 'react';
import styled from 'styled-components';


export function SpaceAround(props) {
    
    const nBoxes = props.nBoxes ? props.nBoxes : 3
    const Boxes = [];

    for (let i = 0; i < nBoxes; i ++) {
        Boxes.push(
            <BoxElement key={i}/>
        )
    }

    return (
        <SpaceAroundAlignment>
            {
                Boxes
            }
        </SpaceAroundAlignment>
    );
}

const SpaceAroundAlignment = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    padding: 10px;
`;

const BoxElement = styled.div`
    width: 50px;
    height: 50px;
    background: blue;
`;
