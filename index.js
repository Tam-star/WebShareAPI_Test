const shareButton = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const shareModal = document.querySelector(".share");
const textToSend = document.getElementById('mytext')

const title = window.document.title;
const url = window.document.location.href;

shareButton.addEventListener("click", () => {
  //check if the device has access to the webshare api
  if (navigator.share) {
    navigator
      .share({
        title: `${title}`,
        text : `${textToSend.textContent}`,
        url: `${url}`,
      })
      .then(() => {
        console.log("thanks for sharing");
      })
      .catch(console.error);
  } else {
      overlay.classList.add('show-share')
      shareModal.classList.add('show-share')
  }
});


overlay.addEventListener('click', () =>{
    overlay.classList.remove(('show-share'))
    shareModal.classList.remove(('show-share'))
})