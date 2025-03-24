const BlogList = (props, HandleDelete) => {
    const blogs=props.blogs;
    const title=props.title;
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
            <a href="" className="blog-title">Le titre:{blog.title}</a>
            <p className="blog-body">contenu:...{blog.body}</p>
            <small className="blog-description-date">Publié le...{blog.date}</small><br></br>
            <p className="blog-author">publie par:..{blog.author}</p>
            <button onclick={()=>HandleDelete(blog.id)}>Supprimer article</button>
        </div>
           ))
           
        }
    </div>
    );
}
 
export default BlogList;