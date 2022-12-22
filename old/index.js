function addPost(title, content) {
  // Create a new post object
  var post = {
    title: title,
    content: content,
  };

  // Add the post to the array
  posts.push(post);

  // Create a Bootstrap card element for the post
  var card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
      <div class="card-body">
        <h5 class="card-title">${post.title}</h5>
        <p class="card-text">${post.content}</p>
      </div>
    `;

  // Append the card to the post container
  document.getElementById("post-container").appendChild(card);
}

// var button = document.getElementById('add-button');
// button.addEventListener('click', function() {
//   // Get the title and content from the input elements
//   var title = document.getElementById('post-title').value;
//   var content = document.getElementById('post-content').value;

//   // Add the post to the object and display it
//   addPost(title, content);
// });

var post = {};
post.title = title;
post.content = content;
post.date = date;

var posts = [];
posts.push(post);

function generateCardHTML(post) {
  return `
      <div class="card">
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <p>Publicado em ${post.date}</p>
      </div>
    `;
}

posts.forEach(function (post) {
  var cardHTML = generateCardHTML(post);
  document.getElementById("posts").innerHTML += cardHTML;
});
