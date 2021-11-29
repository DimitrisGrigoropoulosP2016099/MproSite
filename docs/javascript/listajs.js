window.onload = function listajs() {
    let songs = [
        ["id1", "Frank Sinatra - That's life", "photos/id1.jpg"],
        ["id2", "The Smashing Pumpkins - Tonight, Tonight", "photos/id2.jpg"],
        ["id3", "Lemaitre ft. Jennie A. - Closer", "photos/id3.jpg"],
        ["id4", "Chunk! No, Captain Chunk! - Haters Gonna Hate" , "photos/id4.jpg"],
        ["id5","Seas on the Moon - Bugs" , "photos/id5.jpg"],
        ["id6","Painted Shield - Time Machine" , "photos/id6.jpg"],
        ["id7","Marmozets - Major System Error","photos/id7.jpg"]
    ];

    for (i = 0; i < songs.length; i++) {
        let tdiv = document.createElement("div");
        tdiv.style.width = "180";
        tdiv.style.height = "150";
        tdiv.style.padding = "10px";
        tdiv.id = songs[i][0];
        if (i % 2 == 0) {
            tdiv.style.backgroundColor = "lightblue";
        } else {
            tdiv.style.backgroundColor = "lightgrey";
        }

        tdiv.innerHTML = '<img src=' + songs[i][2] + ' width="180" height="150"> <a style="font-size:20px"id="'+songs[i][0]+'para" onclick="movesite(\'' + songs[i][0] + '\')">' + songs[i][1] + '  ➔</a>';

        
        document.body.appendChild(tdiv);
    }

    for (i = 0; i < songs.length; i++){ 
        let sc = document.createElement("script");
        sc.src = "javascript/movesite.js";
        document.getElementById(songs[i][0]+"para").appendChild(sc);
    }
}