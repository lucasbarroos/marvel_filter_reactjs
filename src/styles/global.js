import { createGlobalStyle } from 'styled-components';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato&display=swap');

  *{
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Lato', sans-serif;
    background-color: #6624fb;
  }

  body{
    background-color: ${(props) => props.theme.colors.background};
    color: #fff;
    font-family: 'Lato', sans-serif;
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;

  }

  .MuiExpansionPanelSummary-content {
    margin: 0 !important;
  }
`;
