import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import LoadingIcon from 'Components/LoadingIcon';

function Statistics() {
	const [stats, setStats] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		const ourRequest = Axios.CancelToken.source();

		async function getStats() {
			try {
				const response = await Axios.get('/dashboard', {
					cancelToken: ourRequest.token,
				});

				if (response.data) {
					setStats(response.data);
				} else {
					console.log('No data');
				}
				setLoading(false);
			} catch (e) {
				console.log('error occurred - ', e);
			}
		}
		getStats();
		return () => ourRequest.cancel();
	}, []);

	return (
		<div className="stats">
			{isLoading ? (
				<LoadingIcon />
			) : (
				stats.map((item) => {
					return (
						<div
							key={item.id}
							className="card bg-light mb-3 shadow-sm p-3 mb-5 bg-white"
						>
							<div className="stats-icon">
								<i
									className={` far fa-3x ${
										item.type === 'profiles' ? 'fa-user-circle' : 'fa-chart-bar'
									}`}
								></i>
							</div>
							<div className="card-body">
								<p className="card-text">
									{item.line1} <span className="stats-line">{item.line2}</span>
								</p>
								<p className="card-text sub-text">{item.title}</p>
							</div>
						</div>
					);
				})
			)}
		</div>
	);
}

export default Statistics;
