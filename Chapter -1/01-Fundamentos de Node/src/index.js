const { request, response } = require("express");
const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.use(express.json());

let customers = [];

//middleware
function VerifyAccountsExists(req, res, next) {
  const { cpf } = req.headers;

  var customer = customers.find((customer) => customer.cpf === cpf);

  console.log(customer);

  if (!customer) {
    return res.status(400).json({ error: "Customer not found!" });
  }

  request.customer = customer;

  return next();
}

function GetBalance(statemant) {
  const balance = statemant.reduce((acc, operation) => {
    if (operation.type === "credit") {
      return acc + operation.amount;
    } else {
      return acc - operation.amount;
    }
  }, 0);

  return balance;
}

app.post("/accounts", (req, res) => {
  const { cpf, name } = req.body;

  const customerAlredyExists = customers.some(
    (customer) => customer.cpf == cpf
  );

  if (customerAlredyExists) {
    return res.status(400).json({ error: "Custumer already exists" });
  }

  customers.push({
    cpf,
    name,
    id: uuidv4(),
    statement: [],
  });

  return res.status(201).send();
});

app.get("/statement", VerifyAccountsExists, (req, res) => {
  const { customer } = req;

  return res.json(customer.statement);
});

app.post("/deposit", VerifyAccountsExists, (req, res) => {
  const { amount, description } = req.body;
  const { customer } = req;

  let operation = {
    amount,
    description,
    createdAt: new Date(),
    type: "credit",
  };

  customer.statement.push(operation);

  return res.status(201).send();
});

app.post("/withdraw", VerifyAccountsExists, (req, res) => {
  const { amount } = req.body;
  const { customer } = req;

  const balance = GetBalance(customer.statement);

  if (balance < amount) {
    return res.status(400).json({ error: "insuficient founds!" });
  }

  let operation = {
    amount,
    description: "Withdraw",
    createdAt: new Date(),
    type: "debit",
  };

  customer.statement.push(operation);

  return res.status(201).send();
});

app.get("/statement/date", VerifyAccountsExists, (req, res) => {
  const { customer } = req;
  const { date } = req.query;

  const dateFormat = new Date(date + " 00:00");

  const statements = customer.statement.filter(
    (statement) =>
      statement.createdAt.toDateString() === new Date(dateFormat).toDateString()
  );

  return res.json(statements);
});

app.put("/account", VerifyAccountsExists, (req, res) => {
  const { customer } = req;
  const { name } = req.body;

  customer.name = name;

  return res.status(200).send();
});
app.get("/account", VerifyAccountsExists, (req, res) => {
  const { customer } = req;

  return res.json(customer);
});

app.delete("/account", VerifyAccountsExists, (req, res) => {
  const { customer } = req;

  customers.splice(customer, 1);

  return res.status(201).json(customers).send();
});

app.get("/balance", VerifyAccountsExists, (req, res) => {
  const { customer } = req;

  return res.status(200).json(GetBalance(customer.statement));
});

app.listen(3000);
