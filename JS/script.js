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

function changeText(type) {
  let texto = "video";
  switch (type) {
    case "title1":
      (title1.innerText = "Pyro Lancer from Liyue"),
        (desc1.innerText =
          "Concept inspired on the game «Genshin Impact», she comes from the region named Liyue inspired by chinese culture. This character posses «Pyro vision» representing the hability of using fire on their attacks. Pyro characters are passionate and very intense with their ambitions.");
      break;
    case "title2":
      (title1.innerText = "The red warrior"),
        (desc1.innerText =
          "Character based on japanese folklore, «onis» are creatures that share lots of similitudes with demons and ogres. \n\n There's a short story on japanese folklore that talks about a red oni and blue oni, the story tells red oni wanted to be friends with the humans but they were always afraid of him so the blue oni offered him his help, he would make trouble and the red oni was going to help the humans so he can gain their trust.");
      break;
    case "title3":
      (title1.innerText = "The black hole"),
        (desc1.innerText = 
          'Represents feeling pain and anger at the same time for everything she lived. She keeps resentment, also feels despised and wants revenge but at the same time she feels deeply sad and can not stop surffering.\n \n Tied to this feelings that consume herself.');
      break;
    case "title4":
      (title1.innerText = "It"),
        (desc1.innerText =
          'Represents the reification and dehumanization that sometimes we give to people, idealizing and creating nonexistent scenarios, that finally ends creating a fuzzy and choped image of the person.');
      break;
    case "anim1":
      (title2.innerText = "Unreal: introduction"),
        (desc2.innerText =
          'This animation belongs to the proyect previously mentioned «Unreal» as an introducting scene for the game. \n\n We can observe the protagonist scaping of "something", when he finally faces him reveals the form of "that thing", represented by something big, strong and with some features that look like a skeleton. He scapes and hides on the first place he founds but in that place he now faces our first alied that represents schizophrenia.');
      break;
    case "anim2":
      (title2.innerText = "Livin' Amazin'"),
        (desc2.innerText = 
          "This animation was a commission i did for a small music producer, he contacted me requesting an animation loop for a musical video he was going to post on youtube. \n \n The animation on pixel art style presents my client driving through the city at night on his car while smoking. \n \n  https://www.youtube.com/watch?v=I3aoPA97bLU");
      break;
    case "anim3":
      (title2.innerText = "Unreal: walking animation"),
        (desc2.innerText =
          "This animation belongs to the previously mentioned proyect «Unreal», used as walking animation loop when the character walks foward and backwards.");
      break;
    case "anim4":
      (title2.innerText = "Iddle animation"),
        (desc2.innerText =
          "This animation was a commission for a client that requested his character pixel style with a simple iddle and blinking animation.");
      break;
    case "anim5":
      (title2.innerText = "Walking fly"),
        (desc2.innerText =
          "This animation belongs to a personal proyect i started, where the protagonist is a fly bored of doing fly things so now he walks on two legs and does 'human things'.");
      break;
  }
}

function change(src, type) {
  if (type === "icon") document.getElementById("main-image").src = src;
  else if (type === "animacion")
    document.getElementById("main-video").src = src;
}
