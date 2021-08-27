import React, { useState, useEffect }  from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CommentCard = styled.div`
	padding: 3px;
`;

const Comment = ({index, comment, userId}) => {


	return (
		<CommentCard>
			<Card style={{ width: '18rem' }}>
				<Card.Body >
					<Card.Text>{comment}</Card.Text>
				</Card.Body>
			</Card>
		</CommentCard>
	)
};

export default Comment;