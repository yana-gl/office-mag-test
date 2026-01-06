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
  $color?: Color;
  $variant?: Variant;
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

const palettes: Record<Color, Record<Variant, Variables>> = {
  green: {
    solid: {
      init: { bg: '#6e9735', border: '#6e9735', text: '#fff' },
      hover: { bg: '#85b443', border: '#85b443', text: '#fff' },
      active: { bg: '#5f822a', border: '#5f822a', text: '#fff' },
      disabled: { bg: '#a0ba7b', border: '#a0ba7b', text: '#ffd9d7' },
    },
    outline: {
      init: { border: '#6d9735' },
      hover: { border: '#6d9735' },
      active: { border: '#6d9735' },
    },
  },
  red: {
    solid: {
      init: { bg: '#db2520', border: '#db2520', text: '#fff' },
      hover: { bg: '#e73128', border: '#e73128', text: '#fff' },
      active: { bg: '#a9110b', border: '#a9110b', text: '#fff' },
      disabled: { bg: '#ec8e8b', border: '#ec8e8b', text: '#ffd9d7' },
    },
    outline: {
      init: { border: '#db2520' },
      hover: { border: '#db2520' },
      active: { border: '#db2520' },
    },
  },
  gray: {
    solid: initVariables,
    outline: {
      init: { border: '#afafaf' },
    },
  },
};

type Color = 'green' | 'red' | 'gray';
type Variant = 'solid' | 'outline';

export const Button = styled(BlankButton)<{
  $color?: Color;
  $variant?: Variant;
}>`
  ${({ $color = 'gray', $variant = 'solid' }) => {
    const palette = palettes[$color][$variant];
    const variables = {
      init: { ...initVariables.init, ...(palette.init ?? {}) },
      hover: { ...initVariables.hover, ...(palette.hover ?? {}) },
      active: { ...initVariables.active, ...(palette.active ?? {}) },
      disabled: { ...initVariables.disabled, ...(palette.disabled ?? {}) },
    };

    return `
      background-color: ${variables.init.bg};
      border: 2px solid ${variables.init.border};
      color: ${variables.init.text};
      border-radius: 5px;
      padding: 10px 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      cursor: pointer;

      &:focus { outline: none; }

      &:hover {
        background-color: ${variables.hover.bg};
        border-color: ${variables.hover.border};
        color: ${variables.hover.text};
      }

      &:active {
        background-color: ${variables.active.bg};
        border-color: ${variables.active.border};
        color: ${variables.active.text};
      }

      &:disabled {
        background-color: ${variables.disabled.bg};
        border-color: ${variables.disabled.border};
        color: ${variables.disabled.text};
        cursor: default;
      }
    `;
  }}
`;
