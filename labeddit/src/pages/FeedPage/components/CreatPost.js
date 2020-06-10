import React from 'react';
import styled from 'styled-components';

const CreatePostContainer = styled.div`
  width: 20%;
  height: 50%;
  margin: 0 auto;  
  padding: 15px;
  text-align: center;  
`
const H3 = styled.div`
  background-color: #BAB5A4;
`
const CreatePost = (props) => {
  return (
    <CreatePostContainer>
        <H3 onClick={props.goToAreaOfNewPost}>Criar post</H3>
    </CreatePostContainer>    
  );
}

export default CreatePost;
