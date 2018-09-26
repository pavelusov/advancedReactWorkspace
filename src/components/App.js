import React from 'react';


// Application components
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

export default () => (
  <div>
    <h1>Приложение "Комментарии"</h1>
    <CommentBox />
    <CommentList/>
  </div>
);
