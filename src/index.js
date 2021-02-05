//@concept JSX
//@context Syntactic sugar for React.createElement

import React from 'react';
import ReactDOM from 'react-dom';

// const jsx = <h1>Hello, Platzi Badges!</h1>;

/**
 * @insight The React.createElement receives 3 arguments: Type, attributes & children(innerHTML)
 * @insight All attributes must be __JS expressions__. Same for JSX
 * @insight If there's a falsy value on the expression won't be shown.
 *
  const element = React.createElement(
    'a',
    { href: 'https://platzi.com' },
    'Ir a Platzi'
  );
*/

// const name = 'Stephanie';
// const sum = () => 3 + 3;
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola soy, {undefined}</h1>;

//@o With JSX Multiline
const jsx = (
	<div>
		<h1>Hola, soy Richard</h1>
		<p>Soy ingeniero frontend.</p>
	</div>
);

//@o React.createElement
const element = React.createElement(
	'div',
	{},
	//@o For multiline, must enter createElement for any children that wanted to be rendered
	React.createElement('h1', {}, 'Hola, soy Richard'),
	React.createElement('p', {}, 'Soy ingeniero de la web.')
);
const container = document.getElementById('app');

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
