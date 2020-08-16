const express = require('express');
const app = express();
const path = require('path');
const thesaurus = require('thesaurus');
const cors = require('cors');

app.use(
	cors()
);
app.get('/:word', function(req, res) {
	const payload = { thesaurus: thesaurus.find(req.params.word) };
	if (payload.thesaurus.includes('undefined') || payload.thesaurus.includes('undefinable')) payload.thesaurus = [];
	res.json(payload);
});
app.get('/*',function(req,res) {
	res.json({thesaurus:[]})
})
app.listen(process.env.PORT || 4000, function() {
	console.log('Node app is working!', process.env.PORT);
});
