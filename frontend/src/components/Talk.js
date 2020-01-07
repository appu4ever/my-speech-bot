import React, { Component } from 'react'
import { TalkButton } from '../components/styles/talk_button'

class Talk extends Component {
    constructor(props) {
        super(props);

        this.sendToBot= this.sendToBot.bind(this)
        this.getFromBot= this.getFromBot.bind(this)
    }

    sendToBot = async (e) => {
        console.log(e.results)
        let last= e.results.length - 1
        let text= e.results[last][0].transcript
        let confidence= e.results[0][0].confidence
        this.props.updateText(text)
        await this.props.socket.emit("chat message",text)  
             
    }

    getFromBot = (text) => {
        const synth= window.speechSynthesis
        const utterance= new SpeechSynthesisUtterance()
        utterance.text= text
        synth.speak(utterance)
        this.props.updateText("",text)
    } 

    startConversation = async (e) => {
        const { recognition, socket } = this.props

        e.preventDefault()
        recognition.start()
        this.props.updateListening(true)
        recognition.addEventListener('result',this.sendToBot)
        await socket.once('bot reply', this.getFromBot)
    }
    
    render() {
        return (
            <div>
                <TalkButton onClick= {(e) => this.startConversation(e)}></TalkButton>
            </div>           
        );
    }
}

export default Talk;