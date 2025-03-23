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
        <a href="" className="logo">Boris dev</a>
      </div>
      <ul className="liens">
        <li>
          <a href="" className="lien">Accueil</a>
        </li>
        <li>
          <a href="" className="lien" style={ buttonArticle
          //   {backgroundColor:'blue',
          // color:'white',
          // padding:'10px',
          // borderRadius:'5px'

          // }
          }>Creer un article</a>
        </li>
        
      </ul>
    </nav>
  );
};

export default Navbar;
