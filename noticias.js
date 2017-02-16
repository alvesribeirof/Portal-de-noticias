var http = require('http');

var server = http.createServer( function(req, res){

	var categoria = req.url;

	if(categoria == '/tecnologia'){
		res.end("<html><body>Noticias de Tecnologia</body></html>");
	}else if (categoria == '/economia') {
		res.end("<html><body>Noticias de Economia</body></html>");
	} else if (categoria == '/carros') {
		res.end("<html><body>Noticias de Carros</body></html>");
	} else {
		res.end("<html><body>Portal de notícias</body></html>");	
	}

});

server.listen(3000);
