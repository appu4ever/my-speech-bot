import React, {Component} from 'react'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'    
import { TextContainer, UserText, BotText, Content } from '../components/styles/text-styles'
import Talk from './Talk';
import Text from './Text'

const GlobalStyles= createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
        border: 0;
        line-height: 1;
        font-size: 1.2rem;
        font-family: 'Poppins', sans-serif;
    }
`
const Container= styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    p {
        text-align: center;
    }
`
const Heading= styled.h1`
    text-align: center;
    padding: 20px;
    font-size: 3.5rem;
`
class App extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            recognition: null,
            socket: null,
            userText: [],
            botText: [],
            listening:false,
            index: 0
         };
         this.updateText= this.updateText.bind(this)
         this.updateListening= this.updateListening.bind(this)
    }

    componentDidMount() {
        let script= document.createElement('script')
        script.type= 'text/javascript'
        script.src= "https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.1/socket.io.js"
        document.getElementsByTagName('head')[0].appendChild(script)
        script.onload = () => {
            const socket= io.connect(`${process.env.CLIENT_URL}`)
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            const recognition = new SpeechRecognition();
            this.setState({recognition, socket})
        }       
    }

    updateText = (userText= "", botText= "") => {
        
        if (userText !== "") this.setState({userText: [...this.state.userText, userText], listening: true})
        if (botText !== "") this.setState({botText: [...this.state.botText, botText], listening: false})
    }

    updateListening = (value) => {
        this.setState({listening: value})
    }

    render() {
        const { socket, recognition, userText, botText, listening, index } = this.state
        return (
           <Container>
               <Heading>My Speech Bot</Heading>
               {
                   listening ? (
                        <p>Conversation in progress ...</p>
                   ) : (
                        <p>Press the button everytime you want to talk to the bot.</p>
                   )
               }
               <GlobalStyles />
                <Talk 
                    socket= {socket} 
                    recognition= {recognition} 
                    userText= {userText}
                    botText= {botText}
                    updateText= {this.updateText}
                    updateListening= {this.updateListening}
                    listening= {listening}
                /> 
                <Text userText= {userText} botText= {botText} />
           </Container> 
        );
    }
}

export default App;