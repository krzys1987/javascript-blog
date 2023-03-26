'use strict';

/* written by me for tests and suprise... don't work

document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  });
  */


//pasted from Kodilla, added console.log(event), added console.log(link),
const titleClickHandler = function(event){
    console.log('Link was clicked!', event);
}

//remove class 'active' from all article links
const activeLinks = document.querySelectorAll('.titles a.active');
//dlaczego szukam w dokumencie .titles oraz a.active, skoro klasa to active
for(let activeLink of activeLinks){
    activeLink.classList.remove('active');
}


/* remove class 'active' from all articles */
const activeArticles  = document.querySelectorAll('.titles a.active');
for(let activeArticle of activeArticles){
activeLink.classList.remove('active');

/* get 'href' attribute from the clicked link */

/* find the correct article using the selector (value of 'href' attribute) */

/* add class 'active' to the correct article */
  } //koniec funkcji remove 'active'

const links = document.querySelectorAll('.titles a');

for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(link);
  }