import './formPage.scss';
import { Wrapper } from '../../e-shared/ui-kit/wrapper/wrapper';
import { Form } from '../../c-widgets/form/form';

export const FormPage = () => {
	return (
		<Wrapper>
			<div className={'form-page'}>
				<div className={'form-page__title'}>
					<h2>Заполните поля</h2>
					<h4>ну пожалуйста</h4>
				</div>
				<Form/>
			</div>
		</Wrapper>
	);
};
