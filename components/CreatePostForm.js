
import React from 'react'

class CreatePostForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      newPost: { title: '', body: '' }
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault()
    this.props.onFormSubmit(this.state.newPost)

    this.setState({ newPost: { title: '', body: '' } })
  };

  handleInputChange = (e) => {
    const { name, value } = e.target
    this.setState((prevState) => ({
      newPost: { ...prevState.newPost, [name]: value }
    }))
  };

  render () {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <label>
          Title:
          <input
            type='text'
            name='title'
            value={this.state.newPost.title}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <label>
          Body:
          <textarea
            name='body'
            value={this.state.newPost.body}
            onChange={this.handleInputChange}
            required
          />
        </label>
        <br />
        <button type='submit'>Create Post</button>
      </form>
    )
  }
}

export default CreatePostForm
