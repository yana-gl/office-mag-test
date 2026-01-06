import { Button, type ButtonProps } from "./button";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import styled from "styled-components";

export const ArrowStyledButton = styled(Button)`
	.arrow-button__arrow {
		color: #dc241f;
		font-size: 16px;
	}
	&:active .arrow-button__arrow {
		color: #a95e5c;
	}
	&:disabled .arrow-button__arrow {
		color: #b6b6b6;
	}
`;

export const ArrowButton = (props: ButtonProps) => {
	return (
		<ArrowStyledButton
			className="arrow-button"
			iconRight={<PlayArrowIcon
			className='arrow-button__arrow'/>}
			{...props}
		/>
	);
}
