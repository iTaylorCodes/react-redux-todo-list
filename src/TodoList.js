import { useSelector, useDispatch } from "react-redux";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

const TodoList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((st) => st.todos);

  const handleCreate = (task) => {
    dispatch({
      type: "ADD_TODO",
      task,
    });
  };

  const handleUpdate = (id, updatedTask) => {
    dispatch({
      type: "UPDATE_TODO",
      id,
      updatedTask,
    });
  };

  const handleDelete = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const todoComps = todos.map((t) => (
    <Todo
      deleteTodo={handleDelete}
      id={t.id}
      key={t.id}
      task={t.task}
      updateTodo={handleUpdate}
    />
  ));

  return (
    <div>
      <NewTodoForm createTodo={handleCreate} />
      <ul>{todoComps}</ul>
    </div>
  );
};

export default TodoList;
