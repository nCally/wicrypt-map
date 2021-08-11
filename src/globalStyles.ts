import { createGlobalStyle } from 'styled-components';


const GlobalStyles = createGlobalStyle`
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
    box-sizing: border-box;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
html {
font-size:18px;
  height: 100%;
  font-family: 'Poppins', sans-serif;
}
body {
	line-height: 1;
  	height: 100%;
	overflow: hidden;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

.custom-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height:12px;
  width: 12px;
  border: 1px solid rgba(229, 185, 16, 0.1);
  background-color:rgba(229, 185, 16, 0.219); 
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
  animation: pulse 1.5s infinite;
}

.custom-icon > div {
  background: #E5B910;
  height:8px;
  width:8px;
  border-radius: 50%;
}

`;


export default GlobalStyles;