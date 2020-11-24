#!/usr/bin/env node
import { rules, generateTaskAndCorrectAnswer } from '../games/prime.js';
import play from '../src/index.js';

play(rules, generateTaskAndCorrectAnswer);
