'use strict'
const API_KEY = "5bcea2aab6984e508521a8c9ceabd275"
const baseURL = "https://newsapi.org/v2/top-headlines"

const newsContainer = document.querySelector("#news-container")
const pageNum = document.querySelector('#page-num');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');

class user {

  constructor() {
    this.currentPage = 1
    this.pageSize = 10;
  }

  renderData = (articles) => {
    newsContainer.innerHTML = ""
    const start = (this.currentPage - 1) * this.pageSize
    const end = this.currentPage + this.pageSize
    articles.slice(start, end).forEach(item => {
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
    pageNum.textContent = this.currentPage;
    if (this.currentPage === 1) {
      btnPrev.disabled = true
    } else {
      btnPrev.disabled = false;
    }
    if (end >= articles.length) {
      btnNext.disabled = true;
    } else {
      btnNext.disabled = false;
    }
  }

  getNews = () => {
    const country = 'us';
    const category = 'science';
    const pageSize = 12;

    fetch(`${baseURL}?country=${country}&category=${category}&pageSize=${pageSize}&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          const articles = data.articles;
          this.renderData(articles)
        } else {
          console.error('Unable to get data from API');
        }
      })
      .catch(error => {
        console.error('Error! An error occurred. Please try again later', error);
      });
  }

  onPrev = () => {
    if (this.currentPage > 1) {
      this.currentPage--
      this.getNews()
    }
  }

  onNext = () => {
    this.currentPage++
    this.getNews()
  }
}

const userAction = new user()
userAction.getNews();

btnPrev.addEventListener('click', () => {
  userAction.onPrev()
})
btnNext.addEventListener('click', () => {
  userAction.onNext()
});
