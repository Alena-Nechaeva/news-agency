export const createSearchInp = () => {
  const wrapBlock = document.createElement('div');
  const searchForm = document.createElement('form');
  const searchInp = document.createElement('input');


  for (const item of arrDropValues) {
    const li = document.createElement('li');
    li.classList.add('drop__item');
    li.innerHTML = `<a class="drop__link" href=#>${item}</a>`;
    dropList.append(li);
  }
  wrapBlock.classList.add('header__drop-block')
  dropList.classList.add('header__drop', 'drop')

  wrapBlock.append(dropList)

  return wrapBlock;
}
