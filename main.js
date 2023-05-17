import './style.css'

import { selectTheme } from './src/js/theme';
import { createButtons } from './src/js/createButtons';
import { calcResult } from './src/js/calcResult';

function init() { 
  selectTheme();
  createButtons();
  calcResult();
}
init();