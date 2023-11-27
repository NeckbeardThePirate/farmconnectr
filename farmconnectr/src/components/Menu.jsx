
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import NewPostForm from './NewPostForm'

const Menu = (props) => {
    let userName = localStorage.getItem('userName');

    let signup;
    if (userName === null) {
        userName = 'Guest'
        signup = 'Signup'
    } else {
        signup = 'Quit'
        console.log(userName)
    }
    const navigate = useNavigate();


    const handleSignup = () => {
        navigate('/signup')
    }
    
    const handleTimeline = () => {
        navigate('/')
    }


    const handleChatClick = () => {
        alert('This functionality is still in development. Thanks for your patience. - Judah');
    };

    const [showNewPostForm, setShowNewPostForm] = useState(false);

    const handleNewPostClick = () => {
        setShowNewPostForm(true);
    };

    const handleCloseNewPostForm = () => {
        setShowNewPostForm(false);
    };

    const postsDocRef = props.postsDocRef;

    return (
        <>
        <header className="page-header">
            <h1 className="welcome-message">Welcome {userName}</h1>
            <nav className="menu-buttons">
                <button id="Timeline-button" className="nav-button all-text" onClick={handleTimeline}>Timeline</button>
                <button id="chat-button" className="nav-button all-text" onClick={handleChatClick}>Chat</button>
                <button id="logout-button" className="nav-button all-text" onClick={handleSignup}>{signup}</button>
                <button
            id="newpost-button"
            className="nav-button all-text"
            onClick={handleNewPostClick}
          >
            New Post
          </button>
        </nav>
      </header>

      {showNewPostForm && (
        <NewPostForm postsDocRef={postsDocRef} onClose={handleCloseNewPostForm} recentPosts={props.recentPosts} setRecentPosts={props.setRecentPosts} />
      )}
    </>
  );
}

export default Menu