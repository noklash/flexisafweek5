 import { useState, useEffect } from "react"

export const useColor = (data, color) => {
    const [filtered, setFiltered] = useState([])

    useEffect(() => {
        const items = data.filter((cloth) => cloth.color.toLowerCase() === color.toLowerCase())
        setFiltered(items)
    }, [data, color])

    return filtered
}