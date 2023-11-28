

export default function NewCommentBlock(props) {
    //Using state to hold comment author and content
    const [commentContent, setCommentContent] = props.useState('')
    const [authorName, setAuthorName] = props.useState('')
    //function to submit the comment
    const handleClick = async () => {
        const inputAuthor = authorName !== ''
        const newCommentAuthor = inputAuthor ? authorName : 'Unidentified Guest'
        const newCommentTimestamp = Date.now();
        const newComment = {
            timestamp: newCommentTimestamp,
            author: newCommentAuthor,
            commentContent: commentContent,
            id: newCommentAuthor + newCommentTimestamp,
        }

        //swapping the old PostComments for the new
        const updatedComments = [newComment, ...props.postComments];
        props.setPostComments(updatedComments);
        props.setShowNewCommentBlock(false)

        //finding the relevant post and applying the comments
        const postId = props.fullData.id;
        const postIndex = props.recentPosts.findIndex(post => post.id === postId)
        const updatedPost =  props.fullData;
        updatedPost['postComments'] = updatedComments;
        const updatedRecentPosts = props.recentPosts
        console.log('postindex', postIndex)
        updatedRecentPosts[postIndex] = updatedPost;

        //updating the comments db side
        await props.updateDoc(props.postsDocRef, {recentPosts: updatedRecentPosts})
            .then(() => {
                console.log('successfully commented')
            })
            .catch((error) => {
                console.log('an error occurred: ', error)
            })

    }

    return (
        <div className="new-comment-block">
            <div className="comment-text-and-button">
                <textarea 
                    id="new-comment-text"
                    className="comment-textarea all-text"
                    placeholder="Write A Comment! "
                    onChange={(e) => setCommentContent(e.target.value)}
                ></textarea>
                <button id='post-comment-button' className='all-text' onClick={handleClick}>Post comment</button>
            </div>
            <div className="signature-block">
                <input 
                    type="text" 
                    id="author-name" 
                    className='all-text' 
                    placeholder="Name"
                    onChange={(r) => setAuthorName(r.target.value)}
                ></input>    
                <h3 className="author-info">You can sign your comment if you want (:</h3>
            </div>
        </div>
    )
}