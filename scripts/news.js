'use strict'
const API_KEY = "5bcea2aab6984e508521a8c9ceabd275"
const baseURL = "https://newsapi.org/v2/top-headlines"

const newsContainer = document.querySelector("#news-container")
class user {
 renderData = (articles) => {
  newsContainer.innerHTML = ""
  articles.forEach(item => {
   const articleItem = `
   <div class="article">
   <img src="${item.urlToImage}" alt="">
    <div class="content">
      <h6>${item.title}</h6>
      <p>${item.description}</p>
      <button><a href="${item.url}" target="_blank">view</a></button>
     </div>
   </div>
 `;
   newsContainer.insertAdjacentHTML("afterbegin", articleItem)
  });
 }

 getNews = () => {
  const country = 'us';
  const category = 'science';
  const pageSize = 10;

  fetch(`${baseURL}?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`)
   .then(res => res.json())
   .then(data => {
    if (data.status === 'ok') {
     const articles = data.articles;
     console.log("🚀 ~ file: news.js:31 ~ user ~ articles:", articles)
     this.renderData(articles)
    } else {
     console.error('Unable to get data from API');
    }
   })
   .catch(error => {
    console.error('Error! An error occurred. Please try again later', error);
   });
 }
}

const userAction = new user()
userAction.getNews();