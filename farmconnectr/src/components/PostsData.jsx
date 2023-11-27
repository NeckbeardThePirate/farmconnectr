import Timestamp from './Timestamp'

export default function(props) {
    return(
        <div className="post-data">
            <p className='post-author'>{props.post.author}</p>
            <Timestamp timestamp={props.post.timestamp} />
            <p className='post-text'>{props.post.postContent}</p>
        </div>
    )
}