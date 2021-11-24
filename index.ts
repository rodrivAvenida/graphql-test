import express from "express";
import routes from './src/routes';
import db from "./src/db/db";
import cors from "cors"

const app = express();

app.use(cors())

app.get("/health", (_, res) => {
  return res.send('OK');
});

app.use("/graph/",[routes]);

(async () => {
  try {
    await db.connect.sync({ force: false });
    app.listen(3000, () => {
      console.log("Server on port 3000");
    });
  } catch (err) {
    console.log(err);
  }
})();
