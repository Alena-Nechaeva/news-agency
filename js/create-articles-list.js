import { getArticlesData } from './get-data-from-server.js';
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

export const createArticlesList = async () => {
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
