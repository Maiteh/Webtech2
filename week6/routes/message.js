exports.index = function(req, res)
{
	res.render('message', { title: 'Ask a question!' });
};