import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.jsx'
import { ThemeContext } from "../src/providers/index.jsx"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeContext>
        <App />
      </ThemeContext>
    </QueryClientProvider>
  </React.StrictMode>,
)
