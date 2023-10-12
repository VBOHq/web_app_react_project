import { ProjectWrapper, Progress, BoldText, LightText } from './Styles/DashboardStyles';

const Project = ({ i, title, type, price, timeline, progress, progressMax }) => {
	return (
		<ProjectWrapper>
			<h1 style={{ fontSize: '1.2rem' }}>{i + 1}. {title}</h1>
			<LightText>Type: <BoldText>{type}</BoldText></LightText>
			<LightText>Price: <BoldText>{price}</BoldText></LightText>
			<LightText>Timeline: <BoldText>{timeline}</BoldText></LightText>
			<div>
				<Progress value={progress} max={progressMax}></Progress> <LightText>{progress}/{progressMax}</LightText>
			</div>
		</ProjectWrapper>
	);
};

export default Project;