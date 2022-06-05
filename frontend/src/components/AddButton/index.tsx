import { Link } from 'react-router-dom';
import './styles.css'

function AddButton() {
    return (
        <Link to={"/movieregistration"}>
            <div className="float">
                <i className="fa fa-plus my-float">+</i>
            </div>
        </Link>
    );
}

export default AddButton;