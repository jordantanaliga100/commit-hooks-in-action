// IMPORTS
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";

// ENV CONFIG
const nodeEnv = process.env.NODE_ENV || "development";
const envFile = nodeEnv === "production" ? ".env.prod" : ".env.local";
dotenv.config({ path: envFile });
console.log(`✅ Loaded envFile`);
console.log("... on " + nodeEnv + " environment 🚀");

const app: Express = express();

// TOP MIDDLEWARES

app.use(express.json());
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.get("/", (req: Request, res: Response) => {
  // throw new Error("Testing gin index");
  res.send(`
    <code>
    Node_Express Server Alive 🛩️🛩️🛩️  
    </code>
    `);
});

app.use("/api/v1/auth", () => {});
app.use("/api/v1/products", () => {});
app.use("/api/v1/services", () => {});
app.use("/api/v1/contact", () => {});
app.use("/api/v1/users", () => {});

export default app;
