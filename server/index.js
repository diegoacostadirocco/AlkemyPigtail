const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./routes/operation');
// const { port, dbUrl } = require('./config');
// const operationRoutes = require('./routes/operation');

const app = express();

app.use(express.json({ limit: "20mb", extended: true }));
app.use(express.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
app.use('/operations', router)


const PORT = process.env.PORT || 5000;
CONNECTION_URL = 'mongodb+srv://alkemyApp:alkemy123@cluster0.au2vs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => app.listen(PORT, () => console.log(`server running in port ${PORT}`)))
    .catch((err) => console.log(err.message))