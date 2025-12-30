import { useState } from 'react';
import './form.scss';

type FormState = {
	name?: string;
	color?: string;
	comment?: string;
	agree?: boolean;
}

export const Form = () => {
	const [formState, setFormState] = useState<FormState>({});

	const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
		setFormState(prev => ({ ...prev, [key]: value }));
	};

	const onSubmit = (e: React.FormEvent) => {
		e.preventDefault();  // не даём странице перезагрузиться
		console.log(formState);
	};

	return (
		<form className="form" onSubmit={onSubmit}>
			<div className={'form__row'}>
				<div></div>
				<h3>Основное</h3>
			</div>
			<div className={'form__row'}>
				<div>Имя</div>
				<input type="text" placeholder={'Введите имя'} value={formState.name} onChange={(e) => setField('name', e.target.value)}/>
			</div>
			<div className={'form__row'}>
				<div>Цвет настроения</div>
				<input type="color" defaultValue={'#91b5b7'} value={formState.color} onChange={(e) => setField('color', e.target.value)}/>
			</div>
			<div className={'form__additional'}>
				<div className={'form__row'}>
					<div></div>
					<h3>Дополнительное</h3>
				</div>
				<div className={'form__row'}>
					<div>Комментарий</div>
					<textarea placeholder={'Напишите хоть что-нибудь.\nЕсли хотите, конечно.'} value={formState.comment} onChange={(e) => setField('comment', e.target.value)}/>
				</div>
			</div>
			<div className={'form__row'}>
				<div></div>
				<div>
					<input type={'radio'} id={'radio-1'}/>
					<label htmlFor={'radio-1'}>Ну а тут просто полежит радиобатон</label>
				</div>
			</div>
			<div className={'form__row'}>
				<div></div>
				<div>
					<input type={'checkbox'} id={'checkbox-1'} checked={formState.agree} onChange={(e) => setField('agree', e.target.checked)}/>
					<label htmlFor={'checkbox-1'}>Соглашаюсь на всё, что бы вы не придумали и осознаю, что это может означать, <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ'} target={'_blank'}>что угодно</a></label>
				</div>
			</div>
			<div className={'form__row'}>
				<div></div>
				<button type="submit" className={'form__button'}>Отправить все мои данные</button>
			</div>
		</form>
	);
};
