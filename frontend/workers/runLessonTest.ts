import { loadPyodide } from 'pyodide';

const onMessage = async (event: MessageEvent) => {
  console.log('🐝 Worker: Message received from main script');
  const data = event.data;
  console.log(data);

  // Running this to grab our exception more easily
  // Load Pyodide using the Web Worker bundle
  const pyodide = await loadPyodide({ indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.23.2/full/' });

  // Import the regex package
  await pyodide.loadPackage('regex');

  pyodide.runPython(`
import traceback, sys
def reformat_exception():
    from traceback import format_exception
    # Format a modified exception here
    # this just prints it normally but you could for instance filter some frames
    traceback_message = traceback.format_exception(sys.last_type, sys.last_value, sys.last_traceback)

    return str(traceback_message[-1]).strip()
`);

  let reformat_exception = pyodide.globals.get("reformat_exception");
  
  try {
    // Add a custom function to Pyodide
    const executedPython = await pyodide.runPython(data);

    console.log('🐝 Worker: Posting message back to main script. Data: ', executedPython);
    postMessage(executedPython);
  } catch (error: any) {

    error.message = reformat_exception()

    console.error('🐝 Worker: Error executing Python code:', error.message);
    postMessage({ error: error.message });
  }
};

addEventListener('message', onMessage);