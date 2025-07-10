import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// * import slick carousel's css
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// * import AOS CSS
import "aos/dist/aos.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
