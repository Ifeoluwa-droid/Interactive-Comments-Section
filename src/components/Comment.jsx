import Avatar from "./Avatar";
import VoteCounter from "./VoteCounter";
import Username from './Username';
import PostTime from "./PostTime";
import Button from './Button';
import Text from './Text';
import You from "./You";

const Comment = (props) => {

    return ( 
        <div className={`comment ${props.className}`} style={props.style}>
            <VoteCounter
                className="unshow-on-mobile"
                votes={props.votes}
            />
            <div className="show-on-mobile">
                <VoteCounter
                    votes={props.votes}
                />
                <div>
                {
                    props.isUserComment ?
                    <div style={{display: 'flex', gap: '1rem'}}>
                        <Button 
                            style={{color: 'hsl(358, 79%, 66%)'}}
                            id={props.id}
                            onClick={props.onDelete}
                            hasIcon={true}
                            icon='./images/icon-delete.svg'
                            text="Delete"
                        />
                        <Button 
                            id={props.id}
                            onClick={props.onEdit}
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
                    <div className="unshow-on-mobile">
                        {
                            props.isUserComment ?
                            <div style={{display: 'flex', gap: '1rem'}}>
                                <Button 
                                    style={{color: 'hsl(358, 79%, 66%)'}}
                                    id={props.id}
                                    onClick={props.onDelete}
                                    hasIcon={true}
                                    icon='./images/icon-delete.svg'
                                    text="Delete"
                                />
                                <Button 
                                    id={props.id}
                                    onClick={props.onEdit}
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
            id={props.id}
            className='reply'
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
            onReply={props.onReply}
            onEdit={props.onEdit}
            onDelete={props.onDelete}
         />
     );
}
 
export {Comment, Reply};