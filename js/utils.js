import {
  POST_COUNT,
  COMMENTS_MIN_COUNT,
  COMMENTS_MAX_COUNT,
  LIKES_MIN_COUNT,
  LIKES_MAX_COUNT,
  NAMES,
  COMMENTS,
  DESCRIPTIONS
} from './setup.js';

const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const createPhotoUrl = () => `photos/${getRandomInteger(1, 25)}.jpg`;

const createAvatarUrl = () => `img/avatar-${getRandomInteger(1, 25)}.svg`;

const getComment = () => ({
  id: getRandomInteger(1, 99999999),
  avatar: createAvatarUrl(),
  message: COMMENTS[getRandomInteger(0, COMMENTS.length - 1)],
  name: NAMES[getRandomInteger(0, NAMES.length - 1)]
});

const getCommentsList = () => Array.from({length: getRandomInteger(0, COMMENTS_COUNT)}, getComment);

const getUserPost = () => ({
  id: getRandomInteger(1, 25),
  url: createPhotoUrl(),
  description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
  likes: getRandomInteger(LIKES_MIN_COUNT, LIKES_MAX_COUNT),
  comments: getCommentsList()
});

const generateUsersDescriptions = () => Array.from({length: getRandomInteger(0, POST_COUNT)}, getUserPost);

generateUsersDescriptions();
