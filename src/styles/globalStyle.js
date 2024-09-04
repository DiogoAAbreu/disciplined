import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
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
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
	&&{
	font-family: "Lexend Deca", sans-serif;
}
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
button {
    all: unset; /* Remove todos os estilos padrão */
    display: inline; /* Ou 'inline-block' se você precisar de dimensões ajustáveis */
    cursor: pointer; /* Adiciona o cursor de mão padrão para indicar que é clicável */
    background: transparent; /* Define o fundo como transparente */
    border: none; /* Remove a borda padrão */
    padding: 0; /* Remove o padding padrão */
    margin: 0; /* Remove a margem padrão */
    font: inherit; /* Herda a fonte do elemento pai */
    text-align: center; /* Opcional: centraliza o texto */
    line-height: normal; /* Opcional: define o line-height como normal */
    color: inherit; /* Opcional: herda a cor do texto do elemento pai */
}
*{
		font-family: "Lexend Deca", sans-serif;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
