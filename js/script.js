{
  //Strict Mode
  'use strict';

  const titleClickHandler = function() {
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
  };

  /* [DONE] define sript options */
  const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list',
    optArticleAuthorSelector = '.post';

  // [DONE] custom selector
  const generateTitleLinks = function(customSelector = ''){
    console.log(customSelector);

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    //const articles = artice.querySelectorAll(optArticleSelector);

    for (let article of articles) {
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      console.log(articleId);

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(optTitleSelector).innerHTML;
      //What it does? Create a constant value which look for - article - class .post-title. Search target: html

      /* [CHECKT-IT] get the title from the title element */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML');

      /* create HTML of the link */
      titleList.innerHTML = titleList.innerHTML + linkHTML;

      const links = document.querySelectorAll('.titles a');
      for (let link of links) {
        link.addEventListener('click', titleClickHandler);
      }

    }
  };

  generateTitleLinks('[data-tags~="' + 'tag' + '"');
  const generateTags = function() {
    /* [DONE] find all articles */
    const articles = document.querySelectorAll('article');

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){

      /* [DONE] find tags wrapper */
      const tagWrapper = article.querySelector(optArticleTagsSelector);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      console.log(articleTags.split(' '));
      const articleTagsArray = articleTags.split(' '); //tags are: 'news reviews design' changed 'news' 'reviews' 'design'

      /* [CHECK-IT] START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(articleTagsArray);

        /* generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

        /* add generated code to html variable */
        html = html + linkHTML;

        /* END LOOP: for each tag */
      }

      /* insert HTML of all the links into the tags wrapper */

      tagWrapper.innerHTML = html;

    /* END LOOP: for every article: */
    }
  };

  generateTags();

  const tagClickHandler = function(event){
    /* [To REVIEW] prevent default action for this event */
    //fixed tagClickHandler(event).preventDefault() --> event.preventDefault();
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', ''); //tag remove to get word (#tag-cat- > remove #tag- > cat )
    console.log(tag);

    /* [DONE] find all tag links with class active */
    document.querySelectorAll('a.active[href^="#tag-"]'); //what is it for? Unessesary I thing, dont have before
    const activeLinks = document.querySelectorAll('a.active[href^="#tag-"]');

    /* [DONE] START LOOP: for each active tag link */
    for(const link of activeLinks){
      /* remove class active */
      link.classList.remove('active'); // remove class active from link

    /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] find all tag links with "href" attribute equal to the "href" constant */
    const links = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each found tag link */
    for(let link of links){

      /* add class active */
      link.classList.add('active');
    /* END LOOP: for each found tag link */
    }
    /* execute function "generateTitleLinks" with article selector as argument */
    generateTitleLinks('[data-tags~="' + tag + '"]'); //function+atributte
  };

  /* [DONE] Find lins with tags */
  const addClickListenersToTags = function(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag -"]');

    /* START LOOP: for each link */
    for(const tagLink of tagLinks){
      /* add tagClickHandler as event listener for that link */
      tagLink.add.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  };

  addClickListenersToTags;

  /* add authors to .post */
  const generateAuthors = function (){
    console.log(generateAuthors);

    /* find all links to authors */
    const addClickListenersToAuthors = function(){
      //const authorsList = article.getAttribute('data-author');
      //const articleAuthors = getElementById('data-author');
      const authorsList = document.querySelectorAll('a(href^="[#author "]');
    }

    /* find all authors */
    const addClickListenersToAuthors = function (){
      const articleAuthor = article.querySelectorAll('data-author');
    }

    /* author clickHandler */
    const authorClickHandler = function(){

    }

    const authorClickHandler = function(){
      generateTitleLinks(authors[=getElemntById])
      //prevent default actions
      data-author.preventDefault();

    }

  }

}

