function ClearRadioValue() {
    for (z = 0; z < 11; z++) {
        // to onoma tis erwtiseis
        list_name = "q" + z.toString();
        let ele = document.getElementsByName(list_name);

        for (i = 0; i < ele.length; i++) {
            if (ele[i].checked)
                // ean exei timi tin sbini
                ele[i].checked = false;
        }
    }
}
