export default function Like(props) {
    const liked = props.liked;
    if (liked) {
        return <button className="unlike-button">❤️</button>
    } else {
        return <button className="like-button">♡</button>
    }

}