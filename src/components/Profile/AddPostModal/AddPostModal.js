import React from "react";
import { Button, Modal } from "react-bootstrap";
import { addPostActionCreator, updatePostContentActionCreator } from "../../../redux/profileReducer";
import c from './AddPostModal.module.css'
const AddPostModal = (props) =>{

  
  let newPost = React.createRef();

  function addPost(){
    props.dispatch(addPostActionCreator());
    props.onHide();
  }
  function newPostChange(){
    let text = newPost.current.value;
    props.dispatch(updatePostContentActionCreator(text));
  }

    return(
        <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          New post
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <textarea onChange={newPostChange} className={c.text} ref={newPost} value={props.newPostContent}/>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-dark" size="sm" onClick={addPost}>Add</Button>
        <Button variant="outline-dark" size="sm" onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    )
}

export default AddPostModal;