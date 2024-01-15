express = require("express");
data = require("./data.js");
app = express();
const PORT = 8000;

app.get("/api/products", (request, response) => {
  return response.json({ msg : data });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
