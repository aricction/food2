const express = require('express');
const app = express();
const connectDB = require('./config/db');

connectDB();

app.use(express.json({ extended: false}));

app.get('/', (req, res) => res.send("welcome to express server"))

app.use('/api/users', require('./Routes/users'));
app.use('/api/auth', require('./Routes/auth'));
app.use('/api/employee', require('./Routes/employee'));
app.use('/api/ShipAdd' , require('./Routes/ShipAdd'));
app.use('/api/feedback', require('./Routes/feedback'));


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('server running...'))