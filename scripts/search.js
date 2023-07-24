'use strict';
const baseSearchURL = "https://newsapi.org/v2/everything"

const searchInput = document.querySelector("#input-query")
const form = document.querySelector('form')


userAction.searchNews = (keyword) => {
 fetch(`${baseSearchURL}?q=${keyword}&pageSize=${userAction.pageSize}&page=1&apiKey=${API_KEY}`)
  .then(res => res.json())
  .then(data => {
   if (data.status === 'ok') {
    const articles = data.articles;
    userAction.totalResults = data.totalResults;
    userAction.currentPage = 1;
    userAction.renderData(articles)
    userAction.updatePagination();
   } else {
    console.error('Unable to get data from API');
   }
  })
  .catch(error => {
   console.error('Error! An error occurred. Please try again later', error);
  });
}

form.addEventListener("submit", (e) => {
 e.preventDefault()
 if (!isRequired([searchInput])) {
  searchInput.value = searchInput.value.trim()
  userAction.searchNews(searchInput.value)
 }
})
