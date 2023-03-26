import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from './css/post.module.css'

export function Post() {
    const {id} = useParams()
    const [product, setPost] = useState({})
    const navigate = useNavigate({})

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(response => response.json())
            .then(product => setPost(product))
    }, [])
    const goToBack = () => {
        navigate(-1)
    }

    return(
        <>
        <button onClick={goToBack} className={styles.button}>back</button>
        <img src={product.image} alt="" />
        <h2>{product.title}</h2>
        
        </>
    )
}