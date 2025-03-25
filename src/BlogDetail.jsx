import { useParams } from "react-router-dom";

const BlogDetail = () => {
  const {id}=  useParams();
    return ( 
        <div className="detail-blog">
            <h2>Les details su blog -{id}</h2>
        </div>
     );
}
 
export default BlogDetail;