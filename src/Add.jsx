import {useState} from 'react';
const Add = () => {

const [titre, setTitle]=useState("hello word");
const [author, setAuthor]=useState("Voici l'author article");
const [body, setBody]=useState("Voici le contenu de mon premier article");
const form={
display:'flex',
flexDirection:'column',
width:'50%',
margin:'auto',
padding:'20px',
border:'1px solid #ccc',
borderRadius:'5px',
marginTop:'50px',
gap:'10px'

}
const form_group={
display:'flex',
flexDirection:'column',
marginBottom:'10px',
gap:'10px',
textAlign:'left'

}
const label_input={
padding:'5px',
border:'1px solid #ccc',
borderRadius:'2px',
width:'80%',
margin:'auto',


}
const HandleBlogAdding=(e)=>{
e.preventDefault();
const blog={titre, author, body}
}


    return (
        // <div className="create">
        //     <h2>Ajouter un nouvel article</h2>
        // </div>
        <div className="create-blog">
            {/* <h2>Ajouter un nouvel article</h2> */}


            <form action="" onSubmit={HandleBlogAdding}  className="form" style={form}>
                <div className="form-group" style={ form_group}>
                    <label htmlFor="title">Titre de l'article</label>
                    {/* <input type="text" name="" id="title"  value={title} onChange={(e)=>e.target.value} /> */}
                    <input type="text" id='title' onChange={(e)=>setTitle(e.target.value)} value={titre} style={label_input} />
                </div>
                <div className="form-group" style={ form_group}>
                    <label htmlFor="author">Selectionnez un auteur</label>
                    <select name="" id="" className="form-control">

                        <option  onChange={(e)=>setAuthor(e.target.value)} value={author}></option>
                        <option value="aubin">aubin</option>
                        <option value="boris">boris</option>



                    </select>
                </div>
                <div className="form-group" style={ form_group}>
                    <label htmlFor="body">Contenu de l'article</label>
                    <textarea name="" id="body" style={label_input} onChange={(e)=>setBody(e.target.value)} value={body}></textarea>
                </div>
                <div className="form-group" style={ form_group}>
                    <button type="submit">creer article</button>
                </div>
            </form>
                <p className="">{titre}</p>
                <p className="">{author}</p>
                <p className="">{body}</p>

        </div>
    );
}

export default Add;