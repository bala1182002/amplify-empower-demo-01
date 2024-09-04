
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider,createTheme } from "@aws-amplify/ui-react";
import { Amplify } from 'aws-amplify';
import awsconfig from './aws-exports.js';

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
Amplify.configure(awsconfig);

const updatedTheme = createTheme({
  // Extend the theme to update the button color
  name: "my-theme-updates", 
  tokens: {
      components: {
          button: {
              primary: {
                  backgroundColor: {
                      value: "#b71"
                  },
              },
          },
      },
  },
}, studioTheme)


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <ThemeProvider theme={updatedTheme}>
//         <App />
//     </ThemeProvider>
// );

createRoot(document.getElementById('root')).render
(
<ThemeProvider theme={updatedTheme}>
  <App />
</ThemeProvider>

);
