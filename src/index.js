//@concept ReactDOM.render functionality

/**
 * @context This is the way html would do it
 * @tst const element = document.createElement('h1');
 * @tst element.innerText = 'Hello, Platzi Badges!';

 * @tst const container = document.getElementById('app');

 * @tst container.appendChild(element);
*/

//@context This way it's using React
//@a Import react dependencies.

import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

//@o This is JSX syntax. And every time you want to use it it's necessary to import react
const element = <h1>Hello, Platzi Badges from React!</h1>;

const container = document.getElementById('app');

//@o ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
