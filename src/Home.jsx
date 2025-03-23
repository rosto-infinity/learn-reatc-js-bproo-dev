import {useState} from 'react';
import BlogList from './BlogList';
const Home=({props})=>{
    //les props 
const  [blogs, setBlog] =useState ([

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
    title:"Mon premier article",
    body:"Voici le contenu de mon premier article",
    author:"Simo",
    date:"2021-09-01",
},
{
    id:4,
    title:"Mon premier article",
    body:"Voici le contenu de mon premier article",
    author:"Simo",
    date:"2021-09-01",
},
{
    id:5,
    title:"Mon premier article",
    body:"Voici le contenu de mon premier article",
    author:"Simo",
    date:"2021-09-01",
},
{
    id:5,
    title:"Mon deuxieme article",
    body:"Voici le contenu de mon deuxieme article",
    author:"Aubin",
    date:"2021-09-02",
}


])
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
            <BlogList blogs={blogs} title={'Listes des blogs'} />
        </div>
      );
}
 
export default Home;
