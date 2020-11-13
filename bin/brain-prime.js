#!/usr/bin/env node
import { rules, generateTaskAndCorrectAnswer } from '../games/prime.js';
import game from '../src/index.js';

game(rules, generateTaskAndCorrectAnswer);
