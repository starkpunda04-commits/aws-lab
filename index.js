import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head><title>My App</title></head>
      <body>
        <h1>Hello from Node.js 🚀</h1>
      </body>
    </html>
  `);
});

app.listen(4000, () => console.log("Server running"));
