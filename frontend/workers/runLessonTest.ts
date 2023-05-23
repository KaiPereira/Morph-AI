import { loadPyodide } from 'pyodide';

const onMessage = async (event: MessageEvent) => {
  console.log('🐝 Worker: Message received from main script');
  const data = event.data;
  console.log(data)
  
  // Load Pyodide using the Web Worker bundle
  const pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.2/full/' });

  // Add a custom function to Pyodide
  const executedPython = await pyodide.runPython(data)

  console.log('🐝 Worker: Posting message back to main script. Data: ', executedPython);
  postMessage(executedPython);
};

addEventListener('message', onMessage);