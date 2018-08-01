// Función tomar foto 
function takePhotoVisit() {

  var video = document.querySelector('#v');
  var canvas = document.querySelector('#c');
  var btnPhoto = document.querySelector('#t');
  var img = document.querySelector('#img');

  navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
  if (navigator.getUserMedia) {
    navigator.getUserMedia({
      video: true
    }, function (stream) {
      video.src = window.URL.createObjectURL(stream);
      video.play();
    }, function (e) {
      console.log(e);
    })
  } else alert('Navegador obsoleto');

  let imgData = "";

  video.addEventListener('loadedmetadata', function () {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
  }, false);
  btnPhoto.addEventListener('click', function () {
    canvas.getContext('2d').drawImage(video, 0, 0);
    imgData = canvas.toDataURL('image/png');
    img.setAttribute('src', imgData);
  })

}




//funciones para activar / desactivar los divs
btnIntro = () => {
  intro.style.display = "block"
  register.style.display = "none";
  register2.style.display = "none";
  takePhoto.style.display = "none";
  virtualCredential.style.display = "none";
  dashboardAdmin.style.display = "none";
}

btnRegister = () => {
  intro.style.display = "none"
  register.style.display = "block";
  register2.style.display = "none";
  takePhoto.style.display = "none";
  virtualCredential.style.display = "none";
  dashboardAdmin.style.display = "none";
}

btnAdmin = () => {
  intro.style.display = "none"
  register.style.display = "none";
  register2.style.display = "none";
  takePhoto.style.display = "none";
  virtualCredential.style.display = "none";
  dashboardAdmin.style.display = "block";
}

nextRegister = () => {
  intro.style.display = "none"
  register.style.display = "none";
  register2.style.display = "block";
  takePhoto.style.display = "none";
  virtualCredential.style.display = "none";
  dashboardAdmin.style.display = "none";
}

createVisitorRecord = () => {
  intro.style.display = "none"
  register.style.display = "none";
  register2.style.display = "none";
  takePhoto.style.display = "block";
  virtualCredential.style.display = "none";
  dashboardAdmin.style.display = "none";
}

savePhoto = () => {
  intro.style.display = "none"
  register.style.display = "none";
  register2.style.display = "none";
  takePhoto.style.display = "none";
  virtualCredential.style.display = "block";
  dashboardAdmin.style.display = "none";
}

registerOk = () => {
  intro.style.display = "none"
  register.style.display = "block";
  register2.style.display = "none";
  takePhoto.style.display = "none";
  virtualCredential.style.display = "none";
  dashboardAdmin.style.display = "none";
}