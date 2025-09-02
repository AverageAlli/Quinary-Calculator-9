const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req: any, res: { send: (arg0: string) => void; }) => {
  res.send("Hello TypeScript Backend!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
