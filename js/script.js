{
  //use Strict Mode
  'use strict';

  /*
  document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

  const titleClickHandler = function(event){
  console.log('Link was clicked!', event);
  }

  //remove class 'active' from all article links

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
  }

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.post-title post-author');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }
}



  /* remove class 'active' from all articles */



 // activeLink.classList.remove('active');
  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
    //koniec funkcji remove 'active'

     //ponizsze chyba do usniecia, bo kod zle dziala z tym
     /*
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
      link.addEventListener('click', titleClickHandler);
      console.log(link);
    }
    */