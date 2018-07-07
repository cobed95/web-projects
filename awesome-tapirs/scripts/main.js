var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/tapir-looking-drowsy.jpeg') {
        myImgae.setAttribute('src', 'images/tapir-with-open-mouth.jpg');
    } else {
        myImage.setAttribute('src', 'images/tapir-looking-drowsy.jpeg');
    }
}
