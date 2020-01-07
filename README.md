# my-speech-bot
A simple speech bot using WebSpeechAPI , React , Node , API.AI

## Installation
```bash
git clone the project to your local machine
cd frontend; npm run dev
cd backend; node server.js
Go to localhost:8080 on your browser
```
## Requirements

- You need to request for a key to use the API.AI calls.
- The port that the server is running on should be the same that the
  client socket connects to. For eg: The code uses the environment variable
  CLIENT_URL= "http://localhost:{PORT}. This PORT should be the same as the PORT
  on the backend.
  
## How it works

#### Backend

The server is implemented using NodeJS and Express framework. To enable bidirectional
communication between the server and the client we use Socket.IO. We also use the 
natural language processing tool API.AI to build an AI chatbot that can have sustain an
artificial conversation.

### Frontend

The frontend/client has been implemented using the React framework. WebSpeech API has been 
integrated into the framework. It provides the SpeechRecognition interface that processes the 
user text available through a microphone. It passes the text to the socket interface which is 
then sent to the backend API.AI interface and the reply from the bot is passed to the client
through sockets.

## UI

UI for this app is very simple. Press the button to start the conversation. The conversation is 
printed in the area below the button. Every time you need to speak, the button needs to be pressed.
