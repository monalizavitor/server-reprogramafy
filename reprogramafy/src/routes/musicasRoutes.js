const express = require('express')

const router = express.Router()

const controller = require('../controller/musicasController')

router.get('/musicas', controller.getMusics)

router.get('/musicas/:id', controller.getMusicsById)

router.get('/artistas', controller.getArtists)

router.get('/artistas/:id', controller.getArtistById)

router.get('/albuns', controller.getAlbuns)

router.get('/albuns/:name-of-album', controller.getAlbumByName)


module.exports = router