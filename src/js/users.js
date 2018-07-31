function createVisitorRecord() {

    visitor = {
        visitName: "",
        email: "",
        companyToVisit: "",
        toVisit: ""
    }

    name = document.getElementById("name").value;
    email = document.getElementById("email").value;
    companyToVisit = document.getElementById("companyToVisit").value;
    toVisit = document.getElementById("toVisit").value;

    visitor.visitName = name;
    visitor.email = email;
    visitor.companyToVisit = companyToVisit;
    visitor.toVisit = toVisit;

    saveVisitor(visitor);

    return visitor;
    
}

function updateToVisitSelect(event) {
    let value = event.target.value;
    var innerHTML = "";

    for (let i = 0; i < espacioIf[value].length; i++) {

        innerHTML += `<option value="${espacioIf[value][i]}">${espacioIf[value][i]}</option>`
    }

    document.getElementById("toVisit").innerHTML = innerHTML;

}

/* (function () {

    var streaming = false,
        video = document.querySelector('#video'),
        canvas = document.querySelector('#canvas'),
        photo = document.querySelector('#photo'),
        startbutton = document.querySelector('#startbutton'),
        width = 320,
        height = 0;

    navigator.getMedia = (navigator.getUserMedia ||
        navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia ||
        navigator.msGetUserMedia);

    navigator.getMedia(
        {
            video: true,
            audio: false
        },
        function (stream) {
            if (navigator.mozGetUserMedia) {
                video.mozSrcObject = stream;
            } else {
                var vendorURL = window.URL || window.webkitURL;
                video.src = vendorHTMLMediaElement.srcObject(stream);
            }
            video.play();
        },
        function (err) {
            console.log("Ha ocurrido un error! " + err);
        }
    );

    video.addEventListener('canplay', function (ev) {
        if (!streaming) {
            height = video.videoHeight / (video.videoWidth / width);
            video.setAttribute('width', width);
            video.setAttribute('height', height);
            canvas.setAttribute('width', width);
            canvas.setAttribute('height', height);
            streaming = true;
        }
    }, false);

    function takepicture() {
        canvas.width = width;
        canvas.height = height;
        canvas.getContext('2d').drawImage(video, 0, 0, width, height);
        var data = canvas.toDataURL('image/png');
        photo.setAttribute('src', data);
    }

    startbutton.addEventListener('click', function (ev) {
        takepicture();
        ev.preventDefault();
    }, false);

})(); */