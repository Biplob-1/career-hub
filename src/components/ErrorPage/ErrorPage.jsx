import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h3>Opps!!!</h3>
            <Link to='/'>Go Back To Home</Link>
        </div>
    );
};

export default ErrorPage;