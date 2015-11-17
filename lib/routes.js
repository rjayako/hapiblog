var Routes = [
	//This route exposes the public folder.
	{
		path: '/assets/{path*}',
		method: 'GET',
		handler: {
			directory: {
				path: './public',
				listing: false
			}
		}
	},
	{
		path: '/',
		method: 'GET',
		handler: {
			file: 'templates/index.html'
		}
	}
]

module.exports = Routes;
