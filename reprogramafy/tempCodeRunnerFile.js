const musicas =
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
        }
    ]

// console.log(musicas);

for (let i = 0; i < musicas.length; i++) {
    console.log(musicas[i].name);
}