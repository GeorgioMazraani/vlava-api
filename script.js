const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
    res.send('Hello World')
})
var data = [
    {
        "icon": "bi bi-stack-overflow",
        "title": "Stack Overflow",
        "description": "Where developers learn, share, & build careers."
    },
    {
        "icon": "bi bi-youtube",
        "title": "YouTube",
        "description": "Enjoy the videos and music you love, upload original content, and share it all with friends, family, and the world."
    },
    {
        "icon": "bi bi-reddit",
        "title": "Reddit",
        "description": "Reddit is a network of communities where people can dive into their interests, hobbies, and passions."
    },
    {
        "icon": "bi bi-tiktok",
        "title": "TikTok",
        "description": "Discover and create short videos with music, filters, and more."
    },
    {
        "icon": "bi bi-facebook",
        "title": "Facebook",
        "description": "Connect with friends, family, and other people you know. Share photos and videos, send messages and get updates."
    },
    {
        "icon": "bi bi-spotify",
        "title": "Spotify",
        "description": "Spotify is all the music you’ll ever need, available wherever you go."
    }
]
app.get('/services', function (req, res) {
    res.send(data)
})

app.listen(3000)