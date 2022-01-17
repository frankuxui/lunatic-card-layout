import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*, ::after, ::before {
  box-sizing: border-box;
}

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
article,aside,details,figcaption,figure,
footer,header,hgroup,menu,nav,section { 
    display:block;
}

body{
  font-size: 1rem;
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  -webkit-text-size-adjust: 100%;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.color};
}

h1 { font-size: 4rem; font-weight: 900;    }
h2 { font-size: 3rem ; font-weight: 900;   }
h3 { font-size: 2.5rem; font-weight: 700;  }
h4 { font-size: 2rem; font-weight: 700;    }
h5 { font-size: 1.3rem ; font-weight: 500; }
h6 { font-size: 1rem; font-weight: 500;    }

h1, h2, h3, h4, h5, h6{
  color: ${(props) => props.theme.color}
}

b{
  font-weight: bold;
}

a{
  color: ${(props) => props.theme.linkColor};
  text-decoration: none;
  transition: all .2s ease-in-out;
  &:hover{
    color: ${(props) => props.theme.linkColorHover};
  }
}

button{
  display: inline-block;
  text-align: center;
  text-decoration: none;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

.row{
  display: -ms-flexbox;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}

.twemoji{
  display: inline-block;
  width: auto;
  height: 1.3em;
  vertical-align: -20%;
  margin-right: 0.075em;
  margin-left: 0.075em;
}
`;
