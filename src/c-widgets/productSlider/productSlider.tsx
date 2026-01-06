import { products } from '../../e-shared/variables/products';
import './productSlider.scss';

export const ProductSlider = () => {
	return (
		<div className='products'>
			{
				products.map((product) => (
					<div className={'product'} key={product.id}>
						<img className={'product__img'} src={`/${product.img}`} alt={product.name}/>
						<p className={'product__name'}>{product.name}</p>
					</div>
				))
			}
		</div>
	);
};
