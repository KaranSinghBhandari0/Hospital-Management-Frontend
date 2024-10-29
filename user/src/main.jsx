import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { AppProvider } from './context/AppContext.jsx'
import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <AppProvider>
            <App />
            <ToastContainer autoClose={3500} position="top-right"/>
        </AppProvider>
    </BrowserRouter>
)
