import React from 'react';
import styled from "styled-components";


const AutoFillGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  row-gap: 1em;
`;

const GridElement = styled.div`
    width: 50px;
    height: 50px;
    margin: 1px;
    background: black;
`;


export function AutoFillGrid(props) {

    const nBoxes = props.nBoxes ? props.nBoxes : 3
    const Boxes = [];

    for (let i = 0; i < nBoxes; i ++) {
        Boxes.push(
            <GridElement key={i}/>
        )
    }
    return (
        <AutoFillGridContainer>
            {
                Boxes
            }
        </AutoFillGridContainer>
    );
}
