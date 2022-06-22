import {Comment, Reply} from "./Comment";
import InputArea from "./InputArea";
import { commentSectionStyle } from "../styles";
import useFetch from "../hooks/useFetch";

const App = () => {

    // const [comments, setComments] = useState(null);
    // const [user, setUser] = useState(null);

    // useEffect(() => {
    //     fetchData();
    // }, []);

    // async function fetchData() {
    //     const commentData = await fetch('http://localhost:8000/comments').then(res => res.json()).then(data => {
    //         return data;
    //     });

    //     await fetch('http://localhost:8000/currentUser').then(res => res.json()).then(data => {
    //         setComments(commentData);
    //         setUser(data);
    //         console.log(data);
    //     });
    // }

    const comments = useFetch('http://localhost:8000/comments');
    const user = useFetch('http://localhost:8000/currentUser');

    return ( 
        <div style={commentSectionStyle}>
            {comments ? comments.map(comment => 
                <div style={commentSectionStyle}>
                    <Comment
                        id={comment.id}
                        isUserComment={user ? user.username === comment.user.username : null}
                        votes={comment.score}
                        avatar={comment.user.image.png}
                        commenter={comment.user.username}
                        postTime={comment.createdAt}
                        comment={comment.content}
                        // onReply={handleReply}
                    />

                    <div class="reply-section">
                        {
                        comment.replies.map(reply => 
                            <Reply
                                isUserReply={user ? user.username === reply.user.username : null}
                                votes={reply.score}
                                replyingTo={reply.replyingTo}
                                avatar={reply.user.image.png}
                                replier={reply.user.username}
                                replyTime={reply.createdAt}
                                reply={reply.content}
                            />)
                        }
                    </div>
                </div>) : <h1>Loading comments.....</h1>}
            {user ? <InputArea
                userImage={user.image.png}
             /> : <div>Loading user....</div>}
        </div>
     );
}
 
export default App;