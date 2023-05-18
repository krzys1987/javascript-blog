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

  /* [NEW] template options */

  const templates = {
    articleLink: Handlebars.compile(document.querySelector('#template-article-link').innerHTML),
    tagLinkArticle: Handlebars.compile(document.querySelector('#template-tag-link-article').innerHTML),
    authorLinkArticle: Handlebars.compile(document.querySelector('#template-author-article').innerHTML),
    tagCloudLink: Handlebars.compile(document.querySelector('#template-tag-Cloud-Link').innerHTML),
    /* put here next templates */

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

  const titleClickHandler = function(event) {
    event.preventDefault();
    const clickedElement = this;

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');
    for (let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }

    /* [DONE] add class 'active' to the clicked link */
    console.log('clickedElement:', clickedElement);
    clickedElement.classList.add('active');

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

  const generateTitleLinks = function(customSelector = ''){
    console.log(customSelector);

    /* [DONE] remove contents of titleList */
    const titleList = document.querySelector(select.listOf.titles);
    titleList.innerHTML = '';

    /* [DONE] for each article */
    const articles = document.querySelectorAll(select.all.articles + customSelector);

    //[REVIEW] set up a variable? (let html = '';) What for?
    let html = '';

    for (let article of articles) {
      /* [DONE] get the article id */
      const articleId = article.getAttribute('id');
      console.log(articleId);

      /* [DONE] find the title element */
      const articleTitle = article.querySelector(select.article.title).innerHTML;

      /* [DONE] get the title from the title element and create a HTML link*/
      const linkHTMLData = {id: articleId, title: articleTitle};
      const linkHTML = templates.articleLink(linkHTMLData);

      html = html + linkHTML;

      /* [DONE] create HTML of the link */
      titleList.innerHTML = titleList.innerHTML + linkHTML;
    }

    /* [DONE] Find links to articles */
    const links = document.querySelectorAll('.titles a');
    /* [DONE] Watch links for click */
    for (let link of links) {
      link.addEventListener('click', titleClickHandler);
    }

  };

  generateTitleLinks();

  const generateTags = function() {

    //[NEW] set an object parameters
    const params = {
      min: 999999,
      max: 0,
    };

    /*
    const calculateTagParams = function(){
      for(const tag in allTags){
        if(allTags[tag] < params.min){
          console.log(tag + ' is used');
          params.min = allTags[tag];
        }
        if(allTags[tag] > params.max){
          params.max = allTags[tag];
          console.log(tag + ' is used');
        }
      }
      return params; //honestly it wasn't my idea, is return executable at all?
    };

    /*
    const calculateTagClass = function (count, params) {
    const normalizedCount = count - params.min;
    const normalizedMax = params.max - params.min;
    const percentage = normalizedCount / normalizedMax;
    const classNumber = Math.floor(percentage * (opts.tagSizes.count - 1) + 1);
    const className = opts.tagSizes.classPrefix + classNumber;
    return className;
    };
    */

    /* [NEW] create a new variable allTags with an empty object */
    let allTags = { };

    console.log('created a new variable allTag with an empty array');
    /* [DONE] find all articles */
    const articles = document.querySelectorAll(select.all.articles);

    /* [DONE] START LOOP: for every article: */
    for(let article of articles){
      /* [DONE] make html variable with empty string */
      let html = '';

      /* [DONE] find tags wrapper */
      const tagWrapper = article.querySelector(select.article.tags);
      /* [DONE] clear html: remove tags from article */
      tagWrapper.innerHTML = '';

      /* [DONE] get tags from data-tags attribute */
      const articleTags = article.getAttribute('data-tags');

      /* [DONE] split tags into array */
      const articleTagsArray = articleTags.split(' '); //tags are: 'news reviews design' changed 'news' 'reviews' 'design'

      /* [DONE] START LOOP: for each tag */
      for(let tag of articleTagsArray){
        console.log(articleTagsArray);

        /* [DONE] generate HTML of the link */
        const linkHTMLData = {
          id: tag,
          title: tag,
        };

        //create a constant linkHTML
        const linkHTML = templates.articleLink(linkHTMLData);

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
    //calculateTagParams();
    //console.log(calculateTagParams);
    console.log(params); //Show min and max? But why?

    /* [NEW] find list of tags in right column */
    const tagList = document.querySelector(select.listOf.tags);

    /* [NEW] create variable for all links HTML code */
    let allTagsHTML = '';

    /* [NEW] create a constant an allTagsData with an tag object contains array */
    const allTagsData = {tags: []};

    /* [NEW] using tags to change display */

    /* [NEW] defining a variable for tags name */

    /* [NEW] defining an empty variable for tags size at right column */
    let className = '';

    /* [NEW] START LOOP: for each tag in allTags: */
    for(let tag in allTags){
      if (allTags[tag] > params.max/2) {
        className = 'tag-size-4';
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

      //[NEW] add tag to obeject allTagsData.tag.array
      allTagsData.tags.push({
        tag: tag,
        className: className //don't understand why
      });

      /* [NEW] add value of className variable to tag.className constant */
      tag.ClassName;

      /* [NEW] calculateTagClass
      const calculateTagClass = function (count, params) {
        classNumber = Math.floor( 0.5 * 5 + 1 );
        classNumber = Math.floor( 0.5 * cloudClassCount + 1 );
        classNumber = Math.floor( ( 4 / 8 ) * cloudClassCount + 1 );
        classNumber = Math.floor( ( (6 - 2) / (10 - 2) ) * cloudClassCount + 1 );
        classNumber = Math.floor( ( (count - 2) / (10 - 2) ) * cloudClassCount + 1 );
        classNumber = Math.floor( ( (count - 2) / (params.max - 2) ) * cloudClassCount + 1 );
        classNumber = Math.floor( ( (count - params.min) / (params.max - 2) ) * cloudClassCount + 1 );
        classNumber = Math.floor( ( (count - params.min) / (params.max - params.min) ) * cloudClassCount + 1 );
        CloudClassPrefix;
      }; */

      /* [NEW] generate code of a link and add it to allTagsHTML */
      allTagsHTML += '<li><a href="#tag-' + tag + '"><span>' + tag + ' (' + allTags[tag] + ')</span></a></li>';
    }

    /*[NEW] add HTML from allTagsHTML to tagList */
    //tagList.innerHTML = allTagsHTML;
    tagList.innerHTML = templates.tagCloudLink(allTagsData);


    /* [NEW] END LOOP: for each tag in allTags: */



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
    const articles = document.querySelectorAll(select.all.articles);

    /* [DONE] START LOOP: for every article: */
    for (let article of articles) {

      /* [DONE] find author wrapper */
      const authorWrapper = article.querySelector(select.article.author);
      /* [REVIEW, IT CAUSE PROBLEMS: AUTHORS CLICKED ARE NOT FILTERED ] make html variable with empty string */
      //authorList.innerHTML = '';

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
    const authorList = document.querySelector(select.listOf.authors);

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

  /* [NEW] using a Templates */

  /*
  const tplHelloSource = document.querySelector('#template-hello').innerHTML;

  const tplHello = Handlebars.compile(tplHelloSource);
  const dataHello = {firstName: 'John', lastName: 'Smith'};
  let generatedHTML = tplHello(dataHello);

  const targetElement = document.body;
  targetElement.insertAdjacentHTML('beforeend', generatedHTML);

  /* template filled with data fe */
  /*
  const dataHello2 = {firstName: 'Maria', lastName: 'Jones'};
  generatedHTML = tplHello(dataHello2);
  targetElement.insertAdjacentHTML('beforeend', generatedHTML);

  console.log('tplHello:');
  console.log(tplHelloSource);
  console.log('=========');

  console.log('dataHello:');
  console.log(dataHello);
  console.log('=========');

  console.log('generatedHTML:');
  console.log(generatedHTML);
  console.log('=========');
*/
}