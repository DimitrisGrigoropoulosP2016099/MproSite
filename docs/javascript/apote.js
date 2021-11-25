window.onload = function apote() {
    var winner = sessionStorage.getItem("winner");
    
    // [id , titlos , img , keimeno , video , kiklo , stixo , sin , ermi]
    // [0 ,    1    ,  2  ,    3   ,    4   ,   5   ,   6   ,  7  ,   8 ]
    let songs = [
        ["id1", "That's life", "photos/photo.jpg", "Lorem ipsum dolor sit amet", "https://www.youtube-nocookie.com/embed/TnlPtaPxXfc","1876","john Sinatra" , "John sinatra","sinatra"],
        ["id2", "copy free", "photos/photo.jpg", "nothing", "https://www.youtube-nocookie.com/embed/Gmn5D3XPE4E","2004","dsadjn" , "fdsfdsfsdf","gfdgdf"],
        ["id3", "copy free 2", "photos/photo.jpg", "test test etst ets ", "https://www.youtube-nocookie.com/embed/kQy3G0TePWw","1984","asdggfdg" , "dfgdfgasd","adasdasd"]
    ];
    for (i = 0; i < songs.length; i++) {
        if (winner == songs[i][0]) {
            document.getElementById("titlos").innerHTML = songs[i][1];
            document.getElementById("eikona").src = songs[i][2];
            document.getElementById("keimeno").innerHTML = songs[i][3];
            document.getElementById("video").src = songs[i][4];
            document.getElementById("kiklo").innerHTML = songs[i][5];
            document.getElementById("stixo").innerHTML = songs[i][6];
            document.getElementById("sin").innerHTML = songs[i][7];
            document.getElementById("ermi").innerHTML = songs[i][8];
            break;
        }
    }

}