var mysql      = require('mysql');
var connection = mysql.createConnection({
	host     : 'localhost',
	port	 : '8889',
	user     : 'root',
	password : 'root',
	database : 'hapiblog'
});

var PostStore = {};

PostStore.initialize = function(){
	PostStore.posts = getAllPosts();
}

PostStore.getAllPosts = function(){
	connection.connect(function(err) {
		if (err) {
			console.error('MYSQL: error connecting: ' + err.stack);
			return;
		}
		console.log('MYSQL: connected as id ' + connection.threadId);
		connection.query('select * from posts;', function(err, results, fields) {
			if(err) throw err;
			console.log(JSON.stringify(results))
			return JSON.stringify(results);
			connection.end();
		});
	});
}


module.exports = PostStore;