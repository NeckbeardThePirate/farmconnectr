import { getFirestore, collection, query, where, addDoc, updateDoc, getDocs, doc, setDoc, getDoc } from "firebase/firestore"
import { useState, useEffect } from 'react'

const NewPostForm = (props) => {
    const { postsDocRef, recentPosts, setRecentPosts, onClose } = props;
    const [postContent, setPostContent] = useState('');
    const [authorName, setAuthorName] = useState('')
    
    
    const handlePostSubmit = async () => {
        if (postContent.length < 100) {
            const inputAuthor = authorName !== ''
            const newPostAuthor = inputAuthor ? authorName : 'Unidentified Guest'
            const newPostTimestamp = Date.now()
            const newPost = {
                timestamp: newPostTimestamp,
                author: newPostAuthor,
                postContent: postContent,
                id: newPostAuthor+newPostTimestamp,
                postComments: [],
                likes: 0,
                usersThatLike: [],
            }
    
            const updatedPosts = [newPost, ...recentPosts];
            setRecentPosts(updatedPosts);
            
            await updateDoc(postsDocRef, {recentPosts: updatedPosts})
                .then(() => {
                    console.log('Successfully Posted')
                })
                .catch((error) => {
                    console.error('There was an error with your post: ', error);
                })
            onClose();    
        } else {
            alert('The current post limit is 100 charachters. Please try again with a shorter message.');
        }
    };

  return (
    <div className="new-post-form">
      <textarea
        className='post-textarea all-text'
        placeholder="Enter your new post here..."
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
      <div className="lower-block">
        <input 
                      type="text" 
                      id="author-name" 
                      className='all-text' 
                      placeholder="Name [if you want]"
                      onChange={(r) => setAuthorName(r.target.value)}
                  ></input>
        <button className='all-text post-submit-button' onClick={handlePostSubmit}>Submit</button>
      </div>
    </div>
  );
}; 



export default NewPostForm