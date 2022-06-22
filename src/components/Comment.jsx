import Avatar from "./Avatar";
import VoteCounter from "./VoteCounter";
import Username from './Username';
import PostTime from "./PostTime";
import Button from './Button';
import Text from './Text';
import You from "./You";

const Comment = (props) => {

    return ( 
        <div className="comment" style={props.style}>
            <VoteCounter
                votes={props.votes}
            />
            <div>
                <div>
                    <div>
                        <Avatar
                            imgsrc={props.avatar}
                            alt='avatar-img'
                        />
                        <Username
                            username={props.commenter}
                        />
                        {props.isUserComment && <You/>}
                        <PostTime 
                            postTime={props.postTime}
                        />
                    </div>
                    <div>
                        {
                            props.isUserComment ?
                            <div style={{display: 'flex', gap: '1rem'}}>
                                <Button 
                                    style={{color: 'hsl(358, 79%, 66%)'}}
                                    hasIcon={true}
                                    icon='./images/icon-delete.svg'
                                    text="Delete"
                                />
                                <Button 
                                    hasIcon={true}
                                    icon='./images/icon-edit.svg'
                                    text="Edit"
                                />
                            </div> : 
                                <Button
                                    id={props.id}
                                    onClick={props.onReply}
                                    hasIcon={true}
                                    icon='./images/icon-reply.svg'
                                    text='Reply'
                                />
                        }
                    </div>
                </div>
                <Text
                    isReply={props.isReply}
                    replyingTo={props.replyingTo}
                    text={props.comment}
                />
            </div>    
        </div>
     );
}

const Reply = (props) => {
    return ( 
            <Comment
            style={{
                width: '90%',
                margin: '0 0 0 auto'
            }}
            isUserComment={props.isUserReply}
            votes={props.votes}
            isReply={true}
            replyingTo={props.replyingTo}
            avatar={props.avatar}
            commenter={props.replier}
            postTime={props.replyTime}
            comment={props.reply}
         />
     );
}
 
export {Comment, Reply};