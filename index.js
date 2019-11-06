require("dotenv").config();
const server = require("./server");
// eslint-disable-next-line no-undef
const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});
