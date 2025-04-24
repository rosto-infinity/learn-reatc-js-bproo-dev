import {useState, useEffect} from 'react';
import BlogList from './BlogList'
const Home=({props})=>{
    //les props 
    const loading={
        "color": "red",
        "fontSize": "30px",
        "fontWeight": "bold",
        "textAlign": "center",
        "marginTop": "50px"
        
    }
// const  [blogs, setBlog] =useState (null
const  [blogs, setBlog] =useState (
    [

{
    id:1,
    title:"Mon premier article",
    body:"Voici le contenu de mon premier article",
    author:"Simo",
    date:"2021-09-01",
}, 
{
    id:2,
    title:"Mon premier article",
    body:"Voici le contenu de mon premier article",
    author:"Simo",
    date:"2021-09-01",
},
{
    id:3,
    title:"Mon troisieme article",
    body:"Voici le contenu de mon premier article",
    author:"pablo",
    date:"2021-09-01",
},
{
    id:4,
    title:"Mon quatrieme article",
    body:"Voici le contenu de mon quatrieme article",
    author:"Simo",
    date:"2021-09-01",
},
{
    id:5,
    title:"Mon cinquieme article",
    body:"Voici le contenu de mon cinquieme article",
    author:"Pablo",
    date:"2021-09-01",
},
{
    id:6,
    title:"Mon sixieme article",
    body:"Voici le contenu de mon sixieme article",
    author:"Aubin",
    date:"2021-09-02",
}


]
)
const [isLoading, setLoading]=useState(true);
const [error, setError]=useState(null);
    // let name ="Simo";
    // let [name, setName]=useState('Simo');
    // let [age, setAge]=useState(19);
    // const handleClick=()=>{
    //     // // console.log("click reussi avec success");
    //     // // nom="Dev";
    //     // setName('Dev');
    //     // setAge(27);
    //     // console.log("${name} change a "+name);
    //     // console.log("${nom} change a "+nom);
    // }
    // const handleClickAgain=(name, event)=>{
    //     console.log("hello "+name, event.target.value);
    // }
    const HandleDelete=(id)=>{
        console.log("suppression de l'article Id:", id);
        //faire une requete http pour supprimer l'article avec l'id
        const newBlog=blogs.filter((blog)=>blog.id !==id);
        setBlog(newBlog);


//         setBlog(blogs.filter((blog)=>blog.id !==id));
//setBog permet de  faire la mise a jour 
        
//les useEffect sont les fonctions qui s'appelent lorsque les fonctions sont mises a jours
// useEffect(()=>{
//     // return ()=>{
//         console.log("je suis un useEffect");
//         console.log("je suis un useEffect cleanup");

//     // }
// //le useEffect se déclenchera seulement si le tableau de blog change.
// }, [blogs]);


// setTimeout(()=>{
// useEffect(()=>{
//     fetch("http://localhost:3004/posts")
// .then((res)=>{
    //console.log(res);
    //if(!response.ok){
    //throw Error('desole, une erreur est survenu lors de la requete');}
//         return res.json();
//     })
//     .then((data)=>{
//         console.log(data);
//         setBlog(data);
//         setLoading(false);//ici, losque les donnees ont charger, l'on fiiche false
        
//     }).catch(erreo=>{
    //         console.log(erreur);})
    // setError(true)

//         }, 3000);

// }, []);









//ce que nous pouvons dire des useEffect c'est qu'ils sont des fonctions qui s'appellent lorsque les fonctions sont mises a jours
//le useEffect se déclenchera seulement si le tableau de blog change.







    }
    return (
        
        <div className="Home">
         {/* <h1>Notre page d'accueil</h1>
            <p>{name} a {age}</p>
            <button onClick={handleClick}>clicker moi </button>
            <button onClick={(e)=>handleClickAgain("Aubin", e)}>hello Aubin</button>  */}
            {/* <div className="bloglist">
                {
                   blogs.map((blog)=>(
                    <div className="blog" key={blog.id}>
                    <a href="" className="blog-title">Le titre:{blog.title}</a>
                    <p className="blog-body">contenu:...{blog.body}</p>
                    <small className="blog-description-date">Publié le...{blog.date}</small><br></br>
                    <p className="blog-author">publie par:..{blog.author}</p>
                </div>
                   ))
                   
                }
            </div> */}
            {error && <div>{error}</div>}
            {isLoading && <div style={loading} >Chargement...</div>}
           {blogs && <BlogList blogs={blogs} title={'Listes des blogs'} HandleDelete={HandleDelete} />} 
            
            <h1>Listes des articles publiés par simo</h1>
             {/* <BlogList blogs={blogs.filter((blog)=>blog.author=="Simo")} title={'Listes des blogs de simo'} />  */}
        </div>
      );
}
 
export default Home;
