#!/usr/bin/env node
import { rule, generateTaskAndCorrectAnswer } from '../games/calc.js';
import play from '../src/index.js';

play(rule, generateTaskAndCorrectAnswer);
