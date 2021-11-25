window.onload = function listajs() {
    let songs = [
        ["id1", "That's life", "photos/photo.jpg"],
        ["id2", "copy free", "photos/photo.jpg"],
        ["id3", "copy free 2", "photos/photo.jpg"]
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

        tdiv.innerHTML = '<img src=' + songs[i][2] + ' width="80" height="50"> <a id="'+songs[i][0]+'para" onclick="movesite(\'' + songs[i][0] + '\')">' + songs[i][1] + '</a>';

        
        document.body.appendChild(tdiv);
    }

    for (i = 0; i < songs.length; i++){ 
        let sc = document.createElement("script");
        sc.src = "javascript/movesite.js";
        document.getElementById(songs[i][0]+"para").appendChild(sc);
    }
}