'use strict';

/** add event on element */

const addEventOneElem = function (elem, type, callback){
    if(elem.length > 1){
        for (let i = 0; i < elem.length; i++){
            elem[i].addEventListener(type, callback);
        }
    }else {
        elem.addEventListener(type, callback);
    }
}

/** 
 * toggle navbar 
 * */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const togglerNavBar = function() {
    navbar.classList.toggle("active");
    navToggler.classList.toggle("active")
}

addEventOneElem(navToggler, 'click', togglerNavBar);

const closeNavBar = function() {
    navbar.classList.remove("active");
    navToggler.classList.remove("active");
}

addEventOneElem(navbarLinks, "click", closeNavBar);

/** 
 * header active on scroll down to 100px
 * */

const header = document.querySelector("[data-header]")

const activeHeader = function(){
    if (window.scrollY > 100){
        header.classList.add("active");
    } else{
        header.classList.remove("active");
    }
}

addEventOneElem(window, "scroll", activeHeader);

