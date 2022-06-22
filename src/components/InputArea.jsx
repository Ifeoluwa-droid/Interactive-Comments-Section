import Avatar from "./Avatar";
import Button from "./Button";

const InputArea = ({userImage}) => {
    return ( 
        <div class="input-area">
           <Avatar
               imgsrc={userImage}
           />
           <textarea placeholder="Add a comment..." rows="4"></textarea>
           <Button 
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
     );
}
 
export default InputArea;