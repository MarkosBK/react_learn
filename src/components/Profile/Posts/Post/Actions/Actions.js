import c from './Actions.module.css'
import like from '../../../../../like.svg'
import comment from '../../../../../comment.svg'
import repost from '../../../../../repost.svg'
import share from '../../../../../share.svg'
const Actions = (props) => {
    return (
    <div className={c.actions}>
        <div className={c.item}>
            <a href="/#"><img src={like} alt="like" className={c.icon}></img></a>
            <p className={c.counter}>{props.likesCount}</p>
        </div>
        <div className={c.item}>
            <a href="/#"><img src={comment} alt="comment" className={c.icon}></img></a>
            <p className={c.counter}>{props.commentsCount}</p>
        </div>
        <div className={c.item}>
            <a href="/#"><img src={repost} alt="repost" className={c.icon}></img></a>
        </div>
        <div className={c.item}>
            <a href="/#"><img src={share} alt="share" className={c.icon}></img></a>
        </div>
    </div>
    )
}

export default Actions