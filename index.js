'use strict'

function composeRegex(cfg){

	const regStr = '\\`(\\{\\{\\s?[^|]+\\s?\\|\\s?(?:' + cfg.join('|') + ')(?:\\([^\\)]+\\))?\\s?\\}\\})\\`'
	return new RegExp(regStr, 'gi')
}

module.exports = {
	hooks: {
		'page:before': function(page){
			const cfg = this.config.get('pluginsConfig')['fix-plugins-call'].plugins
			page.content = page.content.replace(composeRegex(cfg), '$1')
			return page
		}
	}
}