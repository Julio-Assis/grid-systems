import styled from 'styled-components';


export const GenericJustify = styled.div`
    display: flex;
    justify-content: ${props => props.justifyContent};
    width: 100%;
    padding: 10px;
`;
