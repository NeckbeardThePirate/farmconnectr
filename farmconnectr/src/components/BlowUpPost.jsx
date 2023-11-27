import Timestamp from './Timestamp'
import NewCommentBlock from './NewCommentBlock'
import PostCommentsComp from './PostCommentsComp';

export default function BlowUpFunction(props) {

    const [showNewCommentBlock, setShowNewCommentBlock] = props.useState(false);

    function handleClick() {
    console.log('heres props', props)
    props.setShowPost(false)
    }
    props.setPostComments(props.fullData.postComments)
    console.log('13 BUP fullData', props.fullData)

    function openCommentBlock() {
        setShowNewCommentBlock(true)
    }

    const theresComments = props.fullData.postComments; 
    console.log(theresComments)
    return (
        <>
            <div className='expanded-post'>
                <div className="modal-container all-text">
                    <button className='close-button' onClick={handleClick}>x</button>
                    <h1 className='popout-header'>@{props.fullData.author} said:</h1>
                    <div className='popout-content-block'>
                        <div className='popout-timestamp'>
                            <Timestamp timestamp={props.fullData.timestamp} />
                        </div>
                        <p className='popout-post-content'>"{props.fullData.postContent}"</p>
                    </div>
                    <div className='action-buttons'>
                        <button className='action-button' onClick={openCommentBlock}>Comment</button>
                        {/* <button className='action-button'>Edit Post</button> */}
                    </div>
                    {showNewCommentBlock ? <NewCommentBlock 
                                                useState={props.useState} 
                                                updateDoc={props.updateDoc} 
                                                recentComment={props.fullData.postComments} 
                                                setPostComments={props.setPostComments}
                                                postComments={props.postComments}
                                                recentPosts={props.recentPosts}
                                                postsDocRef={props.postsDocRef}
                                                fullData={props.fullData}
                                                setShowNewCommentBlock={setShowNewCommentBlock}
                                                /> : null}
                    {theresComments ? <PostCommentsComp postComments={props.fullData.postComments} />: null}
                </div>

            </div>
        </>
    )
}