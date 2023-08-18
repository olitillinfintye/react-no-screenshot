const express = require('express');
const apiRouter = require('./routes/api');

const app = express();

app.use('/api', apiRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});