import type { ReactNode } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from 'react-router-dom';
import './wrapper.scss';

export const Wrapper = ({ children }: { children: ReactNode }) => (
	<div>
        <div className={'header'}>
            <Link className={'header__back-button'} to={'/'}>
                <ArrowBackIcon/>
                <span>Назад</span>
            </Link>
        </div>
        {children}
    </div>
);
