import React from 'react';
import Students from 'Components/Students';
import Statistics from 'Components/Statistics';

function Dashboard() {
	return (
		<div className="dashboard container">
			<div className="sidebar">
				<div className="main-logo">
					<i className="fas fa-university fa-3x"></i>
				</div>
			</div>
			<div className="logged-in">
				<div className="user-info">
					<span className="username">Cody Simmons</span>
					<span className="user-designation">Lecturer</span>
				</div>
				<div className="user-avatar">
					<i className="fas fa-user-tie fa-2x"></i>
				</div>
				<i
					className="fas fa-chevron-down"
					style={{ color: '#a79595', fontSize: '12px' }}
				></i>
			</div>
			<div className="main">
				<div className="title">
					Dashboard <span>Mobile UX/UI Design course</span>
				</div>
				<Statistics />
				<Students />
			</div>
		</div>
	);
}

export default Dashboard;
