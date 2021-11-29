function ClearRadioValue() {
    for (z= 1; z<5; z++) {
        switch (z) {
            case 1: 
                list_name = "q1";
                break;
            case 2: 
                list_name = "q2";
                break;
            case 3: 
                list_name = "q3";
                break;
            case 4: 
                list_name = "q4";
                break;
        }
    
        var ele = document.getElementsByName(list_name);
      
        for(i = 0; i < ele.length; i++) {
            if(ele[i].checked)
            ele[i].checked = false;
        }
    }
}
