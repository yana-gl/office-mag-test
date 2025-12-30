import { Link } from 'react-router-dom';
import { tests } from '../../e-shared/variables/routes';
import './home.scss';

export const Home = () => {
    return (
        <main className='home'>
        <section className='home__card'>
            <header className='home__header'>
                <h1 className='home__title'>Тестовые задания</h1>
            </header>
            <nav className='home__list'>
                {tests.map((test) => (
                    <Link className='home__link' to={test} key={test}>
                        <span className='home__linkText'>{test}</span>
                        <span className='home__arrow'>→</span>
                    </Link>
                ))}
            </nav>
        </section>
        </main>
    );
};
