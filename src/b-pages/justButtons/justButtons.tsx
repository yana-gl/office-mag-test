import './justButtons.scss';
import {Wrapper} from '../../e-shared/ui-kit/wrapper/wrapper';
import { Button } from '../../c-widgets/button/button';
import EditIcon from '@mui/icons-material/Edit';
import DownloadIcon from '@mui/icons-material/Download';
import PrintIcon from '@mui/icons-material/Print';
import CloseIcon from '@mui/icons-material/Close';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { RedButton, RedLineButton } from '../../c-widgets/button/redButton';
import { GreenButton, GreenLineButton } from '../../c-widgets/button/greenButton';
import { ArrowButton } from '../../c-widgets/button/arrowButton';
import { useState } from 'react';

const buttonsData = [
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
				<Button text={`${disabled ? 'Активировать' : 'Дизейблить'} все кнопки`} onClick={() => setDisabled(prev => !prev)}/>
			</div>
			<div className={'buttons-page'}>
				<Button disabled={disabled} text={'Просмотреть'}/>
				<RedLineButton disabled={disabled} text={'Просмотреть'}/>
				<RedButton disabled={disabled} text={'Просмотреть'}/>
				<ArrowButton disabled={disabled} text={'Просмотреть'}/>
				<GreenButton disabled={disabled} text={'Просмотреть'}/>
				<GreenLineButton disabled={disabled} text={'Просмотреть'}/>
				{
					buttonsData.map((buttonData, index) => (
						<Button key={index} {...buttonData} disabled={disabled}/>
					))
				}
			</div>
		</Wrapper>
	);
};
