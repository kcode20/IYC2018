import React from 'react';
import ChecklistPDF from '../assets/Summit.pdf';

const Checklist = () => {
	return (
		<div className="checklist">
			<iframe
				className="iframepdf"
				src={`${ChecklistPDF}#zoom=100`}
				frameborder="0"
			/>
		</div>
	);
};

export default Checklist;
