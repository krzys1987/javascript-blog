
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
  const activeArticles = document.querySelectorAll('.post-title .post-author');
    for (let activeArticle of activeArticles) {
      activeArticle.classList.remove('active');
    }


  /* [DONE] get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log(articleSelector);


  /* [DONE] find the correct article using the selector (value of 'href' attribute) */

  const targetArticle = document.querySelector(articleSelector);
  console.log('targetArticle:', targetArticle);


  /* [IN PROGRESS] add class 'active' to the correct article */
  targetArticle.classList.add('active');

  /* [IN PROGRESS] generate list title for articles */
  // function generateTitleLinks(getElementById(article*)) {}
  /* created HTML is HTML + const(with id article) */

  //remove list titles

  //find articles "id" and save it as const

  //finf articles titles and save it as const
  //querySelector(title)

  //based on "id" and titles create html code and save it const
  //use innerHTML to change htnl doc content, "read" attributes using getAttribute

  //put the code at list title column | use innerHTML to add link to link list

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}