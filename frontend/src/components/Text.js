import React, { Component } from 'react'
import { TextContainer, UserText, Content, ParentTextContainer } from '../components/styles/text-styles'

class Text extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
        this.myRef= React.createRef()
    }

    componentDidUpdate() {
        this.myRef.current.scrollTop= this.myRef.current.scrollHeight
    }

    render() {
        const { userText, botText } = this.props
        return (
            <TextContainer ref= {this.myRef}>
                <UserText>
                    {
                        userText.map((text,index) => {
                            return <Content key={index} user green><p>{text}</p></Content>
                        })
                    }
                </UserText>
                <UserText>
                    {
                        botText.map((text,index) => {
                            return <Content key= {index} bot><p>{text}</p></Content>
                        })
                    }
                </UserText>
            </TextContainer>            
        );
    }
}

export default Text;
