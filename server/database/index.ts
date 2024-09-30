import Database from "better-sqlite3";
import knex from "knex";
const config = require("./knexfile");

export const db = new Database("./data.db");

db.pragma("journal_mode = WAL");
