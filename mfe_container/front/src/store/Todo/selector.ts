import { selector } from 'recoil';
import { todoListState } from './atom';

export const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoListState);
    const totalNum = todoList.length;
    return totalNum;
  },
});

export const todoListLastNum = selector({
  key: 'todoListLastNum',
  get: ({ get }) => {
    const todoList = get(todoListState);
    let lastId = 0
    todoList.flatMap(t => {
      if (t.id > lastId) lastId = t.id
    })
    return lastId;
  },
});