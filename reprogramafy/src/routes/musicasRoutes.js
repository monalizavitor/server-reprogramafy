const express = require('express')

const router = express.Router()

const controller = require('../controller/musicasController')

const cors = require('cors')


router.get('/musicas', cors(), controller.getMusics)

router.get('/musicas/:id', cors(), controller.getMusicsById)

router.get('/artistas', cors(), controller.getArtists)

router.get('/artistas/:id', cors(), controller.getArtistById)

router.get('/albuns', cors(), controller.getAlbuns)

router.get('/albuns/:nome', cors(),controller.getAlbumByName)


module.exports = router