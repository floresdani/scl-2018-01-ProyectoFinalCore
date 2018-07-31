// Función tomar foto 
 window.addEventListener('load', init);
  function init() {
    var video = document.querySelector('#v');
    var canvas = document.querySelector('#c');
    var btnPhoto = document.querySelector('#t');
   var img = document.querySelector('#img');

   navigator.getUserMedia = (navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia);
   if(navigator.getUserMedia) {
     navigator.getUserMedia({video:true}, function(stream){
       video.src = window.URL.createObjectURL(stream);
       video.play();
     }, function(e){console.log(e);})
   }
   else alert('Navegador obsoleto');

   video.addEventListener('loadedmetadata', function(){canvas.width = video.videoWidth; canvas.height = video.videoHeight;}, false);
   btnPhoto.addEventListener('click', function(){
     canvas.getContext('2d').drawImage(video,0,0);
     var imgData = canvas.toDataURL('image/png');
     img.setAttribute('src', imgData);
   })
  }
