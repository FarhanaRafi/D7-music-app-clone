function loadAlbumCount() {
  let albums = document.getElementsByClassName("card");

  let albumCount = document.getElementById("albumCount");

  albumCount.innerText = `Number of Albums : ${albums.length}`;
}

function addBadge() {
  let cards = document.querySelectorAll(".fav-album");
  for (let i = 0; i < cards.length; i++) {
    let badge = document.createElement("span");
    badge.classList.add("badge");
    badge.classList.add("badge-danger");
    badge.classList.add("position-absolute");
    badge.innerText = "POP";
    cards[i].appendChild(badge);
  }
}

function onLoad() {
  loadAlbumCount();
  addBadge();
}

function deleteRow(event) {
  console.log(event);
  let rowIndex = event.target.parentNode.parentNode.parentNode.rowIndex;
  document.getElementById("tracks").deleteRow(rowIndex - 1);
}

function addTrack() {
  let trackNum = document.getElementById("track-num");
  let trackName = document.getElementById("track-name");
  let artist = document.getElementById("artist");
  let duration = document.getElementById("track-duration");

  let tableRef = document.getElementById("tracks");

  // Insert a row at the end of the table
  let newRow = tableRef.insertRow(-1);

  // Insert a cell in the row at index 0
  let newCell = newRow.insertCell(0);

  // Append a text node to the cell
  let newText = document.createTextNode(trackNum);
  newCell.appendChild(newText);

  let newCell2 = newRow.insertCell(0);

  // Append a text node to the cell
  let newText2 = document.createTextNode(trackName);
  newCell.appendChild(newText2);

  let newCell3 = newRow.insertCell(0);

  // Append a text node to the cell
  let newText3 = document.createTextNode(artist);
  newCell.appendChild(newText3);

  let newCell4 = newRow.insertCell(0);

  // Append a text node to the cell
  let newText4 = document.createTextNode(duration);
  newCell.appendChild(newText4);
}

window.onload = onLoad();
