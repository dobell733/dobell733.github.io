// I would prefer for these to be one function with an input parameter, but it wouldn't play nice with deploying on Github.

function toggleDFHH() {
    let element = document.getElementById("DFHH");
    if (element.style.display == "block") {
        element.style.display = "none" ;
    } else {
        element.style.display = "block";
    }
}

function toggleHash() {
    let element = document.getElementById("hash_map");
    if (element.style.display == "block") {
        element.style.display = "none" ;
    } else {
        element.style.display = "block";
    }
}

function toggleSet() {
    let element = document.getElementById("set_graph");
    if (element.style.display == "block") {
        element.style.display = "none" ;
    } else {
        element.style.display = "block";
    }
}

function toggleData() {
    let element = document.getElementById("data_ball");
    if (element.style.display == "block") {
        element.style.display = "none" ;
    } else {
        element.style.display = "block";
    }
}