import React, { Component } from 'react';

  class Post extends Component {
    constructor(props) {
      super(props);
      this.state = {isOpen: true}
  }
   
    render() {
      const {article} = this.props
      const title = this.state.isOpen && article.title
      const body = this.state.isOpen && article.body
      const date = this.state.isOpen && 'Published: '+ article.date
      return (
        <div className="card">
          <div className="card-header">
            <h3>
                {title}
            </h3>
          </div>
          <div className="card-body">
            <p className="post_body">{body}</p>
          </div>

          <h5 className="card-subtitle text-muted">{date}</h5>

          <button className="btn btn-primary"onClick={this.handleClick}>
              {this.state.isOpen ? 'Close' : 'Open'}
          </button>
        </div>
       );
    }
  
    handleClick = () => {
      this.setState({
        isOpen: !this.state.isOpen
      })
    }
  
  }


export default Post;