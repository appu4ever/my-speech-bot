require('dotenv').config()
const app= require('express')()

const server= app.listen(process.env.PORT || 5000, () => {
    console.log("Server listening on port %d in %s mode", server.address().port, app.settings.env)
})

const API_TOKEN= process.env.APIAI_KEY
const apiai= require('apiai')(API_TOKEN)

const io= require('socket.io')(server)
io.on('connection', async (socket) => {
    console.log("A user is connected")
    await socket.on('chat message', (text) => {
        console.log(text)
        let apiaiReq= apiai.textRequest(text, {
            sessionId: process.env.SESSION_ID
        })

        apiaiReq.on('response', (response) => {
            let aiText= response.result.fulfillment.speech
            console.log("bot reply",aiText)
            socket.emit('bot reply',aiText)
        })

        apiaiReq.on('error', (err) => {
            console.log("Errored out : "+err)
        })

        apiaiReq.end()
    })
})