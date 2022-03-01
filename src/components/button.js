import styled from 'styled-components';

export const Button = styled.button`
    color: white;
    padding: 10px;
    border: none;
    width: ${props => props.width || ''};
    background: ${props => props.primary ? 'blue' : props.danger ? 'red' : 'gray'};
    margin: 20px;
`
