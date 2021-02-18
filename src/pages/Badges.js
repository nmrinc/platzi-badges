import React from 'react';
import { Link } from 'react-router-dom';

import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgesList from '../components/BadgesList';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';
import api from '../api';

class Badges extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	};

	componentDidMount() {
		//@o The best place to start a fetch to an API is in this method.
		this.fetchData();

		//@concept POLLING : simply hitting an API’s endpoint to retrieve any new data at a set interval of time.
		//! It's not a good practice because will generate an unwanted calls and overload traffic to the API. An option would be used Webhooks.
		//@o For practical use to exemplify the process of refreshing the data, it will be used in this class.
		//@a An easy approach would be use a setInterval with a given time to run the fetch function.
		this.intervalId = setInterval(this.fetchData, 5000);
	}

	//@o As the component it's unmounted, we need to clear the interval with a given id.
	componentWillUnmount() {
		clearInterval(this.intervalId);
	}

	fetchData = async () => {
		//@o As this method can be called several times, it's a good practice to reset the loading and error on the state.
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.list();
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

	render() {
		//@o As every 5 secs the fetch function will be invoked, it's bad for the UX to block the SPA with the loader, so we invoke it only at the beginning when there's no data
		if (this.state.loading === true && !this.state.data) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<div className="Badges__container">
							<img
								className="Badges_conf-logo"
								src={confLogo}
								alt="Conf Logo"
							/>
						</div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Badge
						</Link>
					</div>

					<BadgesList badges={this.state.data} />
					{
						//@o For a good UX it's a good practice to let the user know that there's a process running, so adding a mini loader will fix this.
						this.state.loading && <MiniLoader />
					}
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
