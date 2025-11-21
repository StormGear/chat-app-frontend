import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { AuthProvider } from './contexts/AuthContext.tsx'
import { MessagingProvider } from './contexts/MessagingContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <MessagingProvider>
         <App />
     </MessagingProvider>
    </AuthProvider>
  </StrictMode>,
)
