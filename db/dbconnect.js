import pg from "pg";
import "dotenv/config";

const {
  DB_USERNAME: user,
  DB_PASSWORD: password,
  DB_DATABASE: database,
  DB_HOST: host,
  DB_PORT: port,
} = process.env;

const client = new pg.Client({
  user,
  host,
  database,
  password,
  port,
});
client.connect();

export default client;
