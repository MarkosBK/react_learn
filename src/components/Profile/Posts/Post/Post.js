import Actions from './Actions/Actions'
import c from './Post.module.css'
import User from './User/User'

const Post = (props) => {
    var image = {}
    if(props.image != null){
        image = {backgroundImage: 'url('+props.image+')'};
    }
    
    return (
    <div className={c.item}>
        <div className={c.info}>     
            <User name={props.user_name}></User>
            <Actions likesCount="2K" commentsCount="231"></Actions>
        </div>
        <div className={c.contentImage} style={image}>
            <div className={c.content}>{props.content}</div>
        </div>
    
    </div>
    )
}

export default Post