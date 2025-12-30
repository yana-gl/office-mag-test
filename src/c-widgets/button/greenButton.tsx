import { Button, type ButtonProps } from "./button";

export const GreenLineButton = (props: ButtonProps) => {
	return (
		<Button
			palette={{
				init: { border: '#6d9735' },
				hover: { border: '#6d9735' },
				active: { border: '#6d9735' },
			}}
			{...props}
		/>
	);
}

export const GreenButton = (props: ButtonProps) => {
	return (
		<Button
			palette={{
				init: { bg: '#6e9735', border: '#6e9735', text: '#ffffff' },
				hover: { bg: '#85b443', border: '#85b443', text: '#ffffff' },
				active: { bg: '#5f822a', border: '#5f822a', text: '#ffffff' },
				disabled: { bg: '#a0ba7b', border: '#a0ba7b', text: '#ffd9d7' },
			}}
			{...props}
		/>
	);
}
