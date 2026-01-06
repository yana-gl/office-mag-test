import { Wrapper } from '../../e-shared/ui-kit/wrapper/wrapper';
import html from './index.html?raw';

export const BlackPage = () => (
    <Wrapper>
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Wrapper>
);
