require('dotenv').config();

const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/bios/:username', async (req, res) => {
  const { username } = req.params;
  const url = `${process.env.USER_API_URL}${username}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: 'User not found' });
  }
});

app.get('/api/jobs/:jobId', async (req, res) => {
  const { jobId } = req.params;
  const url = `${process.env.JOB_API_URL}${jobId}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    res.status(error.response.status).json({ error: 'Job not found' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
