import { createRoot } from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
// import { LazyAbout } from './pages/about/About.lazy';
// import { Shop } from './pages/shop';
// import { Suspense } from 'react';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element not found');
}

createRoot(root).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
