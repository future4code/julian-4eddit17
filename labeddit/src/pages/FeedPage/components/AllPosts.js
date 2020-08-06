import React from 'react';
import styled from 'styled-components';
import CardPosts from './CardPosts';

const CreatePostContainer = styled.div`
  width: 20%;
  height: 50%;
  margin: 0 auto;  
  padding: 15px;
  text-align: center;  
`

const AllPosts = (props) => { 
  
  return (
    <CreatePostContainer>
        {props.posts.map((posts) => {
          return <CardPosts posts={posts}/>
        })}
    </CreatePostContainer>    
  );
}

export default AllPosts;
