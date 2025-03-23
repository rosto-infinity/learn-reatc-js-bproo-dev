const BlogList = (props) => {
    const blogs=props.blogs;
    const title=props.title;
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
        </div>
           ))
           
        }
    </div>
    );
}
 
export default BlogList;