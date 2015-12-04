// default settings. fis3 release
fis.set('project.files',
	[ 'assets/**' ]);
// Global start
fis.match('*.{js,css}', {
	useHash : false
});

fis.match('::image', {
	useHash : false
});

fis.match('*.js', {
	optimizer : fis.plugin('uglify-js')
});

fis.match('*.scss', {
    rExt : '.css',
    parser : fis.plugin('node-sass', {
    // options...
    })
});

fis.match('*.scss', {
	  packTo: '/static/aio.css'
	});

fis.match('*.css', {
	optimizer : fis.plugin('clean-css')
});

fis.match('*.png', {
	optimizer : fis.plugin('png-compressor')
});

// Global end

// default media is `dev`
fis.media('dev').match('*', {
	optimizer : null
});
