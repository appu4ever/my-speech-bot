import styled from 'styled-components'

export const TextContainer= styled.div`
    width: 70%;
    height: 40%;
    position: absolute;
    bottom: 10%;
    left: 15%;
    display: flex;
    justify-content: space-around;
    overflow-y: auto;
`
export const UserText= styled.ul`
    width: 50%;
    display: flex;
    flex-direction: column;
    margin: 0;   
    padding: 0;
    padding-left: 20px;
    list-style: none;
`
export const Content= styled.li`
    width: auto;
    height: auto;
    border-radius: 20px;
    padding: 0 20px;
    background: ${props => props.green ? 'rgb(152,251,152)' : 'rgb(135,206,250)'};
    margin-top: ${props => props.bot ? '40px' : ''};
    margin-bottom: ${props => props.user ? '40px' : ''};
`