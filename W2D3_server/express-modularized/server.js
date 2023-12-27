const express = require("express");
const app = express();
const PORT = 8000;

// === MIDDLEWARE ===
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
require("./routes/routes")(app);
// this needs to be below the other code blocks
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT} 🚀🚀🚀`));
