const express = require('express');
const connectDB = require('./config/db');
const apiroutes = require('./routers/api');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/v1', apiroutes);
async function startServer() {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}
startServer();