const apiKey = '15fdacc6623840b79775f99ae2b564eb';
const newsContainer = document.getElementById('news-container');

async function fetchNews() {
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);
    const data = await response.json();
    displayNews(data.articles);
}

function displayNews(articles) {
    newsContainer.innerHTML = '';
    articles.forEach(article => {
        const newsArticle = document.createElement('article');
        newsArticle.innerHTML = `
            <img src="${article.urlToImage}" alt="News Image">
            <h2>${article.title}</h2>
            <p>${article.description}</p>
            <a href="${article.url}" target="_blank">Read more</a>
        `;
        newsContainer.appendChild(newsArticle);
    });
}

fetchNews();
