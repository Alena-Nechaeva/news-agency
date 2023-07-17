import { getArticlesData } from './get-data-from-server.js';

export const createPagination = async () => {
  const pagination = await getArticlesData(),
    navList = document.querySelector('.nav__list');

  // create pagination
  for (let i = 0; i <= pagination.paginationData.pages + 1; i++) {
    const pagLi = document.createElement('li');
    const pagLink = document.createElement('a');
    pagLi.classList.add('nav__item');
    pagLink.classList.add('page-link', 'nav__link');
    pagLink.setAttribute('href', `index.html?page=${i}`);
    pagLink.innerHTML = `${i}`;
    pagLi.append(pagLink);
    navList.append(pagLi);

    //add active class
    if (pagination.pageId === i) {
      pagLi.classList.add('active');
    }

    // create dots conditions
    if (pagination.pageId < i - 10) pagLi.style.display = 'none';//hide elements on the left side from the active element
    if (pagination.pageId > i + 10) pagLi.style.display = 'none';//hide elements on the right side from the active element

    if (i === 1) pagLi.style.display = 'block';//the first one is always active
    if (i === pagination.paginationData.pages) pagLi.style.display = 'block';//the last one is always active

    if (pagination.pageId > 10) { //replace second Li for dots if opened page is more than number 10
      if (i === 2) {
        pagLi.style.display = 'block'
        pagLi.textContent = '. . .'
        pagLi.classList.add('dots');
      }
    }

    if (pagination.pageId < pagination.paginationData.pages - 9) { //replace penultimate Li for dots if opened page is more than last page -9
      if (i === pagination.paginationData.pages - 1) {
        pagLi.style.display = 'block'
        pagLi.textContent = '. . .'
        pagLi.classList.add('dots');
      }
    }

    //careate previous button
    if (i === 0) {
      pagLink.innerHTML = '&laquo;';
      pagLi.style.display = 'block';
      if (pagination.pageId === 1) {
        pagLi.classList.add('disabled');
        pagLink.setAttribute('href', 'index.html');
      } else pagLink.setAttribute('href', `index.html?page=${pagination.pageId - 1}`);
    }
    //create next button
    if (i === pagination.paginationData.pages + 1) {
      pagLink.innerHTML = '&raquo;';
      pagLi.style.display = 'block';
      if (pagination.pageId === pagination.paginationData.pages) {
        pagLi.classList.add('disabled');
        pagLink.setAttribute('href', `index.html?page=${pagination.paginationData.pages + 1}`);
      } else pagLink.setAttribute('href', `index.html?page=${pagination.pageId + 1}`);
    }
  }
}
