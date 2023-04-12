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
    optArticleTagsSelector = '.post-tags .list';

  const generateTitleLinks = function() {

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';

     /* [DONE] for each article */
    const articles = document.querySelectorAll(optArticleSelector);

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
  }

  generateTitleLinks();

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

  function tagClickHandler(event){
    /* [DONE] prevent default action for this event */
    //fixed tagClickHandler(event).preventDefault() --> event.preventDefault();
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    //look al line 6

    /* [IN PROGRESS] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = generateTags.getAttribute(href); //or const href = clickedElement.getAtribute(href) -- make a "href" constant and download the atribute from clicked element
    console.log(clickedElement.getAttribute(href));

    /* [To REVIEW] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href(tag);
    console.log(href(tag));

    //[SHOULD BE FINE] Kodilla says otherwise:
    //const tag = href.replace('#tag-', '');


    /* [TO REVIEW] find all tag links with class active */
    post.querySelectorAll('a.active[href^="#tag-"]'); //select link active class

    /* [To REVIEW] START LOOP: for each active tag link */
    for(post of querySelectorAll('a[href="' + href + '"]')){

      /* remove class active */
      post.classList.remove('active'); // remove class active from link

    /* END LOOP: for each active tag link */
    }

    /* find all tag links with "href" attribute equal to the "href" constant */

    /* START LOOP: for each found tag link */

      /* add class active */

    /* END LOOP: for each found tag link */

    /* execute function "generateTitleLinks" with article selector as argument */
  }

  function addClickListenersToTags(){
    /* find all links to tags */

    /* START LOOP: for each link */

      /* add tagClickHandler as event listener for that link */

    /* END LOOP: for each link */
  }

  addClickListenersToTags();


}