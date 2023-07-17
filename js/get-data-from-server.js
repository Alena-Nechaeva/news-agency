export const getArticlesData = async () => {
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
