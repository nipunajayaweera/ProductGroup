import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { theme } from './commons/style/theme';
import { ThemeProvider } from 'styled-components';
import { ProductsProvider } from './contexts/product-context/ProductsContextProvider';
import {CartProvider} from './contexts/cart-context/CartContextProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ProductsProvider>
        <CartProvider>
          <App />  
        </CartProvider>
      </ProductsProvider>

    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
