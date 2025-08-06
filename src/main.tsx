import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting app...');

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  const debugElement = document.getElementById("debug");
  if (debugElement) {
    debugElement.innerHTML = `ERROR: ${event.error?.message || 'Unknown error'}`;
    debugElement.style.background = "red";
  }
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  const debugElement = document.getElementById("debug");
  if (debugElement) {
    debugElement.innerHTML = `PROMISE ERROR: ${event.reason?.message || 'Unknown error'}`;
    debugElement.style.background = "orange";
  }
});

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Root element found, rendering app...');
  try {
    const root = createRoot(rootElement);
    root.render(<App />);
    
    // Update debug element
    const debugElement = document.getElementById("debug");
    if (debugElement) {
      debugElement.innerHTML = "App rendered successfully!";
      debugElement.style.background = "green";
    }
  } catch (error) {
    console.error('Error rendering app:', error);
    const debugElement = document.getElementById("debug");
    if (debugElement) {
      debugElement.innerHTML = `RENDER ERROR: ${error?.message || 'Unknown error'}`;
      debugElement.style.background = "red";
    }
  }
} else {
  console.error('Root element not found!');
  const debugElement = document.getElementById("debug");
  if (debugElement) {
    debugElement.innerHTML = "ERROR: Root element not found!";
    debugElement.style.background = "red";
  }
}
