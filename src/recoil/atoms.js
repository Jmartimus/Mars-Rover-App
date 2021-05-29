import { atom } from 'recoil';

export const photoDateState = atom({
  key: 'photoDateState',
  default: {
    chosenDate: '',
  },
});

export const photo = atom({
  key: 'photo',
  default: {
    picArray: [],
  },
});

export const loading = atom({
  key: 'loading',
  default: {
    loading: false,
  },
});