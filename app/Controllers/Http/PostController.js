'use strict'

const Post = use('App/Models/Post')

class PostController {

	async destroy({ params }) {
		const { id } = params
		const post = await Post.find(id)
		post.delete()
		return { status: 'ok' }
	}

}

module.exports = PostController
