// Variable Declaration
let imgContainer = document.getElementById("img-container");
let loader = document.getElementById("loader");
let photosArray = [];

// Api Variable Declaration
const count = 30;
const apiKey = "uDesHYtQkm8W4NcfVX8fWVgrCfnc8amruIHNx_U5yOk";
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos
const getPhotos = async () => {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhoto();
  } catch (error) {
    console.log(error);
  }
};

const setAttributes = (item, attribute) => {
  for (let key in attribute) {
    item.setAttribute(key, attribute[key]);
  }
};
const displayPhoto = () => {
  photosArray.forEach((photo) => {
    const anchor = document.createElement("a");
    const img = document.createElement("img");
    setAttributes(anchor, {
      href: photo.links.html,
      target: "_blank",
    });
    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
    });
    anchor.appendChild(img)
    imgContainer.appendChild(anchor)
  });
};

getPhotos()
