import React from "react";
import CustomButton from '../../Common/CustomButton';
import { Wrapper } from "./Styles/DashboardStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faLink
} from "@fortawesome/free-solid-svg-icons";
import Project from "./Project";

const projects = Array(7).fill({
	title: 'Campaign Goals',
	type: 'Coaching Program',
	price: '3000-9000',
	timeline: '90 days',
	progress: 73,
	progressMax: 100
});

const Dashboard = () => {
	return (
		<div style={{ margin: '3rem' }}>
			<div style={{ marginBottom: '4rem', position: 'relative' }}>
				<img style={{ position: 'absolute', top: 0, right: 0, marginTop: '-3rem', height: '170%' }} src="https://fakeimg.pl/300x150/ffffff/000000?text=Placeholder&font=noto" alt="Placeholder" />
				<h1 style={{ fontSize: '2em' }}>Placeholder Title</h1>
				<span>{Array(3).fill('placeholder text').join(' ')}</span><br /><br />
				<a href="https://google.com" target="_blank" rel="noreferrer">
					<CustomButton otherStyles={{ padding: 15, minWidth: 'fit-content' }} width="15%" text={<React.Fragment>
						Button <FontAwesomeIcon
							icon={faLink}
							color="var(--secondaryColor)"
						/>
					</React.Fragment>} backgroundColor="var(--primaryColor)" />
				</a>
				<a href="https://google.com" target="_blank" rel="noreferrer">
					<CustomButton otherStyles={{ padding: 15, paddingLeft: 10, paddingRight: 10, minWidth: 'fit-content' }} width="15%" text="Button 2" backgroundColor="var(--secondaryColor)" />
				</a>

			</div>

			<Wrapper>
				{projects.map((data, i) => <Project i={i} {...data} />)}
			</Wrapper>
		</div >
	);
};

export default Dashboard;
