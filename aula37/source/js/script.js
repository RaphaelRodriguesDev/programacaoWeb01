const box = document.querySelector("body > main > div.container.mt-5 > div");

const qtdCards = document.querySelector("#qtd-cards");

const btnSend = document.querySelector(".btn-send");

const news1 = {
  title: "Título da Notícia 1",
  content: "Resumo da Notícia 1",
  image: "https://picsum.photos/150/90",
  url: "https://www.news1.com",
};

const news2 = {
  title: "Título da Notícia 2",
  content: "Resumo da Notícia 2",
  image: "https://picsum.photos/150/90",
  url: "https://www.news2.com",
};

const news3 = {
  title: "Título da Notícia 3",
  content: "Resumo da Notícia 3",
  image: "https://picsum.photos/150/90",
  url: "https://www.news3.com",
};

const createNewsCard = news => {
  return `
        <div class="card col-4" style="width: 18rem;">
            <img src="${news.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <p class="card-text">${news.content}</p>
                <a href="${news.url}" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    `;
};

// box.innerHTML =
//   createNewsCard(news1) + createNewsCard(news2) + createNewsCard(news3);

const gerarCard = qtd => {
    for (let i = 0; i <= qtd; i++ ) {
        box.innerHTML += createNewsCard("news"+i);
    }
};

btnSend.addEventListener("click", gerarCard(qtdCards.value));
