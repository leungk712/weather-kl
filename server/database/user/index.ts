import { db } from "../index";

const getAllUsers = () => {
  return new Promise((resolve, reject) => {
    db.aggregate("SELECT * FROM users", (err: any, rows: any) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
};

module.exports = {
  getAllUsers,
};
