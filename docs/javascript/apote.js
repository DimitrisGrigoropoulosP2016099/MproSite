window.onload = function apote() {
    var winner = sessionStorage.getItem("winner");
    // [id , titlos , img , keimeno , video]
    // [0 , 1, 2, 3, 4]
    let songs = [
        ["id1", "That's life", "", "Lorem ipsum dolor sit amet", "https://www.youtube-nocookie.com/embed/TnlPtaPxXfc"],
        ["id2", "copy free", "", "nothing", "https://www.youtube-nocookie.com/embed/Gmn5D3XPE4E"],
        ["id3", "copy free 2", "", "test test etst ets ", "https://www.youtube-nocookie.com/embed/kQy3G0TePWw"]
    ];
    for (i = 0; i < songs.length; i++) {
        if (winner == songs[i][0]) {
            document.getElementById("titlos").innerHTML = songs[i][1];
            document.getElementById("eikona").src = songs[i][2];
            document.getElementById("keimeno").innerHTML = songs[i][3];
            document.getElementById("video").src = songs[i][4];
            break;
        }
    }

}