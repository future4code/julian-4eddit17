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
const H3 = styled.div`
  background-color: #BAB5A4;
`
const AllPosts = (props) => {

  const Allpostes = props.posts
  console.log('Allpostes',Allpostes)
  return (
    <CreatePostContainer>
        {props.posts.map((posts) => {
          return <CardPosts posts={posts}/>
        })}
    </CreatePostContainer>    
  );
}

export default AllPosts;
