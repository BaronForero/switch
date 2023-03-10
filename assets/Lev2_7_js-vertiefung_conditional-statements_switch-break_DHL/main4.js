
function showtxt() {
    console.log("working?");
    const mylist = document.getElementById('mylist').value
    let masse = document.getElementById('masse')

    switch (mylist) {
        case "0":
            console.log(mylist.value);
            masse.innerHTML = `<b>Brief und Postkarte</b> <br>
            L: 10 - 23,5 cm
            B: 7 - 12,5 cm
            H: bis 1 cm`
            break;
        case "1":
            masse.innerHTML = `<b>DHL Paket 2 kg</b> <br>
            bis 60 x 30 x 15 cm`
            break;
        case "2":
            masse.innerHTML`<b>DHL Paket 5 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;
        case "3":
            masse.innerHTML`<b>DHL Paket 10 kg</b> <br>
            bis 120 x 60 x 60 cm`
            break;
        case "4":
            masse.innerHTML`<b>Extra große Größe</b>`
            break;
        default: ("Extra große Größe")
    }
}


