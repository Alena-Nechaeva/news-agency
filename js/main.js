import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import { createHeroBlock } from './hero.js'

(async function () {
  //get data from server
  const getArticlesData = async () => {
    const parameters = new URLSearchParams(location.search);
    const page = parameters.get('page');
    const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page === null ? 1 : page}`);
    const result = await response.json();

    //return an object with properties
    return {
      articlesData: result.data,
      paginationData: result.meta.pagination,
      pageId: +result.meta.pagination.page,
    }
  }

  //articles pagination
  const createPagination = async () => {
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

  //create articles list
  const createArticlesList = async () => {
    const articles = await getArticlesData();
    const artList = document.querySelector('.articles-list');

    for (let i = 1; i < articles.articlesData.length; i++) {
      const artLi = document.createElement('li');
      const artLink = document.createElement('a');
      const artImg = document.createElement('img');

      artLi.classList.add('atricles-list__item');
      artLink.classList.add('articles-list__link');
      artImg.classList.add('articles-list__img');

      artImg.src = `${faker.image.animals(640, 360, true)}`;
      artImg.alt = 'picture'
      artLink.setAttribute('href', `article.html?id=${articles.articlesData[i].id}`);
      artLink.innerHTML = `${articles.articlesData[i].title}`;
      artLi.append(artImg, artLink);
      artList.appendChild(artLi);
    }
  }

  //create page of article
  const createArtclePage = async () => {
    const articleBlock = document.querySelector('.article-block');
    const parameters = new URLSearchParams(location.search);
    const artId = parameters.get('id');
    const response = await fetch(`https://gorest.co.in/public-api/posts/${artId}`);
    const result = await response.json();

    const article = result.data;
    const articleContent = `
      <div class = "card">
        <div class = "card-body">
          <h1 class = "card-title">${article.title}</h1>
          <p class = "card-text">${article.body}</p>
        </div>
      </div>
    `;
    articleBlock.innerHTML = articleContent
  }

  //add comments block
  const createComments = async () => {
    const commentsBlock = document.querySelector('.comments-block');
    const parameters = new URLSearchParams(location.search);
    const artId = parameters.get('id');
    const response = await fetch(`https://gorest.co.in/public-api/comments?post_id=${artId}`);
    const result = await response.json();
    const comment = result.data;
    let artComments = ''

    comment.map(item => {
      artComments = `
      <div class = "card">
        <div class = "card-body">
          <h5 class = "card-title">${item.name}</h5>
          <p class = "card-text">${item.body}</p>
        </div>
      </div>
      `;
    })
    commentsBlock.innerHTML = artComments;
  }

  //add a DOM
  document.addEventListener('DOMContentLoaded', () => {
    const articlesList = document.querySelector('.articles-list');
    const articleBlock = document.querySelector('.article-block');
    const heroContent = document.querySelector('.hero__content');

    if (heroContent) {
      createHeroBlock();
    }

    if (articlesList) {
      createPagination();
      createArticlesList();
    }
    if (articleBlock) {
      createArtclePage();
      createComments();
    }
  })



}());
