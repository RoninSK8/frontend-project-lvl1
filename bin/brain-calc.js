#!/usr/bin/env node
import { rules, generateTaskAndCorrectAnswer } from '../games/calc.js';
import game from '../src/index.js';

game(rules, generateTaskAndCorrectAnswer);
