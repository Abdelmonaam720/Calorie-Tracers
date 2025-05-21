import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Modal from 'react-modal';
import BaseComponent from './assets/BaseComponent';


Modal.setAppElement('#root');
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BaseComponent />
  </StrictMode>
)