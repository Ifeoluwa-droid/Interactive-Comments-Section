import Avatar from "./Avatar";
import Button from "./Button";

const InputArea = ({userImage, ...props}) => {
    return ( 
        <form action="" onSubmit={props.onSubmit}>
               <div class="input-area" style={props.style}>
               <Avatar
                     className="unshow-on-mobile"
                     imgsrc={userImage}
               />
               <div className="show-on-mobile">
                  <Avatar
                        imgsrc={userImage}
                  />
                  <Button 
                  type='submit'
                  onClick={() => {}}
                  style={{
                     background: 'hsl(238, 40%, 52%)',
                     color: 'hsl(0, 0%, 100%)',
                     padding: '1rem 2rem',
                     borderRadius: '.5rem'
                  }}
                  hasIcon={false}
                  text="SEND"
               />
               </div>
               <textarea placeholder="Add a comment..." rows="4" onChange={props.onCommentInputChanged} value={props.value}></textarea>
               <Button 
                  type='submit'
                  onClick={() => {}}
                  className="unshow-on-mobile"
                  style={{
                     background: 'hsl(238, 40%, 52%)',
                     color: 'hsl(0, 0%, 100%)',
                     padding: '1rem 2rem',
                     borderRadius: '.5rem'
                  }}
                  hasIcon={false}
                  text="SEND"
               />
            </div>
        </form>
     );
}
 
export default InputArea;