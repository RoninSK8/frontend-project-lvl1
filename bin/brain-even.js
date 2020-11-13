#!/usr/bin/env node
import { rules, generateTaskAndCorrectAnswer } from '../games/even.js';
import game from '../src/index.js';

game(rules, generateTaskAndCorrectAnswer);
