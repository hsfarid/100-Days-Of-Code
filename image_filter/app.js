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

// Modified generateHTML function to accept an argument for images to display
const generateHTML = function (imageList) {
  let html = "";
  imageList.forEach((img) => {
    html += `<div><img src="images/${img}" alt="" /></div>`;
  });
  imageContainer.innerHTML = html; // Clear and update the container's content
};

// Initial call to display all images
generateHTML(images);

const filterImages = function (term) {
  const filteredImages = images.filter(image => image.includes(term));
  generateHTML(filteredImages);
};

search.addEventListener("keyup", () => {
  const term = search.value.trim().toLowerCase(); // Ensure term is in lowercase for case-insensitive search
  filterImages(term);
});

