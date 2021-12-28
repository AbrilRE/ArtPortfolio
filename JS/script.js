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
          "Concept inspired on the game «Genshin Impact», she comes from the region named Liyue, inspired by chinese culture. This character posses «Pyro vision», representing the hability of using fire on their attacks. Pyro characters are passionate and very intense with theirambitions.");
      break;
    case "title2":
      (title1.innerText = "The red warrior"),
        (desc1.innerText =
          "Character based on japanese folklore, «onis» are creatures that share lots of similitudes with demons and ogres. \n\n There's a short story on japanese folklore that talks about a red oni and blue oni, the story tells red oni wanted to be friends with the humans but they were always afraid of him so the blue oni offered him his help, he would make trouble and the red oni was going to help the humans, so he can gain their trust.");
      break;
    case "title3":
      (title1.innerText = "The black hole"),
        (desc1.innerText = 
          'Represents feeling pain and anger at the same time for everything she lived. She keeps resentment feeling despised and wanting revenge, at the same time she feels deeply sad and can not stop surfering.\n \n Tied to this feelings that consume herself.');
      break;
    case "title4":
      (title1.innerText = "It"),
        (desc1.innerText =
          'Represents the reification and dehumanization that sometimes we give to people, idealizing and creating nonexistent scenarios, that finally ends creating a fuzzy and choped image of the person.');
      break;
    case "anim1":
      (title2.innerText = "Unreal: introducción"),
        (desc2.innerText =
          'Esta animación pertenece al proyecto previamente mencionado «Unreal» como escena introductoria al juego. Podemos observar al protagonista escapando de "algo", al tenerlo cara a cara revela la forma de este "algo", representada por un ser grande, musculoso y con ciertas caracteristicas de una calaca. Logra ponerse de piel de nuevo y se encierra en el primer lugar que encuentra, para asi encontrarse con nuestro primer aliado que representa la esquizofrenia.');
      break;
    case "anim2":
      (title2.innerText = "Livin' Amazin'"),
        (desc2.innerText = 
          "Esta animación fue una comisión para un pequeño productor de musica, que me contacto para animar un loop para su video musical en youtube. \n \n La animación estilo pixel art presenta a mi cliente recorriendo una carretera cerca de la ciudad de noche, en un auto mientras fuma un cigarrillo.\n \n  https://www.youtube.com/watch?v=I3aoPA97bLU");
      break;
    case "anim3":
      (title2.innerText = "Unreal: animación caminar"),
        (desc2.innerText =
          "Esta animación pertenece al proyecto previamente mencionado «Unreal», utilizada como animación en loop cuando el personaje camina hacia enfrente y hacia atras.");
      break;
    case "anim4":
      (title2.innerText = "Animación iddle"),
        (desc2.innerText =
          "Esta animación fue una comisión para un cliente que requeria su personaje estilo pixel art con un movimiento simple y parpadeo en sus ojos.");
      break;
    case "anim5":
      (title2.innerText = "Mosca caminar"),
        (desc2.innerText =
          "Esta animación pertenece a un pequeño proyecto que comence a desarrollar, en el cual el protagonista era una mosca que habia perdido las ganas de seguir 'haciendo cosas de moscas', por lo cual ahora caminaba en dos patas y realizaba 'acciones de humanos'.");
      break;
  }
}

function change(src, type) {
  if (type === "icon") document.getElementById("main-image").src = src;
  else if (type === "animacion")
    document.getElementById("main-video").src = src;
}
