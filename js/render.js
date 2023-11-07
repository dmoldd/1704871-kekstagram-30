import {createPosts} from './utils.js';

const pictureContainer = document.querySelector('.pictures');

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const postsCopy = createPosts().slice();

// const pictureThumbnails = createPosts();
const pictureThumbnails = postsCopy;

const pictureListFragment = document.createDocumentFragment();

pictureThumbnails.forEach(({url, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  pictureElement.querySelector('.picture__img').src = url;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.append(pictureElement);
});

pictureContainer.append(pictureListFragment);


export {pictureThumbnails, postsCopy};
