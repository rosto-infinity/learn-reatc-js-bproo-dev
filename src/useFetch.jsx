const useFetch = () => {
 setTimeout(()=>{
useEffect(()=>{
    const abortController=new AbortController();
    // fetch("http://localhost:3004/posts", {signal:abortController.signal})
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
    //return()=>abortController.abort();

        }, 3000);

}, []);


}
 
export default useFetch;