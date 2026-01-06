import type { ButtonHTMLAttributes } from 'react';
import './oldButtons.scss';

interface OldButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	text: string;
}

const OldButton = ({ disabled, text }: OldButtonProps) => {
	return (
		<button
			disabled={disabled}
			className='old-button'
		>
			{text}
		</button>
	);
}

export const OldButtons = () => {
	return (
		<div className='old-buttons'>
			<OldButton text={'Кнопка'}/>
			<OldButton disabled={true} text={'Кнопка'}/>
		</div>
	);
};
