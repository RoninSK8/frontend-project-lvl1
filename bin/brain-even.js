#!/usr/bin/env node
import { rules, generateTaskAndCorrectAnswer } from '../games/even.js';
import play from '../src/index.js';

play(rules, generateTaskAndCorrectAnswer);
