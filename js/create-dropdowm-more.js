export const createDropdownList = () => {
  const wrapBlock = document.createElement('div');
  const dropList = document.createElement('ul');
  const arrDropValues = ['Business', 'Health', 'Entertainment', 'Science', 'About HME News'];

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
