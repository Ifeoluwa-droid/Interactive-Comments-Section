import TagName from "./TagName";

const Text = (props) => {
    return ( <p className="comment-text">{props.isReply && <TagName tagName={props.replyingTo} />} {props.text}</p> );
}
 
export default Text;