import React from 'react';


// Application components
import CommentBox from './CommentBox';
import CommentList from './CommentList';

export default () => (
  <div>
    <h1>Приложение "Комментарии"</h1>
    <CommentBox />
    <CommentList/>
  </div>
);
