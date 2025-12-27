import { Link } from "react-router-dom";
import { tests } from "../../e-shared/variables/routes";
import './home.scss';

export const Home = () => {
	return (
		<div className="links">
			{
				tests.map((test) => (
				<Link to={test} key={test} >
					{test}
				</Link>
				))
			}
		</div>
	);
};
