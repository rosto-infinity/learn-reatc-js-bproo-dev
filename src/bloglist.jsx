import {Link} from 'react-router-dom';
const BlogList = (props,title, HandleDelete) => {
    // ----const blogs=props.blogs;
    // const title=props.title;
    //const HandleDelete=(id)=>{
       // console.log("delete article");
        //faire une requete http pour supprimer l'article avec l'id
       // const newBlog=blogs.fliter((blog)=>blog.id !==id);
       // setBlog(newBlog);
//         setBlog(blogs.filter((blog)=>blog.id !==id));
//setBog permet de 
        
   // } 
    return (  
        
        <div className="bloglist">
            {/* <h2>{title}</h2> */}
        {
           props.blogs.map((blog)=>(
            <div className="blog" key={blog.id}>
            <Link to={`/blogs/${blog.id}`} className="blog-title">Le titre:
             {blog.title}</Link>
            <p className="blog-body">contenu:...{blog.body}</p>
            <small className="blog-description-date">Publié le...{blog.date}</small><br></br>
            <p className="blog-author">publie par:..{blog.author}</p>
            <button onClick={()=>HandleDelete(blog.id)}>Supprimer article</button>
        </div>
           ))
           
        }
    </div>
    );
}
 
export default BlogList;