const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 or process.env.PORT if available

// Set static folder for serving HTML, CSS, images, etc.
app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'Home_page.html'));
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
