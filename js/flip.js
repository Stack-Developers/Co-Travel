'use strict'
document.getElementById("jehad").onmouseover = function() { mouseOver1() };
document.getElementById("jehad").onmouseout = function() { mouseOut1() };
document.getElementById("marwan").onmouseover = function() { mouseOver2() };
document.getElementById("marwan").onmouseout = function() { mouseOut2() };
document.getElementById("malak").onmouseover = function() { mouseOver3() };
document.getElementById("malak").onmouseout = function() { mouseOut3() };
document.getElementById("faisal").onmouseover = function() { mouseOver4() };
document.getElementById("faisal").onmouseout = function() { mouseOut4() };
document.getElementById("qais").onmouseover = function() { mouseOver5() };
document.getElementById("qais").onmouseout = function() { mouseOut5() };
document.getElementById("sam").onmouseover = function() { mouseOver6() };
document.getElementById("sam").onmouseout = function() { mouseOut6() };

function mouseOver1() {
    document.getElementById("jehadPhoto").style.display = "none";
    document.getElementById("jehadInfo").style.display = "block";
}

function mouseOver2() {
    document.getElementById("marwanPhoto").style.display = "none";
    document.getElementById("marwanInfo").style.display = "block";
}

function mouseOver3() {
    document.getElementById("malakPhoto").style.display = "none";
    document.getElementById("malakInfo").style.display = "block";
}

function mouseOver4() {
    document.getElementById("faisalPhoto").style.display = "none";
    document.getElementById("faisalInfo").style.display = "block";
}

function mouseOver5() {
    document.getElementById("qaisPhoto").style.display = "none";
    document.getElementById("qaisInfo").style.display = "block";
}

function mouseOver6() {
    document.getElementById("samPhoto").style.display = "none";
    document.getElementById("samInfo").style.display = "block";
}

function mouseOut1() {
    document.getElementById("jehadPhoto").style.display = "block";
    document.getElementById("jehadInfo").style.display = "none";
}

function mouseOut2() {
    document.getElementById("marwanPhoto").style.display = "block";
    document.getElementById("marwanInfo").style.display = "none";
}

function mouseOut3() {
    document.getElementById("malakPhoto").style.display = "block";
    document.getElementById("malakInfo").style.display = "none";
}

function mouseOut4() {
    document.getElementById("faisalPhoto").style.display = "block";
    document.getElementById("faisalInfo").style.display = "none";
}

function mouseOut5() {
    document.getElementById("qaisPhoto").style.display = "block";
    document.getElementById("qaisInfo").style.display = "none";
}

function mouseOut6() {
    document.getElementById("samPhoto").style.display = "block";
    document.getElementById("samInfo").style.display = "none";
}