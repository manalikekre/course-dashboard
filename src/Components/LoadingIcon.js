import React from 'react';

function LoadingIcon() {
	return (
		<div className="d-flex align-items-center loading-icon">
			<strong>Loading...</strong>
			<div
				className="spinner-border ml-auto"
				role="status"
				aria-hidden="true"
			></div>
		</div>
	);
}

export default LoadingIcon;
