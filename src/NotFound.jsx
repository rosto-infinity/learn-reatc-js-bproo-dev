import {Link} from 'react-router-dom';
const NotFound = () => {
    return ( 
        <div className="404">
            <h2>Sorry, page founf</h2>
            <p>La page dont vous essayez d'accedez n'existe pas!</p>
            <Link to='/'>Aller a la page d'accueil</Link>
        </div>
     );
}
 
export default NotFound;