import {Link} from 'react-router-dom';
const Navbar = () => {
  const buttonArticle={
    backgroundColor:'blue',
    color:'white',
    padding:'10px',
    borderRadius:'5px',
    cursor:'pointer',

  }
  return (
    <nav className="navbar">
      <div>
        <Link to="/" className="logo">Boris dev</Link>
      </div>
      <ul className="liens">
        <li>
          <Link href="/" className="lien">Accueil</Link>
        </li>
        <li>
          <Link to="add" className="lien" style={ buttonArticle
          //   {backgroundColor:'blue',
          // color:'white',
          // padding:'10px',
          // borderRadius:'5px'

          // }
          }>Creer un article</Link>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
