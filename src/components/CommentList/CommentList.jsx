import React from 'react';

import { CommentInfo } from '../CommentInfo/CommentInfo';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <React>
    {comments.length !== 0 ? (
      comments.map(comment => (
        <CommentInfo comment={comment} key={comment.id} />
      ))
    ) : (
      <b data-cy="NoCommentsMessage">No comments yet</b>
    )}
  </React>
);
