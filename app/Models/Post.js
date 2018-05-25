'use strict'

const Model = use('Model')

class Post extends Model {

	static boot() {
	    super.boot()

	    this.addHook('beforeDelete', async (post) => {
	    	console.log('On Post beforeDelete')
	    	await post.comments().delete()
	    })
	}

	comments() {
		return this.hasMany('App/Models/Comment')
	}

}

module.exports = Post
