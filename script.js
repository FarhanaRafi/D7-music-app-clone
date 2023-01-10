function loadAlbumCount() {
  let albums = document.getElementsByClassName("card");

  let albumCount = document.getElementById("albumCount");

  albumCount.innerText = `Number of Albums : ${albums.length}`;
}

function bodyToogle() {
  let button = document.getElementById("btn-toogle");
  let cards = document.querySelectorAll(".toogle");
  for (let i = 0; i < cards.length; i++) {
    button.addEventListener("click", () => {
      cards[i].classList.toggle("invisible");
    });
  }
}
bodyToogle();

window.onload = loadAlbumCount();
