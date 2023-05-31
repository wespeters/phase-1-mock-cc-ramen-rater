// write your code here
const ramenURL = 'http://localhost:3000/ramens';

const form = document.getElementById('new-ramen');
form.addEventListener('submit', addNewRamen);

fetchRamen();

function fetchRamen() {
  fetch(ramenURL)
    .then(res => res.json())
    .then(data => {
      data.forEach(ramen => {
        createRamen(ramen);
      });
    });
};

function createRamen(ramen) {
  const ramenMenu = document.getElementById('ramen-menu');
  const img = document.createElement('img');
  img.src = ramen.image;
  img.addEventListener('click', () => showRamenDetail(ramen));
  ramenMenu.appendChild(img);
};

function showRamenDetail(ramen) {
  const detailImage = document.querySelector('.detail-image');
  const ramenName = document.querySelector('.name');
  const ramenRestaurant = document.querySelector('.restaurant');
  const ramenComment = document.getElementById('comment-display');
  const ramenRating = document.getElementById('rating-display');

  detailImage.src = ramen.image;
  detailImage.alt = ramen.name;
  ramenName.textContent = ramen.name;
  ramenRestaurant.textContent = ramen.restaurant;
  ramenComment.textContent = ramen.comment;
  ramenRating.textContent = ramen.rating;
}

function addNewRamen(e) {
  e.preventDefault();

  const newRamen = {
    name: document.getElementById('new-name').value,
    restaurant: document.getElementById('new-restaurant').value,
    image: document.getElementById('new-image').value,
    comment: document.getElementById('new-comment').value,
    rating: document.getElementById('new-rating').value
  };

  createRamen(newRamen);

  document.getElementById('new-ramen').reset();
}
