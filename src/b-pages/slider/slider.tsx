import './slider.scss';
import {Wrapper} from '../../e-shared/ui-kit/wrapper/wrapper';

const products = [
	{
		id: 1,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
	{
		id: 2,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
	{
		id: 3,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
	{
		id: 4,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
	{
		id: 5,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
	{
		id: 6,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
	{
		id: 7,
		img: 'product1.jpg',
		name: 'Набор настольный BESTAR «Amenhotep» из дерева, 8 предметов, двойной лоток, светлая вишня',
	},
];

export const Slider = () => {
	return (
		<Wrapper>
			<div className='products'>
				{
					products.map((product) => (
						<div className={'product'} key={product.id}>
							<div className={'product__img'}>
								<img src={`/${product.img}`} alt={product.name}/>
							</div>
							<div className={'product__name'}>
								{product.name}
							</div>
						</div>
					))
				}
			</div>
		</Wrapper>
	);
};
