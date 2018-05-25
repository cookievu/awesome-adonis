'use strict'

const Model = use('Model')

class Comment extends Model {

	static boot() {
	    super.boot()

	    this.addHook('beforeDelete', async (comment) => {
	    	console.log('On comment beforeDelete')
	    })
	}

}

module.exports = Comment
