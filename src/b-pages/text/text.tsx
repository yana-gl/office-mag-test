import './text.scss';
import { Wrapper } from '../../e-shared/ui-kit/wrapper/wrapper';

export const Text = () => {
	return (
		<Wrapper>
			<main className='text-page'>
				<header>
					<h1>Тестовые задания</h1>
					<blockquote>Задания упорядочены по сложности, начиная с простых.</blockquote>
				</header>

				<section>
					<h2>Задание 1. Текст</h2>
					<p>
						Сверстан <s>произвольный текст</s> текст описания выполнения тестовых заданий. Используются элементы: заголовков, абзацев, списков, <mark>выделения</mark> текста и <b><i>другие</i></b>.
					</p>
				</section>

				<section>
					<h2>Задание 2. Форма</h2>
					<p>
						Реализована форма с контролируемыми инпутами. Управление состоянием формы осуществляется с помощью хука useState.
					</p>
					<aside className='text-page__note'>
						Для обновления значений используется универсальная функция, принимающая ключ поля и новое значение.
					</aside>
					<pre>
						<code>{`const setField = <K extends keyof FormState>(key: K, value: FormState[K]) => {
	setFormState(prev => ({ ...prev, [key]: value }));
};`}</code>
					</pre>
				</section>

				<section>
					<h2>Задание 3. Кнопки</h2>
					<p>
						Набор переиспользуемых кнопок с различными стилями и темами. 
						Использование <mark><var>styled-components</var></mark> помогает держать стили и логику компонента в одном месте, что упрощает чтение и поддержку кода. 
						Состояния кнопки (init, <i>hover</i>, active, disabled) описываются через конфиг.
					</p>
					<p>
						Поддерживаются варианты <strong>solid</strong> и <strong>outline</strong>, а также 3 цветовые темы:<br/>
						<ul>
							<li>gray (по умолчанию)</li>
							<li>red</li>
							<li>green</li>
						</ul>
					</p>
				</section>

				<section>
					<h2>Задание 4. Схема</h2>
					<p>
						Для отображения связей используется библиотека <strong>Mermaid</strong>,
						которая позволяет описывать диаграммы в текстовом формате. Диаграмма описывается декларативно, без ручной верстки узлов и линий, поэтому отображение схемы отличается от референса, но все связи сохранены.
					</p>
					<aside className='text-page__note'>
						Используются скрытые узлы для объединения связей.
					</aside>
					<pre>
						<code>{`%% пустые узлы для объединения связей
  EMPTY1(( ))
  EMPTY2(( ))
  EMPTY3(( ))
  EMPTY4(( ))

  EMPTY1 --> ALIK`}</code>
					</pre>
				</section>

				<section>
					<h2>Задание 5. Витрина</h2>
					<p>
						Реализован горизонтальный слайдер с товарами. Для отображения используется массив данных <var>products</var>, каждый товар содержит изображение и название.
					</p>
				</section>

				<section>
					<h2>Задание 6. Чёрный экран</h2>
					<p>
						Что было исправлено:
					</p>
					<table>
					<thead>
						<tr>
							<th>Исправление</th>
							<th>Комментарий</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Изменение формата/размера фонового изображений</td>
							<td><abbr title="Bitmap">bmp</abbr> (47,1 МБ) -&gt; jpg (1,2 МБ)</td>
						</tr>
						<tr>
							<td>Исправлены опечатки в коде, грамматические ошибки</td>
							<td><var>display: inline=block, clas, transparant, colour, displat</var></td>
						</tr>
						<tr>
							<td>Теги <var>&lt;link&gt;</var> перемещены в head</td>
							<td></td>
						</tr>
						<tr>
							<td>Теги <var>&lt;script&gt;</var> удалены, так как они не используются</td>
							<td></td>
						</tr>
						<tr>
							<td>Лишние/ломающие/дублирующиеся стили удалены</td>
							<td></td>
						</tr>
						<tr>
							<td>Поправлено использование sticky-footer</td>
							<td>Добавлены стили для футера, позволяющие не зависеть от определенной высоты и line-height</td>
						</tr>
						<tr>
							<td>Поправлено использование <var>col-md-5</var></td>
							<td>Добавлена необходимая структура для корректного применения стиля: <code>container(container-fluid) -&gt; row -&gt; col</code></td>
						</tr>
						<tr>
							<td>Поправлена структура</td>
							<td>Добавлен main, убраны пустые блоки, span с вложенными div</td>
						</tr>
						<tr>
							<td>Исправлен атрибут meta viewport, который указывал, что ширина страницы всегда 1920px</td>
							<td>
								<small>было</small>:<br />
								<code>{`<meta name='viewport' content='width=1920'>`}</code><br/>
								<small>стало</small>:<br />
								<code>{`<meta name='viewport' content='width=device-width, initial-scale=1'>`}</code>
							</td>
						</tr>
					</tbody>
				</table>
					
				</section>
				
				<section>
					<h2>Задание 7. Красота</h2>
					<ol>
						<li>
							<h3>Кнопка</h3>
							<p>
								Состояния кнопки:
									<ul>
									<li><em>hover</em> — кнопка светлеет</li>
									<li><em>active</em> — кнопка становится ярче</li>
									<li><em>disabled</em> — кнопка становится бледнее, меняется курсор</li>
								</ul>
							</p>
						</li>
						<li>
							<h3>Чекбокс</h3>
							<p>
								Настоящий чекбокс скрыт, вместо него показывается блок из этих элементов:
								<ul>
									<li>Шарик <var>.toggle__sphere</var> перемещается при переключении</li>
									<li>Градиент шарика <var>.toggle__sphere-bg::before</var> смещается, показывая красную или зеленую заливку шарика</li>
									<li>Контейнер <var>.toggle__bg</var> плавно меняет фон градиента для визуального эффекта переключения</li>
								</ul>
							</p>
						</li>
					</ol>
				</section>

				<footer className='text-page__footer'>
					<hr />
					<p>
						Репозиторий проекта:&nbsp;
						<a
							href='https://github.com/yana-gl/office-mag-test'
							target='_blank'
							rel='noreferrer'
						>
							github.com/yana-gl/office-mag-test
						</a>
					</p>
				</footer>
			</main>
		</Wrapper>
	);
};
