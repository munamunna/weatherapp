
let newsApi="https://newsapi.org/v2/top-headlines?country=us&apiKey=0dcbbb62816947b8bd4f2f8da1b41339"

fetch(newsApi).then((res)=>res.json()).then(data=>displayNews(data));




function displayNews(data) {
    let htmlData = '';

    for (let article of data.articles) {
        let name = article.title;
        let desc = article.description;
        let image = article.urlToImage;
        let published = article.publishedAt;
        let content = article.content;

        htmlData += `
        <div class="news-card">
        <div class="image-container">
            <img src="${image}" alt="">
        </div>
        <div class="news-content">
            <div class="news-title">${name}</div>
            <div class="news-description">${desc}</div>
            <a href="${article.url}" class="view-button">Read More</a>
        </div>
    </div>
        `;
    }

    document.querySelector("#result").innerHTML = htmlData;
}



var catagories=["General","Business","Technology","Entertainment","Health","Science","Sports"]

displaycatagories(catagories)
function displaycatagories(catagories){
  let data=``
  for(let cat of catagories){
    data+=`
    
    

      <div>
            <button class="option" value="${cat}" onclick="filterNewsByCategory('${cat}')">${cat}</button>
        </div>

    `
  }
  document.querySelector("#id_category").innerHTML=data
}

function filterNewsByCategory(category) {
    // Fetch news based on the selected category
    let filteredNewsApi = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0dcbbb62816947b8bd4f2f8da1b41339`;
  
    fetch(filteredNewsApi)
      .then(res => res.json())
      .then(data => displayNews(data));
  }


 
 