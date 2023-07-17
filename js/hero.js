import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const getArticlesData = async () => {
  // const parameters = new URLSearchParams(location.search);
  // const page = parameters.get('page');
  // const response = await fetch(`https://gorest.co.in/public-api/posts?page=${page === null ? 1 : page}`);
  const response = await fetch(`https://gorest.co.in/public-api/posts?page=1`);
  const result = await response.json();
  //return an object with properties
  return {
    articlesData: result.data,
    paginationData: result.meta.pagination,
    pageId: +result.meta.pagination.page,
  }
}

//create hero block
export const createHeroBlock = async () => {
  const content = await getArticlesData();
  const heroContent = document.querySelector('.hero__content');
  const heroLeft = document.createElement('div');
  const heroLeftLink = document.createElement('a');
  const heroLeftImg = document.createElement('img');
  heroLeftLink.classList.add('hero__link');
  heroLeftImg.classList.add('hero__img');
  heroLeft.classList.add('hero__content-left');
  heroLeftImg.src = `${faker.image.animals(800, 400, true)}`;
  heroLeftLink.href = `article.html?id=${content.articlesData[1].id}`;
  heroLeftLink.textContent = `${content.articlesData[1].title}`;
  const heroRight = document.createElement('div');
  heroRight.classList.add('hero__content-right', 'flex')
  for (let i = 1; i < 4; i++) {
    const heroRightDiv = document.createElement('div');
    const heroRightLink = document.createElement('a');
    heroRightDiv.classList.add('hero__item-right');
    heroRightLink.classList.add('hero__link');
    heroRightLink.href = `article.html?id=${content.articlesData[i].id}`;
    heroRightLink.textContent = `${content.articlesData[i].title}`;
    heroRightDiv.append(heroRightLink)
    heroRight.append(heroRightDiv)
  }
  heroLeft.append(heroLeftImg, heroLeftLink);
  heroContent.append(heroLeft, heroRight);
}
