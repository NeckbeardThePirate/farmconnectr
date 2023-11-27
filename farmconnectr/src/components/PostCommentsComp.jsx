import Comments from './Comments'

export default function PostCommentsComp(props) {
    return (
        <>
            <div id='primary-content'>
                {props.postComments.map((comment, index) => (
                    <Comments comment={comment} index={index}  />  
                ))}
            </div>

        </>
    )
}