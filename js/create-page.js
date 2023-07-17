export const createArtclePage = async () => {
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

export const createComments = async () => {
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
