import type { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

interface StateVariables {
	bg?: string;
	border?: string;
	text?: string;
}

type State = 'init' | 'hover' | 'active' | 'disabled';

type Variables = Partial<Record<State, StateVariables>>;

const initVariables: Variables = {
	init: { bg: '#ebebeb', border: '#afafaf', text: '#3d3d3d' },
	disabled: { bg: '#f0f0f0', border: '#d3d3d3', text: '#888888' },
	hover: { bg: '#f4f4f4', border: '#afafaf', text: '#333333' },
	active: { bg: '#e1e1e1', border: '#afafaf', text: '#333333' },
};

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
	iconLeft?: ReactNode;
	iconRight?: ReactNode;
}

export const BlankButton = ({ text, iconLeft, iconRight, ...rest }: ButtonProps) => {
	return (
		<button {...rest}>
			{iconLeft}
			{text}
			{iconRight}
		</button>
	);
};

export const Button = styled(BlankButton)<{ palette?: Variables }>`
	${({ palette }) => {
		const variables = {
			init: { ...initVariables.init, ...(palette?.init ?? {}) },
			disabled: { ...initVariables.disabled, ...(palette?.disabled ?? {}) },
			hover: { ...initVariables.hover, ...(palette?.hover ?? {}) },
			active: { ...initVariables.active, ...(palette?.active ?? {}) }
		};
		return `
			background-color: ${variables.init?.bg};
			border: 2px solid ${variables.init?.border};
			color: ${variables.init?.text};
			border-radius: 5px;
			padding: 10px 20px;
			display: inline-flex;
			align-items: center;
			justify-content: center;
			gap: 10px;
			cursor: pointer;

			&:focus { outline: none; }

			&:hover {
				background-color: ${variables.hover?.bg};
				border-color: ${variables.hover?.border};
				color: ${variables.hover?.text};
			}
			&:active {
				background-color: ${variables.active?.bg};
				border-color: ${variables.active?.border};
				color: ${variables.active?.text};
			}

			&:disabled {
				background-color: ${variables.disabled?.bg};
				border-color: ${variables.disabled?.border};
				color: ${variables.disabled?.text};
				cursor: not-allowed;
			}
		`;
	}}
`;
