export const createMainMenu = () => {
  const nav = document.createElement('nav');
  const mainList = document.createElement('ul');
  const newsList = document.createElement('ul');
  const sportList = document.createElement('ul');
  const radioList = document.createElement('ul');
  const localList = document.createElement('ul');
  const closeBtn = document.createElement('button');

  const underLists = [newsList, sportList, radioList, localList];
  for (const item of underLists) {
    const mainLi = document.createElement('li');
    mainLi.classList.add('nav-main__item');
    mainLi.append(item);
    mainList.append(mainLi);
  }

  newsList.innerHTML = `<h2 class="nav-main__title">NEWS</h2>`;
  sportList.innerHTML = `<h2 class="nav-main__title">SPORTS</h2>`;
  radioList.innerHTML = `<h2 class="nav-main__title">RADIO</h2>`;
  localList.innerHTML = `<h2 class="nav-main__title">ALL LOCALS</h2>`;

  nav.classList.add('nav-main');
  mainList.classList.add('nav-main__list', 'container');
  closeBtn.classList.add('nav-main__close')

  const newsCountry = document.createElement('li');
  const newsScience = document.createElement('li');
  const newsPolitics = document.createElement('li');
  const newsBusiness = document.createElement('li');
  const newsClimate = document.createElement('li');
  const newsHealth = document.createElement('li');
  const newsWorld = document.createElement('li');
  const newsEntertainment = document.createElement('li');
  const newsLiItems = [newsCountry, newsScience, newsPolitics, newsBusiness, newsHealth, newsEntertainment, newsClimate, newsWorld];

  newsCountry.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Country</a>`;
  newsScience.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Science</a>`;
  newsPolitics.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Politics</a>`;
  newsBusiness.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Business</a>`;
  newsClimate.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Climate</a>`;
  newsHealth.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Health</a>`;
  newsWorld.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">World</a>`;
  newsEntertainment.innerHTML = `<a class="nav-main__inside-link news__country-link" href="index.html">Entertainment</a>`;

  for (const item of newsLiItems) item.classList.add('nav-main__inside', 'news__item');

  const sportScores = document.createElement('li');
  const sportShows = document.createElement('li');
  const sportHockey = document.createElement('li');
  const sportFootball = document.createElement('li');
  const sportTennis = document.createElement('li');
  const sportGolf = document.createElement('li');
  const sportOlympic = document.createElement('li');
  const sportLiItems = [sportScores, sportShows, sportTennis, sportHockey, sportFootball, sportGolf, sportOlympic];

  sportScores.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Scores</a>`;
  sportShows.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Shows</a>`;
  sportTennis.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Tennis</a>`;
  sportHockey.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Hockey</a>`;
  sportFootball.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Football</a>`;
  sportGolf.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Golf</a>`;
  sportOlympic.innerHTML = `<a class="nav-main__inside-link sport__country-link" href="index.html">Olympic</a>`;

  for (const item of sportLiItems) item.classList.add('nav-main__inside', 'sport__item');

  const radioShows = document.createElement('li');
  const radioTop = document.createElement('li');
  const radioPodcasts = document.createElement('li');
  const radioSchedules = document.createElement('li');
  const radioLiItems = [radioShows, radioTop, radioPodcasts, radioSchedules];

  radioShows.innerHTML = `<a class="nav-main__inside-link radio__country-link" href="index.html">Shows</a>`;
  radioTop.innerHTML = `<a class="nav-main__inside-link radio__country-link" href="index.html">Top Stories</a>`
  radioPodcasts.innerHTML = `<a class="nav-main__inside-link radio__country-link" href="index.html">Podcasts</a>`
  radioSchedules.innerHTML = `<a class="nav-main__inside-link radio__country-link" href="index.html">Schedules</a>`

  for (const item of radioLiItems) item.classList.add('nav-main__inside', 'radio__item');

  for (let i = 1; i < 7; i++) {
    const localLi = document.createElement('li');
    localLi.innerHTML = `<a class="nav-main__inside-link" href="index.html">Local ${i}</a>`;
    localLi.classList.add('nav-main__inside', 'local__item')
    localList.append(localLi);
  }

  closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/></svg>`

  mainList.append(closeBtn);
  radioList.append(radioShows, radioTop, radioPodcasts, radioSchedules);
  newsList.append(newsCountry, newsScience, newsPolitics, newsBusiness, newsHealth, newsEntertainment, newsClimate, newsWorld);
  sportList.append(sportScores, sportShows, sportTennis, sportHockey, sportFootball, sportGolf, sportOlympic);
  nav.append(mainList);

  return nav;
}
