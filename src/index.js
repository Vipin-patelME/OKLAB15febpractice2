import React from 'react';
import ReactDOM from 'react-dom/client'
import { ComponentA } from './components/ComponentA';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <ComponentA name="Vipin">I have to go from A to Z</ComponentA>
    </div>
  </React.StrictMode>
);

