import Like from './Like'
import PostsData from './PostsData'


export default function(props) {

    
    function handleClick(props) {
        console.log('clicked', props);
        props.setFullData(props.post)
        props.setShowPost(true)
        console.log(props.showPost)
    }
    return (
        <div key={props.index} className='post-box' onClick={() => handleClick(props)}>
            <PostsData post={props.post}/>
            <Like liked={props.post.liked}/>
        </div>
    )
}