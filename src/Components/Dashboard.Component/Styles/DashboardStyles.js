import styled from "styled-components";

export const ProjectWrapper = styled.section`
	display: flex;
	flex: 1 1 32%;
	max-width: 32%;
	flex-direction: column;
	margin: 5px;
	padding: 5px 20px;
	border: 1px solid gray;
	border-radius: 10px;

	* {
		margin: 5px 0;
	}
`;

const progressValueCss = `
	{
		background-color: var(--primaryColor);
		border-radius: 20px;
		border: none;
	}
`;

export const Progress = styled.progress`
	${['moz-progress-bar', 'webkit-progress-value'].map(selector => '&::-' + selector + progressValueCss).join('\n')}
	&[value] {
		-webkit-appearance: none;
		appearance: none;
	}

	& {
		border: none;
	}
`

export const Wrapper = styled.section`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
`;

export const BoldText = styled.span`
	font-weight: bold;
`;

export const LightText = styled.span`
	font-weight: 300;
`;
