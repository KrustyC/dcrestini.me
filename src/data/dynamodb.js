const TableName = process.env.TABLE_NAME;

const getDynamoDBClient = () => {
  // important to require the sdk here rather than a top level import
  // this is to prevent the app from requiring the aws-sdk client side.
  const AWS = require("aws-sdk");

  const options = {
    convertEmptyValues: true,
    region: "us-east-1",
  };

  const client = process.env.LOCAL_DYNAMO_DB_ENDPOINT
    ? new AWS.DynamoDB.DocumentClient({
        ...options,
        endpoint: process.env.LOCAL_DYNAMO_DB_ENDPOINT,
      })
    : new AWS.DynamoDB.DocumentClient(options);

  return client;
};

export async function readTodos() {
  const { Items } = await getDynamoDBClient()
    .scan({
      TableName,
    })
    .promise();

  return Items;
}

export async function getTodo() {
  const { Items } = await getDynamoDBClient()
    .scan({
      TableName,
    })
    .promise();

  const todo = Items.find((todo) => todo.todoId == todoId);

  return todo;
}

export async function createTodo(todoDescription) {
  await getDynamoDBClient()
    .put({
      TableName,
      Item: {
        id: Date.now().toString(),
        todoDescription,
      },
    })
    .promise();
}
