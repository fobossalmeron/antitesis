import React from "react";
import Theme from "./theme";

let theStyles = `
  #revealer{
    position:absolute;
    z-index: 99;
    left:0;
    right:0;
    bottom:0;
    top:0;
    background-color: black;
    transition: all .4s ease-in;
  }
  #outsideLoader {
    width: 100px;
    position: absolute;
    top: calc(50% - 50px);
    left: calc(50% - 50px);
    fill: white;
    z-index: 100;
    transform: rotate(-180deg);
    transform-origin: 50% 50%;
    animation: rotate 1.2s ease-in-out infinite;
    transition: opacity .3s ease; 
  }

  @keyframes rotate {
    to {
      transform: rotate(0);
    }
  }

  @font-face {
    font-family: \'DrunkWide\';
    src: url('../static/assets/font/DrukWide.woff2') format('woff2'),
      url('../static/assets/font/DrukWide.woff') format('woff');
  }

  html {
    font-size: 16px;
    height: 100vh;
    box-sizing: border-box;
    // cursor: url(/static/assets/img/cursor.svg) 0 0, auto; /* Legacy */
    // cursor: url(/static/assets/img/cursor.svg) 0 0, auto; /* FF */
    // cursor: -webkit-image-set(url(/static/assets/img/cursor.svg) 1x, url(/static/assets/img/cursorbig.svg) 2x) 0 0, auto; /* Webkit */
  }

  @media screen and (max-width: 1330px) {
    html{font-size:14px};
  }
  @media screen and (max-width: 1000px) {
    html{font-size:12px};
  }
  @media screen and (max-width: 700px) {
    html{font-size:10px};
  }

  *,
  *:before,
  *:after {
      box-sizing: inherit;
  }

  body {
      margin: 0;
      padding: 0;
      color: ${Theme.colors.foreground};
      font-size: inherit;
      background-color: ${Theme.colors.background};
      font-family: "DrunkWide", sans-serf;
      min-height: 100vh;
      height:100%;
      width: 100%;
      overflow-x:hidden;
  }

  #__next {
      height: 100%;
      width: 100%;
    }
  main {
    z-index:0;
  }

  h1 {
    margin:0;
  }

  h2 {
    margin:15% 0 0 0;
    overflow:hidden;
  }

  h2 + h2 {
    margin-top: 1.2%;
  }
    
  h3 {
    font-family: 'Courier New', Courier, monospace;
    font-weight: 100;
    font-size: 3.2rem;
    margin-top: 20px;
    overflow:hidden;
  }

  p {
    font-family: 'Courier New', Courier, monospace;
    letter-spacing: 1px;
    font-size: 1.32rem;
    hyphens: auto;
  }

  h4 {
    font-size: 1.32rem;
    letter-spacing: 1px;
    overflow:hidden;
  }

  /* normalize */
  figure{margin:0;}a{background-color:transparent}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}  

`;

function createMarkup() { return {__html: theStyles}; };
export default () => (
  <style dangerouslySetInnerHTML={createMarkup()}/>
);
