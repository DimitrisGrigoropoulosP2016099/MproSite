function results() {
    let max = "id0"
    let currmax = 0
    let i = 0
    let exm = [
        ["1", "2", "3", "4", "id1"],
        ["2", "3", "4", "4", "id2"],
        ["3", "3", "1", "4", "id3"]
    ]
    

    let answ1 = document.querySelector('input[name="q1"]:checked').value;
    let answ2 = document.querySelector('input[name="q2"]:checked').value;
    let answ3 = document.querySelector('input[name="q3"]:checked').value;
    let answ4 = document.querySelector('input[name="q4"]:checked').value;
    let answ5 = document.querySelector('input[name="q5"]:checked').value;
    let answ6 = document.querySelector('input[name="q6"]:checked').value;
    let answ7 = document.querySelector('input[name="q7"]:checked').value;
    let answ8 = document.querySelector('input[name="q8"]:checked').value;
    let answ9 = document.querySelector('input[name="q9"]:checked').value;
    let answ10 = document.querySelector('input[name="q10"]:checked').value;
    let answ = [answ1 , answ2 , answ3 ,answ4,answ5,answ6,answ7,answ8,answ9,answ10 ]

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
    window.open("choice.html", "_self");
}