import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseUseStore } from "vuex";
import * as MutationTypes from "./mutationTypes.ts";

type TodoItem = {
  id: number;
  content: string;
  isComplete: boolean;
};

// stateの型定義
type State = {
  todoListState: TodoItem[];
};

// storeをprovide/injectするためのキー
export const key: InjectionKey<Store<State>> = Symbol();

// store本体
export const store = createStore<State>({
  state: {
    todoListState: [
      {
        id: 0,
        content: 'default - vue',
        isComplete: false,
      },
      {
        id: 0,
        content: 'default - vue2',
        isComplete: true,
      },
    ]
  },
  mutations: {
    [MutationTypes.ADD_TODO_ITEM](state, todoItem: TodoItem) {
      state.todoListState.push(todoItem);
    }
  }
});

// useStoreを使う時にキーの指定を省略するためのラッパー関数
export const useStore = () => {
  return baseUseStore(key);
}