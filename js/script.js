{
  //use Strict Mode
  'use strict';

  /*
  //[DONE]event to div add
  document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

  //[DONE] click & watch
  const titleClickHandler = function (event) {
    const clickedElement = this;
    console.log('Link was clicked!', event);

    //[DONE] remove class 'active' from all article links

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    //[DONE] remove class 'active' from all articles
    const activeArticles = document.querySelectorAll('.post-title .post-author');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }

     //[IN PROGRESS] add a class 'active' to the clicked link
     this.classList.add('active');
     //clickedElement.classList.add('active');
     console.log('clickedElement:', this);

    //select .titles a
    const links = document.querySelectorAll('.titles a');

    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
      console.log(link);
    }

    //[DONE] what is activeLink
    const activeLink = titleClickHandler(document.querySelectorAll('.titles a.active'));








  }
}




 // activeLink.classList.remove('active');
/* get 'href' attribute from the clicked link */

/* find the correct article using the selector (value of 'href' attribute) */

/* add class 'active' to the correct article */
    //koniec funkcji remove 'active'

     //ponizsze chyba do usniecia, bo kod zle dziala z tym
/*

*/