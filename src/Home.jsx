import React, { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
  // ---Style pour l’affichage du chargement
  const loadingStyle = {
    color: 'red',
    fontSize: '30px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: '50px',
  };

  // États
  const [blogs, setBlogs] = useState([
    { id: 1, title: "Mon premier article", body: "Voici le contenu de mon premier article", author: "Simo", date: "2021-09-01" },
    { id: 2, title: "Mon deuxième article", body: "Voici le contenu de mon deuxième article", author: "Simo", date: "2021-09-01" },
    { id: 3, title: "Mon troisième article", body: "Voici le contenu de mon troisième article", author: "Pablo", date: "2021-09-01" },
    { id: 4, title: "Mon quatrième article", body: "Voici le contenu de mon quatrième article", author: "Simo",  date: "2021-09-01" },
    { id: 5, title: "Mon cinquième article", body: "Voici le contenu de mon cinquième article", author: "Pablo", date: "2021-09-01" },
    { id: 6, title: "Mon sixième article", body: "Voici le contenu de mon sixième article", author: "Aubin", date: "2021-09-02" },
  ]);
  const [isLoading, setIsLoading] = useState(true);
  

  // Simule un chargement ou une requête réseau
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // setError("Une erreur est survenue")  // si vous voulez tester l'affichage d'une erreur
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Fonction de suppression d’un article
  const handleDelete = (id) => {
    console.log("Suppression de l'article Id :", id);
    setBlogs((prev) => prev.filter((blog) => blog.id !== id));
  };

  return (
    <div className="Home">
      

      {isLoading ? (
        <div style={loadingStyle}>Chargement...</div>
      ) : (
        <BlogList
          blogs={blogs}
          title="Liste des blogs"
          handleDelete={handleDelete}
        />
      )}

      <h1>Liste des articles publiés par Simo</h1>
    </div>
  );
};

export default Home;
