console.log("java is up");

// server.js
const express = require('express');
const app = express();

// method_override
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Set up view engine (EJS)
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


// Define routes
const skillsRouter = require('./routes/skills');
app.use('/skills', skillsRouter);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use(express.static(__dirname));