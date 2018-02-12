// SEARCHBAR
const search = document.querySelector('.search__input');
const searchForm = document.querySelector('.search');
const searchField = document.querySelector('.search__button');
const gallery = document.querySelector('.gallery');
const image = document.querySelector('.image');

let gifSearch = () => {
  const searchWord = search.value;
  const limit = Math.floor(Math.random() * 10);
  const api = `http://api.giphy.com/v1/gifs/search?q=${searchWord}&api_key=50moE0uCtRujiVeYoU4HXtp7sku8K2Qc&limit=10&offset=${limit}`;
  fetch(api)
  .then(response => {
    return response.json()
  })
  .then(response => {
    while (gallery.firstChild) {
      gallery.removeChild(gallery.firstChild);
    }
    if (searchWord !== "") {
      const list = response.data;
      console.log(list);
      const query = document.querySelector('.query');
      query.innerHTML = `You searched for: ${search.value}`;
      list.forEach(item => {
        var newImg = document.createElement("img");
        newImg.classList.add('image');
        const gifUrl = item.images.downsized_medium.url;
        newImg.src = gifUrl;
        gallery.appendChild(newImg);
      })
    } else {
      console.log("No searchword");
    }
  })
}

search.addEventListener('keyup', (e) => {
  if (e.keyCode === 13) {
    search.blur();
    gifSearch();
  }
})
searchField.addEventListener('click', gifSearch);
