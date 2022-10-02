var id_to_colors = {
    1 : "red",
    2 : "green",
    3 : "blue",
    4 : "yellow",
    5 : "orange",
    6 : "purple",
    7 : "cyan",
    8 : "pink",
    9 : "white"
}

function setup(){
    var ps_holder = document.getElementById("ps_holder");
    var saveCards;

    var data = desenhos
    data = JSON.parse(data);
    saveCards = data["list"];

    console.log(saveCards.length);
    
    var ps_holder = document.getElementById("ps_holder");
    for(var i = 0; i < saveCards.length; i++){
        ps_holder.insertAdjacentHTML("beforeend", `
            <div class="p_holder">
                <div class="div_holder">
                </div>
                <div class="title">
                    <p>${saveCards[i]["titulo"]}<br>${saveCards[i]["autor"]}</p>
                </div>
            </div>
        `)

        for(var j = 0; j < saveCards[i]["cores"].length; j++){
            ps_holder.children[ps_holder.children.length - 1].children[0].insertAdjacentHTML("beforeend", `
                <div class="div_paint" style="background-color: ${id_to_colors[saveCards[i]["cores"][j]]}"></div>
            `)
        }
    }
}
setup();