import React from 'react';
import './MyPosts.css';

const MyPosts = () => {
  return(

    <div className="posts">
      <div>
          My posts
        <div>
        <textarea></textarea>
        <button>New post</button>
        </div>
        <div className="all_posts ">
          <div className="my_posts_item">
            <img src="data:image/jpeg;base64,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"></img>
            Post 1
          </div>
          <div className="my_posts_item">
            Post 2
          </div>
          <div className="my_posts_item">
            Post 3
          </div>
          <div className="my_posts_item">
            Post 4
          </div>
          <div className="my_posts_item">
            Post 5
          </div>
        </div>
      </div>
    </div>
  )
}

export default MyPosts;
