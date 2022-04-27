import './App.css';
import {useEffect, useState} from "react";
import {BlogInterface} from "./Interface/BlogInterface";

export default function App() {
    const [blogList, setBlogList] = useState<BlogInterface[]>([]);

    useEffect(() => {
        // je lance la requête :
        fetch('http://localhost:2350')
            // une fois que tu auras récupéré la réponse / que la promesse sera résolue
            // fait quelque chose avec : ici parser le body, pour en récupérer un json valable
            .then(response => response.json())
            // renvoie la promesse que le body est bien en json
            .then(data => {
                setBlogList(data)
            })
    })

    return (
        <></>
    )
}
