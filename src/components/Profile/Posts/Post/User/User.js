import c from './User.module.css'

const User = (props) => {
    return (
    <div className={c.user}>
        <div className={c.avatar}></div>
        <div className={c.name}>{props.name}</div>
    </div>
    )
}

export default User