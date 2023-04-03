{
  //Strict Mode
  'use strict';

  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!', event);

    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');
      for(let activeLink of activeLinks){
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */

    console.log('clickedElement:', clickedElement);
    this.classList.add('active');

    /* [DONE] remove class 'active' from all articles */

    const activeArticles = document.querySelectorAll('.post.active');
      for (let activeArticle of activeArticles) {
        activeArticle.classList.remove('active');
      }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log('articleSelector');


    /* [DONE] find the correct article using the selector (value of 'href' attribute) */

    const targetArticle = document.querySelector(articleSelector);
    console.log('targetArticle:', targetArticle);


    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');

    /* [DONE] define sript options */
    const optArticleSelector = '.post',
      optTitleSelector = '.post-title',
      optTitleListSelector = '.titles';

    function generateTitleLinks(){

    /* [DONE but on after clicked] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    for(let articles of article-1){
      console.log('article-1');
    }
    for(let articles of article-2){
      console.log();
    }
    for(let articles of article-3){
      console.log();
    }
    for(let articles of article-4){
      console.log();
    }
    for(let articles of article-5){
      console.log();
    }
    for(let articles of article-6){
      console.log();
    }
    for(let articles of article-7){
      console.log();
    }
    for(let articles of article-8){
      console.log();
    }
    for(let articles of article-9){
      console.log();
    }
    for(let articles of article-10){
      console.log();
    }

    /* get the article id */
    const articleId = id;

    /* find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    //What it does? Create a constant value which look for - article - class .post-title. Search target: html

    /* get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>');

    /* create HTML of the link */

    /* insert link into titleList */

    }

    generateTitleLinks();

  }



  const links = document.querySelectorAll('.titles a');
    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }

}
