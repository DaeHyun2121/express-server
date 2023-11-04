const express = require("express");
const app = express();
const port = 8080;

const ADMIN = "/ADMIN";

const adminRouter = require("./router/adminRouter");

app.use(ADMIN, adminRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});