// Builder
var builder = require('botbuilder');

// Connector Type: Console
var connector = new builder.ConsoleConnector().listen();

// Bot
var bot = new builder.UniversalBot(connector);

// Dialog
bot.dialog('/', [
    // Ask Name
    function (session) {
        builder.Prompts.text(session, "Hi, what's your name?");
    },
    // Greet by name
    function (session, results) {
        session.send("Hello how are you today?", results.response);   
    } 
]);
