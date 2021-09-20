import React from 'react'
import './Profile.module.css'
import img from '../../logo.svg'
import c from './Profile.module.css'
import Posts from './Posts/Posts';
import addPostImg from '../../addPost.svg';
import AddPostModal from './AddPostModal/AddPostModal';
const Profile = (props)=>{
    const avatar = {
        backgroundImage: 'url(' + img + ')',
    };
    const [modalShow, setModalShow] = React.useState(false);
    return(
        <div className={c.profile}>
            <div className={c.back}>
                <div className={c.user}>
                    <div className={c.avatar} style={avatar}>
                    
                    </div>
                    <div className={c.info}>
                        <div className={c.info_item}>Basilio Markos</div>
                        <div className={c.info_item}>19 y.e</div>
                        <div className={c.info_item}>Male</div>
                        <div className={c.info_item}>Top 1 programmer on the planet</div>
                    </div>
                    <div className={c.actions}>
                        <div className={c.action}>
                            
                        </div>
                        <div className={c.action}>

                        </div>
                        <div className={c.action}>
                            <div className={c.action_link} onClick={() => setModalShow(true)}>
                                <img src={addPostImg} alt='add post'></img>
                                <span>Add post</span>
                            </div>
                            <AddPostModal show={modalShow} dispatch={props.dispatch} newPostContent={props.data.newPostContent} onHide={() => setModalShow(false)}/>
                        </div>
                    </div>
                </div>
            </div>
        
        <Posts data={props.data.posts}></Posts>
    </div>
    )
}
export default Profile;