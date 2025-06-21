const images = [
    "assets/images/Dog1.JPEG",
    "assets/images/Dog2.JPEG",
    "assets/images/Dog3.JPEG",
    "assets/images/Dog4.JPEG",
    "assets/images/Dog5.JPEG",
    "assets/images/Dog6.JPEG",
    "assets/images/Dog7.JPEG",
    "assets/images/Dog8.JPEG",
    "assets/images/Dog9.JPEG",
    "assets/images/Cat1.JPEG",
    "assets/images/Cat2.JPEG",
    "assets/images/Cat3.JPEG",
    "assets/images/Cat4.JPEG",
    "assets/images/Cat5.JPEG",
    "assets/images/Cat6.JPEG",
    "assets/images/Cat7.JPEG",
    "assets/images/Cat8.JPEG",
    "assets/images/Cat10.JPEG",
    "assets/images/Cat11.JPEG" 
];

const imgElement = document.getElementById("animals");
const clickMe = document.getElementById("click-me");

clickMe.addEventListener("click", () => {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * images.length);
    } while (imgElement.src.includes(images[randomIndex]));
    imgElement.src = images[randomIndex];
});