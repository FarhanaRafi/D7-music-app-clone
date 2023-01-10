function loadAlbumCount() {
  let albums = document.getElementsByClassName("card");

  let albumCount = document.getElementById("albumCount");

  albumCount.innerText = `Number of Albums : ${albums.length}`;
}

window.onload = loadAlbumCount();
