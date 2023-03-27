{
  //use Strict Mode
  'use strict';

  /*
  document.getElementById('test-button').addEventListener('click', function(){
    const links = document.querySelectorAll('.titles a');
    console.log('links:', links);
  }); */

  //[DONE] click & run event
  const titleClickHandler = function(event){
    const clickedElement = this;
    console.log('Link was clicked!', event);
  }

  const activeLink = titleClickHandler(document.querySelectorAll('.titles a.active'));

  //[DONE] remove class 'active' from all article links

  const activeLinks = document.querySelectorAll('.titles a.active');
  for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
  }


  //[IN PROGRESS] remove class 'active' from all articles
  const activeArticles = document.querySelectorAll('post-title post-author');
  for(let activeArticle of activeArticles){
    activeArticle.classList.remove('active');
  }

  //[DONE] add class 'active' to the clicked link
  console.log('clickedElement:', this);
    this.classList.add('active');



//add class 'active' to the correct article
  const links = document.querySelectorAll('.titles a');
  for(let link of links){
    link.addEventListener('click', titleClickHandler);
    console.log(link);
  }

   //click event handler
   activeLink.classList.add('active');

}




 // activeLink.classList.remove('active');
  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
    //koniec funkcji remove 'active'

     //ponizsze chyba do usniecia, bo kod zle dziala z tym
     /*

    */