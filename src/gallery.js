import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm"
import "simplelightbox/dist/simple-lightbox.min.css";

const images = [
{
preview:
'./images/preview-object-1.jpg',
original:
'./images/original-object-1.jpg',
description: 'Object-1',
},
{
preview:
'./images/preview-object-2.jpg',
original:
'./images/original-object-2.jpg',
description: 'Object-2',
},
{
preview:
'./images/preview-object-3.jpg',
original:
'./images/original-object-3.jpg',
description: 'Object-3',
},
{
preview:
'./images/preview-object-4.jpg',
original:
'./images/original-object-4.jpg',
description: 'Object-4',
},
{
preview:
'./images/preview-object-5.jpg',
original:
'./images/original-object-5.jpg',
description: 'Object-5',
},
{
preview:
'./images/preview-object-6.jpg',
original:
'./images/original-object-6.jpg',
description: 'Object-6',
},
{
preview:
'./images/preview-object-7.jpg',
original:
'./images/original-object-7.jpg',
description: 'Object-7',
},
{
preview:
'./images/preview-object-8.jpg',
original:
'./images/original-object-8.jpg',
description: 'Object-8',
},
{
preview:
'./images/preview-object-9.jpg',
original:
'./images/original-object-9.jpg',
description: 'Object-9',
},
];

const list =document.querySelector("ul.gallery")
const markupGallery = images
.map((image) => `<li class="gallery-item">
<a class="gallery-link" href="${image.original}">
<img 
class="gallery-image"
src="${image.preview}"
alt="${image.description}"> 
</a>
</li>`) 
.join(""); 
list.insertAdjacentHTML("beforeend", markupGallery);

const lightbox = new SimpleLightbox('.gallery a', {
captionsData: 'alt',
captionDelay: 250,
});