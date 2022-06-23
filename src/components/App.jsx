import {Comment, Reply} from "./Comment";
import {useState} from 'react';
import InputArea from "./InputArea";
import { commentSectionStyle } from "../styles";
import useFetch from "../hooks/useFetch";

const App = () => {

    const [replyId, setReplyId] = useState(null);

    const handleReply = (id) => {
        setReplyId(id);
    }

    const handleEdit = (id) => {
        console.log(id);
    }

    const handleDelete = (id) => {
        console.log(id);
    }

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
                        onReply={handleReply}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                    />

                    {replyId === comment.id && 
                        <InputArea
                            userImage={user.image.png}
                        />
                    }

                    <div class="reply-section">
                        {
                        comment.replies.map(reply => 
                            <div style={commentSectionStyle}>
                                <Reply
                                    id={reply.id}
                                    isUserReply={user ? user.username === reply.user.username : null}
                                    votes={reply.score}
                                    replyingTo={reply.replyingTo}
                                    avatar={reply.user.image.png}
                                    replier={reply.user.username}
                                    replyTime={reply.createdAt}
                                    reply={reply.content}
                                    onReply={handleReply}
                                    onEdit={handleEdit}
                                    onDelete={handleDelete}
                                />
                                {replyId === reply.id && 
                                    <InputArea
                                          style={{
                                            width: '90%',
                                            margin: '0 0 0 auto'
                                            }}
                                        userImage={user.image.png}
                                    />
                                }
                            </div>
                            )
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