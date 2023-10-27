import { atom } from 'recoil';

export const todoListState = atom({
  key: 'todoListState',
  default: [
    {
      id: 0,
      content: 'default',
      isComplete: false,
    },
  ],
});