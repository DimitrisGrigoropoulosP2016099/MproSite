function movesite(id){

    // thetoi to id tou nikitoi 
    sessionStorage.setItem("winner" , id);

    // kane redirect sto apotelesma
    window.open("choice.html", "_self");
}