const express = require('express');
const app = express();
const path = require('path');
const thesaurus = require('thesaurus');
const cors = require('cors');

const whitleListDomain = [
	'http://localhost:5005',
	'https://aslemammad-hangman.surge.com'
];

app.use(
	cors({
		origin : function(origin, callback) {
			if (!origin) return callback(null, true);
			if (whitleListDomain.indexOf(origin) === -1) {
				var msg = 'The CORS policy for this site does not ' + 'allow access from the specified Origin.';
				return callback(new Error(msg), false);
			}
			return callback(null, true);
		}
	})
);
app.get('/:word', function(req, res) {
	res.json({ thesaurus: thesaurus.find(req.params.word) });
});

app.listen(process.env.PORT || 4000, function() {
	console.log('Node app is working!', process.env.PORT);
});
