import {Circle} from './es6-modules-export.js'; //we import the Class Circle, and this is usually done with webpack so a work around is to set the type of script to module in html and in the from here, we need to extend it with .js

const c1=new Circle(10);
c1.draw();