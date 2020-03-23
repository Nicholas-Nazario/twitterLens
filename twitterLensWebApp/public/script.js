import { searchTwitter } from './../index.js'
//import { searchedData } from './../index.js'

function graphql(query, variables = {}) {
  return fetch('/admin/api', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      variables,
      query,
    }),
  }).then(function(result) {
    return result.json();
  });
}

const GET_TODOS = `
    query GetTodos {
      allTodos {
        name
        id
      }
    }
  `;

const ADD_TODO = `
    mutation AddTodo($name: String!) {
      createTodo(data: { name: $name }) {
        name
        id
      }
    }
  `;

const REMOVE_TODO = `
    mutation RemoveTodo($id: ID!) {
      deleteTodo(id: $id) {
        name
        id
      }
    }
  `;

const DELETE_ICON = `<svg viewBox="0 0 14 16" class="delete-icon">
  <title>Delete this item</title>
  <path
    fillRule="evenodd"
    d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"
  />
</svg>`;

function addTodo(event) {
  event.preventDefault();
  const form = event.target;
  // Find the 'add-item' input element
  const element = form.elements['add-item'];
  if (element) {
    graphql(ADD_TODO, { name: element.value }).then(fetchData);
    searchTwitter(element.value)
  }

  // Clear the form
  form.reset();
}

// function searchTwitter(keyword){
//   var Twit = require(['./../index']).Twit;
//   var config = require(['./config']) 
//   var T = new Twit(config);
//   var params = { 
//     q: keyword,
//     language: 'en',
//     count: 100    
//   }
//   T.get('search/tweets', params, searchedData);
// }

// function searchedData(err, data, response) {
//   const Tweet = require(['./tweet']).Tweet 
//   //console.log(data);
//   var tweets = [];
//   // Loop through the returned tweets
//   for(let i = 0; i < data.statuses.length; i++) {
//     // Get the tweet from the returned data
//     //let tweetText = { text: data.statuses[i].text }
//     let tweet = data.statuses[i];
//     tweets.push(new Tweet(tweet.created_at, tweet.id, tweet.text, tweet.entities, tweet.user, tweet.retweet_count, tweet.favorite_count));
//      //console.log(tweetText)
//   }

//   console.log(tweets[0])
// }

function removeTodo(todo) {
  graphql(REMOVE_TODO, { id: todo.id }).then(fetchData);
}

function createToDoItem(todo) {
  // Create the remove button
  const removeItemButton = document.createElement('button');
  removeItemButton.classList.add('remove-item', 'js-remove-todo-button');
  removeItemButton.innerHTML = DELETE_ICON;
  // Attach an event to remove the todo
  removeItemButton.addEventListener('click', function() {
    removeTodo(todo);
  });

  // Create the list item
  const listItem = document.createElement('li');
  listItem.classList.add('list-item');
  // Add text to the listItem
  listItem.innerHTML = todo.name;
  // append the remove item button
  listItem.appendChild(removeItemButton);

  return listItem;
}

function createList(data) {
  // Create the list
  const list = document.createElement('ul');
  list.classList.add('list');
  data.allTodos.forEach(function(todo) {
    list.appendChild(createToDoItem(todo));
  });
  return list;
}

function fetchData() {
  graphql(GET_TODOS)
    .then(function(result) {
      // Clear any existing elements from the list
      document.querySelector('.results').innerHTML = '';

      // Recreate the list and append it to the .results div
      const list = createList(result.data);
      document.querySelector('.results').appendChild(list);
    })
    .catch(function(error) {
      console.log(error);
      document.querySelector('.results').innerHTML = '<p>Error</p>';
    });
}

// Replace the script tag with the app
document.getElementById('todo-app').parentNode.innerHTML = `
<div class="app">
  <h1 class="main-heading">Welcome to Keystone&nbsp;5!</h1>
  <p class="intro-text">
    Here's a simple demo app that lets you add/remove todo items. Create a few entries, then go
    check them out from your <a href="/admin">Keystone 5 Admin UI</a>!
  </p>
  <hr class="divider" />
  <div class="form-wrapper">
    <h2 class="app-heading">To-Do List</h2>
    <div>
      <form class="js-add-todo-form">
        <input required name="add-item" placeholder="Add new item" class="form-input add-item" />
      </form>
    </div>
    <div class="results">
      <p>Loading...</p>
    </div>
  </div>
</div>`;

// Add event listener to the form
document.querySelector('.js-add-todo-form').addEventListener('submit', addTodo);
// Fetch the initial data
fetchData();
