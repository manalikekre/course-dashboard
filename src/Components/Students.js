import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LoadingIcon from 'Components/LoadingIcon';

function Students() {
	const [students, setStudents] = useState([]);
	const [isLoading, setLoading] = useState(true);
	useEffect(() => {
		const ourRequest = Axios.CancelToken.source();

		async function getStudents() {
			try {
				const response = await Axios.get('/students', {
					cancelToken: ourRequest.token,
				});
				if (response.data) {
					setStudents(response.data);
				} else {
					console.log('No data');
				}
				setLoading(false);
			} catch (e) {
				console.log('error occurred - ', e);
			}
		}
		getStudents();
		return () => ourRequest.cancel();
	}, []);

	return (
		<>
			{
				<div className="card bg-light mb-3 shadow-sm p-3 mb-5 bg-white">
					<div className="card-header clearfix ">
						<span className="float-left">Students by average mark</span>
						<span className="sort float-right">
							Descending <i className="fas fa-chevron-down"></i>
						</span>
					</div>
					<div className="student-display clearfix">
						{isLoading ? (
							<LoadingIcon />
						) : students.length > 0 ? (
							students.map((student) => {
								return (
									<div key={student.id} className="studentDetails  ">
										<i className="fas fa-user-graduate fa-2x"></i>
										<div className="clearfix student-info">
											<div className="student-name float-left">
												{student.name}
											</div>
											<div className="student-marks float-right">
												{student.marks}
											</div>
										</div>
									</div>
								);
							})
						) : (
							<div> No data</div>
						)}
					</div>
				</div>
			}
		</>
	);
}

export default Students;
