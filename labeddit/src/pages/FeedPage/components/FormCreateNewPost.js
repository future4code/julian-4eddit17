import React from 'react';
import styled from 'styled-components';

const CreatePostContainer = styled.div`
background-color: #BAB5A4;
  width: 20%;
  height: 50%;
  margin: 0 auto;  
  padding: 15px;
  text-align: center;  
`

const FormCreateNewPost = (props) => {
  return (
    <CreatePostContainer>
        <label>Create a post</label>
        <input
          type='text'
          placeholder='Title'          
        />
        <textarea
          rows="4" cols="30"
          placeholder='Text'
        />
        <button onClick={props.goToTitleCreatePost}>CANCEL</button>
        <button>POST</button>
    </CreatePostContainer>
    
    
  );
}

export default FormCreateNewPost;