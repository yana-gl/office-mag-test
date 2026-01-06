import './justButtons.scss';
import { Wrapper } from '../../e-shared/ui-kit/wrapper/wrapper';
import { Button, type ButtonProps } from '../../c-widgets/button/button';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { ArrowButton } from '../../c-widgets/button/arrowButton';
import { useState } from 'react';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import VisibilityIcon from '@mui/icons-material/Visibility';

const buttonsData: ButtonProps[] = [
	{
		text: 'Просмотреть',
	},
	{
		text: 'Просмотреть',
		$variant: 'outline',
		$color: 'red',
	},
	{
		text: 'Просмотреть',
		$variant: 'solid',
		$color: 'red',
	},
	{
		text: 'Просмотреть',
		$variant: 'outline',
		$color: 'green',
	},
	{
		text: 'Просмотреть',
		$variant: 'solid',
		$color: 'green',
	},
	{
		iconLeft: <EditIcon/>,
		text: 'Редактировать',
	},
	{
		iconLeft: <FileUploadIcon/>,
		text: 'Выгрузить в Excel',
	},
	{
		iconLeft: <CloseIcon/>,
		text: 'Удалить список',
	},
	{
		iconLeft: <PrintIcon/>,
		text: 'Распечатать',
	},
	{
		iconLeft: <DownloadIcon/>,
		text: 'Загрузить из файла',
	},
];

export const JustButtons = () => {
	const [ disabled, setDisabled ] = useState(false);
	return (
		<Wrapper>
			<div className={'disable-button-wrapper'}>
				<Button
					$variant={'solid'}
					$color={'green'}
					onClick={() => setDisabled(prev => !prev)}
					text={`${disabled ? 'Активировать' : 'Дизейблить'} все кнопки`}
					iconRight={disabled ? <VisibilityIcon/> : <VisibilityOffIcon/>}
				/>
			</div>
			<div className={'buttons-page'}>
				<ArrowButton disabled={disabled} text={'Просмотреть'}/>
				{
					buttonsData.map((buttonData, index) => (
						<Button key={index} {...buttonData} disabled={disabled}/>
					))
				}
			</div>
		</Wrapper>
	);
};
