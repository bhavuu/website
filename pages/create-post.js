
import React from 'react'
import CreatePostForm from '../components/CreatePostForm'

class HomePage extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
  }

  handleFormSubmit = async (newPost) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newPost)
      })

      const createdPost = await response.json()

      this.setState((prevState) => ({
        posts: [createdPost, ...prevState.posts]
      }))
    } catch (error) {
      console.error('Error creating post:', error)
    }
  };

  render () {
    return (
      <div>
        <h1>Posts</h1>

        {this.state.posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}

        <CreatePostForm onFormSubmit={this.handleFormSubmit} />
      </div>
    )
  }
}

export default HomePage
