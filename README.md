# Servidor Reprogramafy

 É uma aplicação que permite obter informações sobre músicas, álbuns e artistas. Usando apis para tratar os dados e expô-los da melhor forma para o usuário.



> *contrato*: define o formato(json) dos dados que o serão consumidos pelo client(front-end)

**Músicas**

```json
    [
        {
        "id": 1,
        "name": "Evidências",
        "duration_ms": 279280,
        "preview_url": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "album": {
            "id": 154,
            "name": "Do Tamanho Do Nosso Amor",
            "release_date": "2013-01-01",
            "total_tracks": 14,
            "url": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce"
        },
        "artists": {
            "id": "7gfkYbxpguEc9bm6m8TpAr",
            "name": "Chitãozinho & Xororó"
        }
        }, 
        ...
    ] 
```

**Contratos**

| Recurso | Descrição |
| --- | --- |
| `/musicas` | Retorna todas as músicas |
```json
    [
        {
            "id": 1,
            "nome": "Evidências",
            "amostra": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
            "nome_album": "Do Tamanho Do Nosso Amor",
            "imagem": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce",
            "artista": "Chitãozinho & Xororó"
        }, ...
    ]
```
| Recurso | Descrição |
| --- | --- |
| `/musicas/:id` | Retorna apenas uma música específica |
```json
    {
        "id": 1,
        "nome": "Evidências",
        "amostra": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
        "nome_album": "Do Tamanho Do Nosso Amor",
        "imagem": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce",
        "artista": "Chitãozinho & Xororó"
    }
```

| Recurso | Descrição |
| --- | --- |
| `/artistas` | Retorna a lista de artistas |
```json
    [
        {
            "id": "7gfkYbxpguEc9bm6m8TpAr",
            "nome": "Chitãozinho & Xororó"
        }, ...
    ]
```
| Recurso | Descrição |
| --- | --- |
| `/artistas/:id` | Retorna o artista e lista de músicas dele |
```json
    {
        "id": "1HY2Jd0NmPuamShAr6KMms",
        "nome": "Lady Gaga",
        "musicas": [
            {
                "id": 5,
                "nome": "Shallow",
                "amostra": "https://p.scdn.co/mp3-preview/7706db75aa75d9ca46e51b54a9ebcb85bff71be6?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "album_nome": "A Star Is Born Soundtrack",
                "imagem": "https://i.scdn.co/image/ab67616d00001e02e2d156fdc691f57900134342",
                "artista": "Lady Gaga",
                "duracao": 215733
            },
            {
                "id": 6,
                "nome": "Always Remember Us This Way",
                "amostra": "https://p.scdn.co/mp3-preview/f2adda4dc6d8d38513510111a8d48facc8a4998d?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "album_nome": "A Star Is Born Soundtrack",
                "imagem": "https://i.scdn.co/image/ab67616d00001e02e2d156fdc691f57900134342",
                "artista": "Lady Gaga",
                "duracao": 210200
            }
        ]
    }
```

| Recurso | Descrição |
| --- | --- |
| `/albuns` | Retorna lista de albuns(sem repetir)|
```json
    [
        {
            "id": 154,
            "nome": "Do Tamanho Do Nosso Amor",
            "data_lancamento": "2013-01-01",
            "total_musicas": 14,
            "imagem": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce",
        }, ...
    ]
```
| Recurso | Descrição |
| --- | --- |
| `/albuns/:nome-do-album` | Retorna o álbum filtrado pelo nome, com a lista de músicas dele  |
```json
    {
        "id": 154,
        "nome": "Do Tamanho Do Nosso Amor",
        "data_lancamento": "2013-01-01",
        "total_musicas": 14,
        "imagem": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce",
        "musicas": [
            {
                "id": 1,
                "nome": "Evidências",
                "amostra": "https://p.scdn.co/mp3-preview/3e4f45a788d7ecb0e87a32bf57119cd8124c8710?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "album_nome": "Do Tamanho Do Nosso Amor",
                "imagem": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce",
                "artista": "Chitãozinho & Xororó",
                "duracao": 279280
            },
            {
                "id": 2,
                "nome": "Sinônimos",
                "amostra": "https://p.scdn.co/mp3-preview/e57b25e3645fbb8fe3288850a4cc44f348d24bcd?cid=d8a5ed958d274c2e8ee717e6a4b0971d",
                "album_nome": "Do Tamanho Do Nosso Amor",
                "imagem": "https://i.scdn.co/image/ab67616d00001e0252b5ab856085fe47ccec3cce",
                "artista": "Chitãozinho & Xororó",
                "duracao": 312106
            }
        ]
    }
```

---
