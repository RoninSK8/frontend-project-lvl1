#!/usr/bin/env node
import { rule, generateTaskAndCorrectAnswer } from '../games/prime.js';
import play from '../src/index.js';

play(rule, generateTaskAndCorrectAnswer);
