import { galleryItems } from "./gallery-items.js";
// Change code below this line
const galleryRef = document.querySelector(".gallery");
// разметка
const markup = (image) => {
  const { preview, original, description } = image;
  return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
};
// создание строки из масива
const makePicCards = galleryItems.map(markup).join("");
// рендеринг картинок
galleryRef.insertAdjacentHTML("beforeend", makePicCards);
// событие при клике на картинку, делегирование
galleryRef.addEventListener("click", onGalleryImgClick);
// функция по клику
function onGalleryImgClick(event) {
  // чтобы не скачивались картинки при клике
  event.preventDefault();
  // отсекаем не нужные клики по другим тегам
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // получаем ссылку на большую картинку по дата атрибуту
  const imageAttributeRef = event.target.dataset.source;
  // lightbox
  const instance = basicLightbox.create(`
    <img src=${imageAttributeRef} width="800" height="600">
`);
  instance.show();
  // закрытие модалки на esc
  document.addEventListener("keydown", (event) => {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  });
}

// ==================================================================================
// const galleryItemsContainer = document.querySelector(".gallery");
// const galleryItemsMarkUp = createGalleryItems(galleryItems);
// galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkUp);
// // Створення розмітки
// function createGalleryItems(galleryItems) {
//   return galleryItems
//     .map(({ preview, original, description }) => {
//       return `<div class="gallery__item">
//     <a class="gallery__link" href="${original}">
//     <img
//       class="gallery__image"
//       src="${preview}"
//       data-source="${original}"
//       alt="${description}"
//     />
//   </a>
// </div>`;
//     })
//     .join("");
// }
// // рендеримо на сторінку
// galleryItemsContainer.insertAdjacentHTML("beforeend", galleryItemsMarkUp);
// const galleryItemElClick = (event) => {
//   event.preventDefault();
//   if (event.target.nodeName !== "IMG") {
//     return;
//   }
//   const imageAttribute = event.target.dataset.source;
//   // lightbox
//   const instance = basicLightbox.create(`
//     <img src=${imageAttribute} width="800" height="600">
// `);
//   instance.show();
//   // закриття модалки клавішою escape
//   document.addEventListener("keydown", (event) => {
//     if (event.code !== "Escape") {
//       return;
//     }
//     instance.close();
//   });
// };
// galleryItemsContainer.addEventListener("click", galleryItemElClick);
