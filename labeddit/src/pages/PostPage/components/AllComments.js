import React from 'react';
import styled from 'styled-components';
import CardComments from './CardComments';


const CreatePostContainer = styled.div`
  width: 20%;
  height: 50%;
  margin: 0 auto;  
  padding: 15px;
  text-align: center;  
`

const AllComments = (props) => {     
  
  return (
    <CreatePostContainer>
        {props.comments.map((comments) => {
          return <CardComments comments={comments}/>
        })}
    </CreatePostContainer>    
  );
}

export default AllComments;
