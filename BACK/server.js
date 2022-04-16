const mongoose = require("mongoose");
const app = require("./app");


const DB =
  "mongodb+srv://cruxman:.HZ$v$Gwkn*wi4K@cluster0.kt7pj.mongodb.net/students-db-example?retryWrites=true&w=majority";
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("Prisijungta prie DB...:)");
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
