'use strict'

/*
|--------------------------------------------------------------------------
| PostSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')

class PostSeeder {
  async run () {
  	const post = await Factory.model('App/Models/Post').create()
  	const comment = await Factory.model('App/Models/Comment').make()
  	await post.comments().save(comment)
  }
}

module.exports = PostSeeder
