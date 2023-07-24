'use strict'
const API_KEY = "de0a9266db8b464ebc55a548c3c4444f"
const baseURL = "https://newsapi.org/v2/top-headlines"

const newsContainer = document.querySelector("#news-container")
const pageNum = document.querySelector('#page-num');
const btnPrev = document.querySelector('#btn-prev');
const btnNext = document.querySelector('#btn-next');
const settings = JSON.parse(getFromStorage("settings")) || {}

window.addEventListener("DOMContentLoaded", () => {
  if (!localStorage.getItem("settings")) {
    setStorage("settings", JSON.stringify({ category: "science", pageSize: 10 }))
  }
})
class user {

  constructor() {
    this.currentPage = 1
    this.pageSize = settings.pageSize;
    this.category = settings.category
    this.totalResults = 0
  }

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

  getNews = (page) => {
    const country = 'us';

    fetch(`${baseURL}?country=${country}&category=${this.category}&pageSize=${this.pageSize}&page=${page}&apiKey=${API_KEY}`)
      .then(res => res.json())
      .then(data => {
        if (data.status === 'ok') {
          const articles = data.articles;
          this.totalResults = data.totalResults;
          this.currentPage = page;
          this.renderData(articles)
          this.updatePagination();
        } else {
          console.error('Unable to get data from API');
        }
      })
      .catch(error => {
        console.error('Error! An error occurred. Please try again later', error);
      });
  }

  onPrev = () => {
    this.getNews(this.currentPage - 1)
  }

  onNext = () => {
    if (this.totalResults > this.currentPage * this.pageSize) {
      this.getNews(this.currentPage + 1)
    }
  }

  updatePagination() {
    pageNum.textContent = this.currentPage;
    if (this.currentPage === 1) {
      btnPrev.disabled = true
    } else {
      btnPrev.disabled = false;
    }
    if (this.totalResults <= this.currentPage * this.pageSize) {
      btnNext.disabled = true;
    } else {
      btnNext.disabled = false;
    }
  }
}

const userAction = new user()
userAction.getNews(1);

if (btnPrev && btnNext) {
  btnPrev.addEventListener('click', () => {
    userAction.onPrev()
  })
  btnNext.addEventListener('click', () => {
    userAction.onNext()
  });
}