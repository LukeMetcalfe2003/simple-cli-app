#!/usr/bin/env node

const process = require('node:process');

const arguments = process.argv.slice(2);

if (arguments.includes ('--greet')){
    console.log("Hello World!");
} else if (arguments.includes('--help') || arguments.includes('--h') || arguments.includes('help')){
    console.log(`
        Usage:
        --greet     print 'Hello World!'
        --help      show this help message`);
} else {
    console.log("No valid arguments provided. use --help for usage information.");
}