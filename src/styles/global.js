import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    font-family: 'Lato', sans-serif;
  }

  body{
    color: #fff;
    font-family: 'Lato', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #6624fb;
    overflow-x: hidden;
  }

  html, body, #root {
    height: 100%;
    width: 100vw;
  }

  button {
    cursor: pointer;

  }
`;
