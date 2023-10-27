import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { todoListState } from "../../store/Todo/atom";
import { todoListLastNum, todoListStatsState } from "../../store/Todo/selector";
import { useState } from "react";

function TodoList() {
  const [title, setTitle] = useState('');
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const todoNum = useRecoilValue(todoListStatsState)
  const lastId = useRecoilValue(todoListLastNum)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: lastId + 1,
        content: title,
        isComplete: false,
      },
    ]);
    setTitle('');
  };

  return (
    <TodoListWrapper>
      <h1>簡易Todo</h1>
      <p>件数:{todoNum}</p>

      <input type="text" value={title} onChange={handleChange} />
      <button onClick={addItem}>Add</button>
      <ul>
        {
          todoList.map(t => {
            return <TodoItem key={t.id}>{t.content}</TodoItem>
          })
        }
      </ul>
    </TodoListWrapper>
  )
}

const TodoListWrapper = styled.div`
  display: block;
  flex-direction: column;
  padding: 16px;
`

const TodoItem = styled.li`
  color: red;
  width: fit-content;
`

export default TodoList