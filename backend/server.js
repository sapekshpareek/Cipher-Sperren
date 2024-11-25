require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Helper function to run Python scripts
const runPythonScript = (scriptPath, args = []) => {
  return new Promise((resolve, reject) => {
    // Use absolute path and specify python version explicitly
    const pythonPath = process.platform === 'win32' ? 'python' : 'python3';
    const absolutePath = require('path').resolve(scriptPath);
    
    console.log(`Executing Python script: ${absolutePath} with args:`, args);
    
    const pythonProcess = spawn(pythonPath, [absolutePath, ...args]);
    let output = '';
    let errorOutput = '';

    // Set process timeout
    const timeout = setTimeout(() => {
      pythonProcess.kill();
      reject(new Error('Python script execution timed out'));
    }, 10000);

    pythonProcess.stdout.on('data', (data) => {
      console.log('Python stdout:', data.toString());
      output += data.toString();
    });

    pythonProcess.stderr.on('data', (data) => {
      console.error('Python stderr:', data.toString());
      errorOutput += data.toString();
    });

    pythonProcess.on('error', (error) => {
      clearTimeout(timeout);
      console.error('Failed to start Python process:', error);
      reject(error);
    });

    pythonProcess.on('close', (code) => {
      clearTimeout(timeout);
      console.log(`Python process exited with code ${code}`);
      if (code === 0) {
        resolve(output.trim());
      } else {
        reject(new Error(errorOutput.trim() || `Script exited with code ${code}`));
      }
    });
  });
};

// Encryption and Decryption route
app.post('/api/encrypt', async (req, res) => {
  const { message, key, mode } = req.body;

  if (!message || !key || !mode) {
    return res.status(400).json({ success: false, error: 'Missing required fields' });
  }

  try {
    console.log('Received request:', { mode, message, key });
    
    const scriptPath = mode === 'encrypt' 
      ? './scripts/encode.py' 
      : './scripts/decode.py';
    
    console.log('Using script:', scriptPath);
    
    // Sanitize inputs
    const sanitizedMessage = message.trim();
    const sanitizedKey = key.trim();
    
    const result = await runPythonScript(scriptPath, [sanitizedMessage, sanitizedKey]);
    
    console.log('Script result:', result);

    return res.json({
      success: true,
      result,
    });
  } catch (error) {
    console.error('Python Script Error:', error);
    return res.status(500).json({
      success: false,
      error: `Failed to process the script: ${error.message || error}`,
    });
  }
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
