const projectTitle = document.querySelector('title');
projectTitle.innerText = 'Js Play practice code';

const input = document.querySelector('.input');
const search = document.querySelector('.search');
search.addEventListener('click', () => {
  input.classList.toggle('show-input');
});

let videoList = document.querySelectorAll(
  '.video-list-container .video-list-div'
);

videoList.forEach((vid) => {
  vid.onclick = () => {
    let src = vid.querySelector('.list-video').src;
    let title = vid.querySelector('.video-list-title').innerHTML;
    document.querySelector('.main-video-container .video-player').src = src;
    document.querySelector('.main-video-container .video-player').play();
    document.querySelector('.main-video-container .video-player').play();
    document.querySelector(
      '.main-video-container .main-video-title'
    ).innerHTML = title;
  };
});

// Dad Joke Section Starts Here
const jokeText = document.querySelector('.joke-text');
const jokeError = document.querySelector('.joke-error-text');
const jokeBtn = document.querySelector('.joke-btn');

const apiUrl = 'https://api.api-ninjas.com/v1/dadjokes?limit=1';
const apiKey = 'V6MI9l246nmcKTA8Oc4fCA==dymUbgD4TOkZbxKz';

const options = {
  method: 'GET',
  headers: {
    'X-Api-Key': apiKey,
  },
};

const getJoke = async () => {
  try {
    jokeText.innerHTML = `<div class="loading-joke"></div>`;
    jokeBtn.disabled = true;
    jokeBtn.innerText = 'Loading...';

    const resp = await fetch(apiUrl, options);
    const data = await resp.json();
    jokeText.innerText = data[0].joke;

    jokeBtn.disabled = false;
    jokeBtn.innerText = 'tell me a joke';
  } catch (error) {
    jokeError.innerHTML = `there was a network error please try back`;
    jokeBtn.disabled = false;
    jokeBtn.innerText = 'tell me a joke';
  }
};
jokeBtn.addEventListener('click', getJoke);
