function onMouseOver(id, id2) {
    document.getElementById(id).style.gridColumnStart = "1"
    document.getElementById(id).style.gridColumnEnd = "13"
    document.getElementById(id2).style.display = "none"
}

function onMouseOut(id, id2) {
    document.getElementById(id).style.gridColumnStart = "1"
    document.getElementById(id).style.gridColumnEnd = "8"
    document.getElementById(id2).style.display = "flex"
}

function onMouseOverOpp(id, id2) {
    document.getElementById(id).style.gridColumnStart = "1"
    document.getElementById(id).style.gridColumnEnd = "13"
    document.getElementById(id2).style.display = "none"
}

function onMouseOutOpp(id, id2) {
    document.getElementById(id).style.gridColumnStart = "6"
    document.getElementById(id).style.gridColumnEnd = "13"
    document.getElementById(id2).style.display = "flex"
}

function showMenu() {
    document.getElementById("mobile-menu").style.display = "flex"
}

function closeMenu() {
    document.getElementById("mobile-menu").style.display = "none"
}