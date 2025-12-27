import './form.scss';

export const Form = () => {
	return (
		<div className={'form'}>
			<div className={'form__row'}>
				<div></div>
				<h3>Основное</h3>
			</div>
			<div className={'form__row'}>
				<div>Имя</div>
				<input type="text" placeholder={'Введите имя'}/>
			</div>
			<div className={'form__row'}>
				<div>Цвет настроения</div>
				<input type="color" defaultValue={'#91b5b7'}/>
			</div>
			<div className={'form__additional'}>
				<div className={'form__row'}>
					<div></div>
					<h3>Дополнительное</h3>
				</div>
				<div className={'form__row'}>
					<div>Комментарий</div>
					<textarea placeholder={'Напишите хоть что-нибудь.\nЕсли хотите, конечно.'}/>
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
					<input type={'checkbox'} id={'checkbox-1'}/>
					<label htmlFor={'checkbox-1'}>Соглашаюсь на всё, что бы вы не придумали и осознаю, что это может означать, <a href={'https://www.youtube.com/watch?v=dQw4w9WgXcQ&list=RDdQw4w9WgXcQ'} target={'_blank'}>что угодно</a></label>
				</div>
			</div>
			<div className={'form__row'}>
				<div></div>
				<button className={'form__button'}>Отправить все мои данные</button>
			</div>
		</div>
	);
};
