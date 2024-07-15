const imageContainer = document.querySelector(".js-image-container");
const search = document.querySelector(".js-search input");
const images = [
  "window.jpg",
  "ball.jpg",
  "hoodie.jpg",
  "shirt.jpg",
  "cat2.avif",
  "cat.jpg",
  "dog.jpg",
  "car.avif",
  "house.avif",
];

const generateHTML = function () {
  let html = "";
  images.forEach((img) => {
    html = `<div><img src="images/${img}" alt="" /></div>`;
    imageContainer.innerHTML += html;
  });
};
generateHTML();

const filterImages = function (term) {
  //   alert(term);
  images
    .filter((image, index) => {
      return image[index].includes(term);
    })
    .forEach((res) => {
      console.log(res);
    });
};

search.addEventListener("keyup", () => {
  const term = search.value.trim;
  filterImages(term);
});
