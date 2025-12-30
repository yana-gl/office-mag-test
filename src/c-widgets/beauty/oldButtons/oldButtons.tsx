import './oldButtons.scss';

const OldButton = ({ disabled, text }: { disabled: boolean, text: string }) => {
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
			<OldButton disabled={true} text={'Кнопка'}/>
			<OldButton disabled={false} text={'Кнопка'}/>
		</div>
	);
};
