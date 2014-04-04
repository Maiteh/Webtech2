var client = new Faye.Client('/faye');

client.subscribe('/ask', function(message) 
{
	$('#questions ul').append('<li><span>' + message.text[0] + '</span> asked a question: <blockquote>' + message.text[1] + '</blockquote></li>');
});

$('#send').click(sendMessage);

$(document).keypress(function(e) 
{
    if(e.which == 13)
    {
    	e.preventDefault();
    	sendMessage();
    }
})

function sendMessage(e) 
{
	var name = $('#name').val();
	var question = $('#question').val();
	var message = [name, question];

	});