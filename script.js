const postsAPI = {
  getAll: () => {
    const url = 'http://localhost:3000/posts'
    return fetch(url).then(response => response.json())
  },

  save: post => {
    const url = 'http://localhost:3000/posts'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: post.title,
        description: post.description,
        author: post.author
      })
    }

    return fetch(url, options).then(response => response.json())
  },

  remove: postId => {
    const url = `http://localhost:3000/posts/${postId}`

    const options = {
      method: 'DELETE',
      headers: {}
    }

    return fetch(url, options).then(response => response.json())
  }
}

const createPostItem = post => {
  return ` \
  <article class="post"> \
  <img src="img/user-not-found.png" alt="não tem imagem"> \
  <div class="box-text"> \
    <h3 class="box-titulo"> ${post.title} </h3> \
    <p class="box-descricao"> ${post.description} </p> \
    <span class="box-autor"> ${post.author} </span> \
  </div> \
</article>`
}
