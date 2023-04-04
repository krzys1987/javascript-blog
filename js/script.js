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

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

     /* [DONE] Create a single article */
     const article = optArticleSelector;

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    /* Variable scope */
    let html = '';

    for(let article of articles){
      console.log('article && html');
    }

    /* [IN PROGRESS] get the article id */
    const articleId = article.getAttribute('href');
    console.log(articleId);

    /* [DONE] find the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    //What it does? Create a constant value which look for - article - class .post-title. Search target: html

    /* [DONE] get the title from the title element */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log('linkHTML');

    /* create HTML of the link */
    titleList.innerHTML = titleList.innerHTML + linkHTML;


    /* insert link into titleList */

    }

    generateTitleLinks();

  }



  const links = document.querySelectorAll('.titles a');
    for(let link of links){
    link.addEventListener('click', titleClickHandler);
    }

}
