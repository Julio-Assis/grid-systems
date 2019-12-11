import React from 'react';
import styled from 'styled-components';

export function SixColumnGrid(props) {

    const nBoxes = props.nBoxes ? props.nBoxes : 3
    const Boxes = [];

    for (let i = 0; i < nBoxes; i ++) {
        Boxes.push(
            <GridElement key={i}/>
        )
    }
    return (
        <GridContainer>
            {
                Boxes
            }
        </GridContainer>
    );
}

const GridElement = styled.div`
    width: 50px;
    height: 50px;
    margin: 1px;
    background: black;
`;


const GridContainer = styled.div`
    width: 100%;
    padding: 20px;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`;
