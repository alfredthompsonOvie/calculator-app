import './style.css'

import { selectTheme } from './src/js/theme';
import { createButtons } from './src/js/createButtons';
import { calResult } from './src/js/calResult';

function init() { 
  selectTheme();
  createButtons();
  calResult();
}
init();