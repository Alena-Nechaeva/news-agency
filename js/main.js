import { createHeroBlock } from './hero.js';
import { createMainMenu } from './create-main-menu.js';
import { createPagination } from './create-pagination.js';
import { createArticlesList } from './create-articles-list.js';
import { createArtclePage, createComments } from './create-page.js';
import { createDropdownList } from './create-dropdowm-more.js';

document.addEventListener('DOMContentLoaded', () => {
  const articlesList = document.querySelector('.articles-list');
  const articleBlock = document.querySelector('.article-block');
  const heroContent = document.querySelector('.hero__content');
  const menuBtn = document.querySelector('.header__menu-btn');
  const header = document.querySelector('header');
  const headerNav = document.querySelector('.header__nav');
  const headerMoreBtn = document.querySelector('.header__nav-btn');
  const navMain = createMainMenu();


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

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('open');
    header.append(navMain);
    navMain.classList.toggle('open');

    document.querySelector('.nav-main__close').addEventListener('click', () => {
      navMain.classList.remove('open');
      navMain.remove();
    })
  })

  headerNav.append(createDropdownList());

  headerMoreBtn.addEventListener('click', () => {
    const dropWrap = document.querySelector('.header__drop-block');
    dropWrap.classList.toggle('is-open');
  })


})

