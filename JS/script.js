let modal = document.getElementById("modal2");
let modalImg = document.getElementById("gallery-image");
let captionText = document.getElementById("caption");
let title1 = document.getElementById("title");
let desc1 = document.getElementById("description");
let title2 = document.getElementById("title2");
let desc2 = document.getElementById("description2");

const span = document.getElementById("close-modal");

function playVideo(playBut, playId) {
  let video = document.getElementsByClassName("video")[playBut];

    video.play();
    document.getElementById(playId).style.display = "none";
}

function stopVideo(playBut, playId){
let video = document.getElementsByClassName("video")[playBut];

  video.pause();
  document.getElementById(playId).style.display = "block";
}

span.addEventListener("click", function () {
  modal.style.display = "none";
});

let expandImg = function (id) {
  const img = document.getElementById(id);
  modal.style.display = "block";
  modalImg.src = img.src;
  captionText.innerHTML = img.alt;
};
