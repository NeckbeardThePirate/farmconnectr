

export default function Comments({index, comment}) {
    console.log(index, comment)
    return (
        <div className="comment-block all-text">
            <h2 className="comment-author">{comment.author}</h2>
            {/* <Timestamp / */}
            <p className="comment-contents">{comment.commentContent}</p>
        </div>
    )
}