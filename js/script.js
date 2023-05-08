{
  //Strict Mode
  'use strict';

  //[DONE] define sript options
  const select = {
    all: {
      articles: '.post',
      linksTo: {
        tags: 'a.active[href^="#tag-"]',
      },
    },
    article: {
      title: '.post-title',
      tags: '.post-tags .list',
      author: '.post-author',
    },
    listOf: {
      titles: '.titles',
      tags: '.tags.list',
      authors: '.authors.list',
    },
  };

  const opts = {
    tagSizes: {
      count: 5,
      classPrefix: 'tag-size-',
    },
  };

  /*
  const opts = {
    articleSelector: '.post',
    titleSelector: '.post-title',
    titleListSelector: '.titles',
    articleTagsSelector: '.post-tags .list',
    tagsListSelector: '.sidebar .list.tags',
    articleAuthorSelector: '.post-author',
    cloudClassCount: 5,
    //cloudClassPrefix: tag-size-
    //authorsListSelector:
  };
  */
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

    const targetArticle = document.querySelector(select.all.articles);
    console.log('targetArticle:', targetArticle);


    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
  };

  // [DONE] custom selector
  const generateTitleLinks = function(customSelector = ''){
    console.log(customSelector);

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelectorAll(select.listOf.titles); /* select.listOf */
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(opts.articleSelector + customSelector);
    //const articles = artice.querySelectorAll(opts.articleSelector);

    for (let article of articles) {
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');

      console.log(articleId);

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(opts.titleSelector).innerHTML;
      //What it does? Create a constant value which look for - article - class .post-title. Search target: html

      /* [DONE] get the title from the title element */

      const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
      console.log('linkHTML');

      /* [DONE] create HTML of the link */
      titleList.innerHTML = titleList.innerHTML + linkHTML;

      const links = document.querySelectorAll('.titles a');
      for (let link of links) {
        link.addEventListener('click', titleClickHandler);
      }

    }
  };

  generateTitleLinks();

  const generateTags = function() {

    //[NEW] set an object parameters
    const params = {
      min: 999999,
      max: 0,
    };

    const calculateTagParams = function(){
      for(const tag in allTags){
        if(allTags[tag] < params.min){
          console.log(tag + ' is used');
          params.min = allTags[tag];
        }
        if(allTags[tag] > params.max){
          params.max = allTags[tag];
        }
      }
    };

    /* [NEW] create a new variable allTags with an empty object */
    let allTags = { };

    console.log('created a new variable allTag with an empty array');
    /* [DONE] find all articles */
    const articles = document.querySelectorAll('article');

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){

      /* [DONE] find tags wrapper */
      const tagWrapper = article.querySelector(select.article.tags);

      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' '); //tags are: 'news reviews design' changed 'news' 'reviews' 'design'

      /* [DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(articleTagsArray);

        /* [DONE] generate HTML of the link */
        const linkHTML = '<li><a href="#tag-' + tag + '"><span>' + tag + '</span></a></li>';

        /* [DONE] add generated code to html variable */
        html = html + linkHTML;

        /* [NEW] check if this link is NOT already in allTags */
        if(!allTags[tag]){
          /* [NEW] add tag to allTags object */
          allTags[tag] = 1;
        } else {
          allTags[tag] ++;
        }

        /* [DONE] END LOOP: for each tag */
      }

      /* [DONE] insert HTML of all the links into the tags wrapper */

      tagWrapper.innerHTML = html;

      /* [DONE] END LOOP: for every article: */
    }

    /* [DONE] execute function calculateTagParams */
    calculateTagParams();
    console.log(calculateTagParams);
    console.log(params); //Show min and max? But why?

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(opts.tagsListSelector);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    calculateTagParams(); //don't know why it is here

    /* [NEW] using tags to change display */

    /* [NEW] set a variable for tags name */

    /* [NEW] add a variable for tags size at right column */
    let className = document.querySelectorAll.getElementsByClassName('article').getAttribute('data-tags');

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      if (allTags[tag] > params.max/2) {
        className = 'tag-size-4'; //JS class add, but shouldn't it be specify - tag.className = 'tag-size-4'; ?
      }
      else if (allTags[tag] < params.max/4) {
        className = 'tag-size-1';
      }
      else if (allTags[tag] > params.max/1.5) {
        className = 'tag-size-5';
      }
      else if (allTags[tag] < params.max/3) {
        className = 'tag-size-3';
      } else {
        className = 'tag-size-2';
      }

      /* [NEW] calculateTagClass
      const calculateTagClass = function (CloudClassPrefix) { //not sure options attribute
      classNumber = Math.floor( 0.5 * 5 + 1 );
      classNumber = Math.floor( 0.5 * cloudClassCount + 1 );
      classNumber = Math.floor( ( 4 / 8 ) * cloudClassCount + 1 );
      classNumber = Math.floor( ( (6 - 2) / (10 - 2) ) * cloudClassCount + 1 );
      classNumber = Math.floor( ( (count - 2) / (10 - 2) ) * cloudClassCount + 1 );
      classNumber = Math.floor( ( (count - 2) / (params.max - 2) ) * cloudClassCount + 1 );
      classNumber = Math.floor( ( (count - params.min) / (params.max - 2) ) * cloudClassCount + 1 );
      classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * cloudClassCount + 1 );
      CloudClassPrefix
      }

      */

      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += '<li><a href="#tag-' + tag + '"><span>' + tag + ' (' + allTags[tag] + ')</span></a></li>';
    }

    /* [NEW] END LOOP: for each tag in allTags: */

    /*[NEW] add HTML from allTagsHTML to tagList */
    tagList.innerHTML = allTagsHTML;

  };

  generateTags();

  const tagClickHandler = function(event){
    event.preventDefault();

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', ''); //tag remove to get word (#tag-cat- > remove #tag- > cat )
    console.log(tag);

    /* [DONE] find all tag links with class active */
    document.querySelectorAll('a.active[href^="tag-"]');
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
    generateTitleLinks('[data-tags~="' + tag + '"]');
  };

  /* [DONE] Find links with tags */
  const addClickListenersToTags = function(){
    /* find all links to tags */
    const tagLinks = document.querySelectorAll('a[href^="#tag-"]');

    /* START LOOP: for each link */
    for(const tagLink of tagLinks){
      /* add tagClickHandler as event listener for that link */
      tagLink.addEventListener('click', tagClickHandler);

    /* END LOOP: for each link */
    }
  };

  generateTags();
  addClickListenersToTags();

  const generateAuthors = function () {
    /* [NEW] create a new variable allAuthors, an empty object */
    let allAuthors = {};

    /* [DONE] find all articles */
    const articles = document.querySelectorAll('article');

    /* [DONE] START LOOP: for every article: */
    for (let article of articles) {

      /* [DONE] find author wrapper */
      const authorWrapper = article.querySelector(opts.articleAuthorSelector);

      /* [CAN'T SEE THE POINT] make html variable with empty string
       let html = ''; */

      /* [DONE] get tags from data-tags attribute */
      const author = article.getAttribute('data-author');

      /* [DONE] generate HTML of the link */
      const authorLinkHTML = '<li><a href="#author-' + author + '"><span>' + author + '</span></a></li>';
      console.log(authorLinkHTML);

      /* [DONE] insert HTML of all the links into the tags wrapper */

      authorWrapper.innerHTML = authorLinkHTML;

      /* [NEW] check if this link is NOT already in allAuthors */
      if (!allAuthors[author]) {
        /* [NEW] add tag to allTags object */
        allAuthors[author] = 1;
      } else {
        allAuthors[author]++;
      }

      /* [DONE] End of loop for each article */
    }
    /* [DONE] End of loop for every article */


    /* [NEW] find list of authors in right column */
    const authorList = document.querySelector('.list.authors');

    /* [NEW] create variable for all links HTML code */
    let allAuthorsHTML = '';


    /* [NEW] START LOOP: for each author in authorList: */
    for (let author in allAuthors) {
      /* [NEW] generate code of a link and add it to allAuthorsHTML */
      allAuthorsHTML += '<li><a href="#author-' + author + '"><span>' + author + ' (' + allAuthors[author] + ')</span></a></li>';
    }


    /*[NEW] add HTML from allAuthorsHTML to tagList */
    authorList.innerHTML = allAuthorsHTML;
  };

  generateAuthors();

  /* authorClickHandlder */

  const authorClickHandler = function(event){
    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] make a new constant "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const authorTag = href.replace('#author-', ''); //tag remove to get word (#tag-cat- > cat )
    console.log(authorTag);

    /* [TO REVIEW] find all links with custom tag author */
    const author = document.querySelectorAll('a[href^="#author-"]');

    /* [DONE] find all links with class active author */
    const activeAuthors = document.querySelectorAll('a.active[href^="#author-"]'); //[potentiall error]previously had #tag

    /* [DONE] START LOOP: for each active tag link */
    for(const author of activeAuthors){
      /* remove class active */
      author.classList.remove('active'); // remove class active from link
      /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] Find links with author */
    const authorLinks = document.querySelectorAll('a[href="' + href + '"]');

    /* START LOOP: for each link */
    for(const author of authorLinks){
      author.classList.add('active');

    /* END LOOP: for each link */
    }

    generateTitleLinks('[data-author="' + authorTag + '"]');

  };

  /* [DONE]] find posts with authors */
  const addClickListenersToAuthors = function(){
    /* [DONE] Find links with tags */
    const authorList = document.querySelectorAll('a[href^="#author-"]');

    /* START LOOP: for each link */
    for(const author of authorList){
      /* add tagClickHandler as event listener for that link */
      author.addEventListener('click', authorClickHandler);

      /* END LOOP: for each link */
    }
  };

  addClickListenersToAuthors();
}