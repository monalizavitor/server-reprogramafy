const musics = require('../models/musicas.json')

const newListOfMusics = musics.map(music => {
    return {
        id: music.id,
        nome: music.name,
        amostra: music.preview_url,
        nome_album: music.album.name,
        imagem: music.album.url,
        artista: music.artists.name
    }

})

const getMusics = (req, res) => {
    console.log(req.url)
    res.status(200).send(newListOfMusics)
}


const getMusicsById = (req, res) => {
    console.log(req.url)
    const id = req.params.id

    const music = newListOfMusics.find(item => item.id == id)
    if (music) {
        res.status(200).send(music)
    } else {
        res.status(404).send('Erro. Música não encontrada! Por favor verifique o id passado na url.')

    }

}


const listOfArtists = musics.map(music => {
    return {
        id: music.artists.id,
        nome: music.artists.name
    }

})

const getArtists = (req, res) => {
    console.log(req.url)
    let listNoRepeat = []

    listOfArtists.forEach(artist => {
        const isFound = listNoRepeat.find(element => element.id == artist.id)
        if (!isFound) {
            listNoRepeat.push(artist)
        }
    })

    res.status(200).send(listNoRepeat)
}

const listOfMusic = musics.map(music => {
    return {
        id: music.id,
        nome: music.name,
        amostra: music.preview_url,
        nome_album: music.album.name,
        imagem: music.album.url,
        artista: music.artists.name,
        duracao: music.duration_ms
    }

})

const getArtistById = (req, res) => {
    console.log(req.url)
    const id = req.params.id
    const findArtist = listOfArtists.find(artist => artist.id == id)
    if (findArtist) {

        const findMusic = listOfMusic.filter(item => item.artista == findArtist.nome)

        const newArtist = {
            id: findArtist.id,
            nome: findArtist.nome,
            musicas: findMusic
        }
        res.status(200).send(newArtist)

    } else {
        res.status(404).send('Erro. Artista não encontrado!')
    }

}


const listOfAlbuns = musics.map(item => {

    return {
        id: item.album.id,
        nome: item.album.name,
        data_de_lancamento: item.album.release_date,
        total_de_musicas: item.album.total_tracks,
        imagem: item.album.imagem
    }

})


const getAlbuns = (req, res) => {
    console.log(req.url)

    const noRepeat = []

    listOfAlbuns.forEach(element => {
        const isFound = noRepeat.find(item => item.nome_album == element.nome_album)
        if (!isFound) {
            noRepeat.push(element)
        }
    })

    res.status(200).send(noRepeat)

}

const getAlbumByName = (req, res) => {
    console.log(req.url)
    const name = req.params.name
    const findAlbunsByName = listOfAlbuns.filter(item => item.nome == name)
        if (!findAlbunsByName) {
            res.status(404).send('Erro. Favor conferir o nome do album buscado.')
         } else {
            res.status(200).send(findAlbunsByName)
            
        }
        

}


module.exports = {
    getMusics,
    getMusicsById,
    getArtists,
    getArtistById,
    getAlbuns,
    getAlbumByName
}