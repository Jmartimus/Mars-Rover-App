import { atom } from 'recoil';

export const photoDateState = atom({
  key: 'userInfoState',
  default: {
    year: '',
    month: '',
    day: ''
  },
});

export const photo = atom({
  key: 'photo',
  default: {
    picArray: []
  }
});

export const loading = atom({
  key: 'loading',
  default: {
    loading: false
  }
})