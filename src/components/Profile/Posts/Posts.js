import Post from './Post/Post'
import c from './Posts.module.css'
import HorizontalScroll from 'react-scroll-horizontal'
const Posts = (props) => {
    const child = { width: `100%`, flex: '1'}
    var posts = props.data.map((item)=>{
        return <Post user_name={item.user_name} content={item.content} image={item.image} likesCount={item.likesCount} comments={item.comments}></Post>
    })
    return (
        <div className={c.posts}>
        <HorizontalScroll reverseScroll={true} style={child}>
            { posts }
        </HorizontalScroll>
        </div>
    
    )
}

export default Posts