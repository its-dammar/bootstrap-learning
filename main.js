
function frontend() {
    let x = document.getElementById("frontend");
    x.style.display = "block";

    let y = document.getElementById("backend");
    y.style.display = "none";

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    btn1.style.backgroundColor="rgb(244, 226, 202)";
    btn2.style.backgroundColor="#fff";

   
}

function backend() {

    let x = document.getElementById("backend");
    x.style.display = "block";

    let y = document.getElementById("frontend");
    y.style.display = "none";

    let btn1 = document.getElementById("btn1");
    let btn2 = document.getElementById("btn2");
    btn1.style.backgroundColor="#fff";
    btn2.style.backgroundColor="rgb(244, 226, 202)";

   

}