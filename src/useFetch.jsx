const useFetch = () => {
 setTimeout(()=>{
useEffect(()=>{
    fetch("http://localhost:3004/posts")
.then((res)=>{
    console.log(res);
    if(!response.ok){
    throw Error('desole, une erreur est survenu lors de la requete');}
        return res.json();
    })
    .then((data)=>{
        console.log(data);
        setBlog(data);
        setLoading(false);//ici, lorsque les donnees ont charger, l'on fiche false
        
    }).catch(error=>{
            console.log(erreur);})
    setError(true)

        }, 3000);

}, []);


}
 
export default useFetch;