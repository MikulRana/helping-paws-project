import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log('Starting app...');

const rootElement = document.getElementById("root");
if (rootElement) {
  console.log('Root element found, rendering app...');
  const root = createRoot(rootElement);
  root.render(<App />);
  
  // Update debug element
  const debugElement = document.getElementById("debug");
  if (debugElement) {
    debugElement.innerHTML = "App rendered successfully!";
    debugElement.style.background = "green";
  }
} else {
  console.error('Root element not found!');
  const debugElement = document.getElementById("debug");
  if (debugElement) {
    debugElement.innerHTML = "ERROR: Root element not found!";
    debugElement.style.background = "red";
  }
}
