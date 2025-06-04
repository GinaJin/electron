import { WindowContextProvider, menuItems } from '@/lib/window'
import '@/lib/window/window.css'
import appIcon from '@/resources/build/icon.png'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import routers from './routers'

ReactDOM.createRoot(document.getElementById('app') as HTMLElement).render(
  <React.StrictMode>
    <WindowContextProvider titlebar={{ title: 'Electron React App', icon: appIcon, menuItems }}>
      <RouterProvider router={routers}></RouterProvider>
    </WindowContextProvider>
  </React.StrictMode>
)
