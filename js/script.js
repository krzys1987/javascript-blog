{
  //Strict Mode
  'use strict';
  /*
  const opts = {
    articleSelector = '.post',
    titleSelector = '.post-title',
    titleListSelector = '.titles',
    articleTagsSelector = '.post-tags .list',
    tagsListSelector = '.sidebar .list.tags';
    //authorsListSelector = ;
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
    optArticleAuthorSelector = '.post-author',
    optTagsListSelector = '.sidebar .list.tags';

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

  /* add tags to articles */

  const generateTags = function() {
    /* [NEW] create a new variable allTags with an empty object */
    let allTags = { };

    console.log('created a new variable allTag with an empty array');
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

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(optTagsListSelector);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
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
    console.log(href);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const tag = href.replace('#tag-', ''); //tag remove to get word (#tag-cat- > remove #tag- > cat )
    console.log(tag);

    /* [DONE] find all tag links with class active */
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

    generateTitleLinks('[data-tags~="' + tag + '"]'); //function+atributte, tag is error? I tried 'tag' but script doesn't work

  };

  generateTags();
  addClickListenersToTags();

  const generateAuthors = function(event) {
    event.preventDefault();
    /* [DONE] find all articles */
    const articles = document.querySelectorAll('article');

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){

      /* [DONE] find author wrapper */
      const authorWrapper = article.querySelector(optArticleAuthorSelector);

      /* [DONE] get tags from data-tags attribute */
      const articleAuthor = article.getAttribute('data-author');

      /* [DONE] generate HTML of the link */
      const linkHTML = '<li><a href="#author-' + articleAuthor + '"><span>' + articleAuthor + '</span></a></li>';
      console.log(linkHTML);

      /* [DONE] insert HTML of all the links into the tags wrapper */

      authorWrapper.innerHTML = article + articleAuthor;

    }
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

  generateAuthors();

  /* authorClickHandlder */

  const authorClickHandler = function(event){
    /* [DONE] prevent default action for this event */
    event.preventDefault();

    /* [DONE] find all articles authors */
    const articles = document.querySelectorAll('a.active[href=^"#author-"');

    /* [DONE] make new constant named "clickedElement" and give it the value of "this" */
    const clickedElement = this;

    /* [DONE] make a new constant "href" and read the attribute "href" of the clicked element */
    const href = clickedElement.getAttribute('href');
    console.log(href);

    /* [DONE] make a new constant "author" */
    const author = this.getAttribute(data-author);
    console.log(author);

    /* [DONE] make a new constant "tag" and extract tag from the "href" constant */
    const authorTag = href.replace('#author-', ''); //tag remove to get word (#tag-cat- > remove #tag- > cat )
    console.log(authorTag);

    /* [DONE] addClickListener to find author */
    addClickListenersToAuthors('[data-author="' + authorTag + '"]');

    /* [DONE] find all tag links with class author */
    document.querySelectorAll('a.active[href^="#tag-"]');
    const authorList = document.querySelectorAll('a.active[href^="#tag-"]');

    /* [DONE] START LOOP: for each active tag link */
    for(const author of authorList){
      /* remove class active */
      author.classList.remove('active'); // remove class active from link

    /* [DONE] END LOOP: for each active tag link */
    }

    /* [DONE] Find links with author */
    const authorLinks = document.querySelectorAll('a[href^="#author -"]');

    /* START LOOP: for each link */
    for(const authorLink of authorLinks){

      /* add tagClickHandler as event listener for that link */
      author.addEventListener('click', tagClickHandler);

      /* END LOOP: for each link */
    }

    /* [DONE] execute function authorClickHandler */
    authorClickHandler('[data-tags = "generaTitleLinks + author"');

  };


}