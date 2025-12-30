import { Button, type ButtonProps } from "./button";

export const RedLineButton = (props: ButtonProps) => {
	return (
		<Button
			palette={{
				init: { border: '#db2520' },
				hover: { border: '#db2520' },
				active: { border: '#db2520' },
			}}
			{...props}
		/>
	);
}

export const RedButton = (props: ButtonProps) => {
	return (
		<Button
			palette={{
				init: { bg: '#db2520', border: '#db2520', text: '#ffffff' },
				hover: { bg: '#e73128', border: '#e73128', text: '#ffffff' },
				active: { bg: '#a9110b', border: '#a9110b', text: '#ffffff' },
				disabled: { bg: '#ec8e8b', border: '#ec8e8b', text: '#ffd9d7' },
			}}
			{...props}
		/>
	);
}
