import "dotenv/config";
import app from "./app";

// SERVER INSTANCE
const port = process.env.APP_PORT || 5000;

const start = async () => {
  try {
    await function () {};
    app.listen(port, () => {
      console.log("Server started at " + port + " and connected to DB !!");
    });
  } catch (error) {
    console.log(error);
  }
};
start();
