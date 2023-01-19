const express = require("express");
const cors = require("cors");
const { json } = require("express");

const { v4: uuidv4, v4 } = require("uuid");

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

//Middlewares
function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;

  const user = users.find((user) => user.username === username);

  if (!user) {
    return response.status(404).json([{ error: "user not found!" }]);
  }

  request.user = user;

  return next();
}

function checksCreateTodosUserAvailability(request, response, next) {
  const user = request.user;

  if (!user.pro && user.todos.lenght > 10) {
    return response.status(403);
  }

  next();
}

function checksTodoExists(request, response, next) {
  const { id } = request.params;
  const { username } = request.headers;

  const uuidV4Regex =
    /^[A-F\d]{8}-[A-F\d]{4}-4[A-F\d]{3}-[89AB][A-F\d]{3}-[A-F\d]{12}$/i;
  // compared to:     /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-4{1}[a-fA-F0-9]{3}-[89abAB]{1}[a-fA-F0-9]{3}-[a-fA-F0-9]{12}$/

  if (!uuidV4Regex.test(id)) {
    return response.status(400);
  }

  const user = users.find((user) => user.username === username);

  if (!user) {
    return response.status(404);
  }

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404);
  }

  if (!user.id || !user.todos[0].id) {
    return response.status(404);
  }

  request.user = user;
  request.todo = todo;

  next();
}

function findUserById(request, response, next) {
  const { id } = request.params;

  const user = users.find((user) => user.id === id);

  if (!user) {
    return response.status(404);
  }

  request.user = user;

  next();
}

app.post("/users", (request, response) => {
  const { username, name } = request.body;

  const exists = users.some((user) => user.username === username);

  if (exists) {
    return response.status(400).json({ error: "user already exists!" });
  }

  const user = {
    id: v4(),
    name,
    username,
    todos: [],
  };

  users.push(user);

  return response.status(201).send(user);
});

app.get("/todos", checksExistsUserAccount, (request, response) => {
  return response.status(201).json(request.user.todos);
});

app.post("/todos", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { title, deadline } = request.body;

  const todo = {
    id: v4(),
    title,
    done: false,
    deadline,
    pro: false,
    created_at: new Date(),
  };

  user.todos.push(todo);

  return response.status(201).send(todo);
});

app.put("/todos/:id", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { deadline, title } = request.body;
  const { id } = request.params;

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: "todo not found!" });
  }

  todo.deadline = deadline;
  todo.title = title;

  return response.status(201).json(todo);
});

app.patch("/todos/:id/done", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  const todo = user.todos.find((todo) => todo.id === id);

  if (!todo) {
    return response.status(404).json({ error: "todo not found!" });
  }

  todo.done = true;

  // const todos = [...user.todos.filter((todo) => todo.id !== id)];
  //todos.push(todo);

  return response.status(200).send(todo);
});

app.delete("/todos/:id", checksExistsUserAccount, (request, response) => {
  const { user } = request;
  const { id } = request.params;

  console.log(id);

  const search = user.todos.findIndex((t) => t.id === id);

  if (search === -1) {
    return response.status(404).json({ error: "todo not found!" });
  }

  user.todos.splice(search, 1);

  return response.status(204).json();
});

//app.listen(3333);

module.exports = {
  app,
  users,
  checksExistsUserAccount,
  checksCreateTodosUserAvailability,
  checksTodoExists,
  findUserById,
};
