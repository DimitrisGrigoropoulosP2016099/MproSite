function results() {
    let max = "id0"
    var currmax = 0
    var i = 0
    let exm = [
        ["1", "2", "3", "4", "id1"],
        ["2", "3", "4", "4", "id2"],
        ["3", "3", "1", "4", "id3"]
    ]
    

    var answ1 = document.querySelector('input[name="q1"]:checked').value;
    var answ2 = document.querySelector('input[name="q2"]:checked').value;
    var  answ3 = document.querySelector('input[name="q3"]:checked').value;
    var answ4 = document.querySelector('input[name="q4"]:checked').value;
    let answ = [answ1 , answ2 , answ3 ,answ4 ]

    for (let r=0;r<exm.length;r++){
        for(let t=0;t<exm[0].length;t++){
            if (answ[t] == exm[r][t] ){
                i = i + 1 
            }
            if (i > currmax){
                currmax = i
                max = exm[r][4]
            }
            if (t == exm[0].length - 1){
                i = 0 
            }
         }
    }

    sessionStorage.setItem("winner",max);
    setTimeout(window.open("choice.html", "_self"),3000);
}