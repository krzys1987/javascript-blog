{
  //Strict Mode
  'use strict';

  function titleClickHandler() {
    const clickedElement = this;
    /* [DONE] remove class 'active' from all article links  */

    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
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
  }

  /* [DONE] define sript options */
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';

  function generateTitleLinks() {

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] Create a single article */
    const article = optArticleSelector;

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      /* [DONE] get the article id */
       const articleId = article.getAttribute('id');

      console.log(articleId);

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      //What it does? Create a constant value which look for - article - class .post-title. Search target: html

      /* [DONE] get the title from the title element */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML');

      /* create HTML of the link */
      titleList.innerHTML = titleList.innerHTML + linkHTML;

      const links = document.querySelectorAll('.titles a');
      for (let link of links) {
        link.addEventListener('click', titleClickHandler);
      }

    }
  }

  generateTitleLinks();

  function generateTags(){
    /* [DONE] find all articles */
    document.querySelectorAll("article");

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){

    } //zakres petli na dół


      /* [in progress] find tags wrapper */
      const optArticleTagsSelector = article.querySelector(post-tags /*list-horizontal*/);

      /* [DONE] make html variable with empty string */
    let html = '';

    /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' ');

      /* [DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){

        /* generate HTML of the link */

        /* add generated code to html variable */

      /* END LOOP: for each tag */

      /* insert HTML of all the links into the tags wrapper */

    /* END LOOP: for every article: */
  }

  generateTags();
}