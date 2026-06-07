import "../styles/BreadsList.css"
import "../styles/Cards.css"
import { useState, useEffect } from "react"
import { Cards } from "../components/Cards"
import axios from "axios"

export const BreadsList = () => {
    const [breads, setBreads] = useState([])

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/breads`)
            console.log(response.data)
            setBreads(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="breads-page">
            <h2>This is BreadsList component...</h2>
            <section className="cards-container">
                {breads.map(bread => {
                    return (
                        // <h2>{bread.title}</h2>
                        <Cards key={bread.id} obj={bread} />
                    )
                })}
            </section>
        </div>
    )
}