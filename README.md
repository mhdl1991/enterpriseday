# Enterprise Day React Demo using Vite

To start open a codespace and call the following commands

cd my-react-app

npm install

npm run dev


## From a blank repository

If you were to build your app from scratch

Calling the command 

npm create vite@latest my-react-app --template react

chose react and javascript (not [swc](https://swc.rs/))


call the following two commands in terminal

cd my-react-app
npm install

Then change vite.config.js to

```
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port:3000,
    host: '0.0.0.0'
  } 
})
```

now you can call

npm run dev
