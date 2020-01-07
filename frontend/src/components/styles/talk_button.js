import styled from 'styled-components'
import ButtonImage from '../images/talk_button.svg'

export const TalkButton= styled.button`
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    background-image: url(${ButtonImage});
    background-size: cover;
    position: absolute;
    top: 20%;
    left: 44%;
    outline: none;
`
