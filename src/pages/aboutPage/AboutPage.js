import { useEffect, useState } from "react"
import { Link } from "react-router-dom"



export default function AboutPage (){
    const [about, setAbout] = useState([])
    const [preloader, setPreloader] = useState (false)

    useEffect(() => {
        setPreloader(true)
        fetch(`https://fakestoreapi.com/products`)
            .then(response => response.json())
            .then(posts => setAbout(posts)).finally(() =>setPreloader(false))
    }, [])
    return (
        <>
        <h1>About page</h1>
        {
            preloader
            ?
            <p>...loading</p>
            :
            about.map(post => <div>
                <p>{post.title}</p>
                <Link to={`/posts/${post.id}`}>читать далее</Link>
                <p>-------------------------</p>
            </div>)
        }
        
        </>
    )
}