import { createRoot } from 'react-dom/client';
// import { App } from "./App";
import { Root } from "./Root"
import './index.css'

const root = createRoot(document.querySelector("#root"))

// root.render(<App/>)

root.render(<Root/>)