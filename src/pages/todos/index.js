import { Fragment } from "react";
import Link from "next/link";
import * as data from "../../data";

export default function TodosPage({ todos }) {
  return (
    <Fragment>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.todoId}>
              <Link
                href="/todos/details/[id]"
                as={`/todos/details/${todo.todoId}`}
              >
                <a>{todo.todoDescription}</a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div>
        <Link href={"/todos/new"}>
          <a>New Todo</a>
        </Link>
      </div>
    </Fragment>
  );
}

export async function getServerSideProps({ req }) {
  let todos = [];

  if (req) {
    todos = await data.readTodos();
  } else {
    // we are client side
    // fetch via api
    const response = await fetch("/api/todos");
    todos = await response.json();
  }

  return {
    props: {
      todos,
    },
  };
}
