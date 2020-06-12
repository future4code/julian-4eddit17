import React from 'react';

import styled from 'styled-components'


const Post = styled.div`
  width: 30vw;
  border-radius: 8px;
  border: 1px solid #c3c3c3;
  box-shadow: 0 2px 7px 0 rgba(0,0,0,0.15);  
  margin: 15px;
  padding: 20px;
  justify-content: center;
`

const CardComments = (props) => {  
    
     const comments = props.comments  
    console.log('comments', comments)   

    return (                  
        <Post>          
            <p>{comments.text}</p>
            <p>{comments.username}</p>
            <p>Votos: {comments.votesCount}</p>         
        </Post>       
    );  
}
export default CardComments;