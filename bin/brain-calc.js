#!/usr/bin/env node
import { rules, generateTaskAndCorrectAnswer } from '../games/calc.js';
import play from '../src/index.js';

play(rules, generateTaskAndCorrectAnswer);
