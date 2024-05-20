import { useState } from "react"

export const ButtonState = () => {

    const [count, setCount] = useState(0);
    
    const handleclick = () => {
        setCount(count + 1)
        console.log("handleclick")
    }

    return (
        <button onClick={handleclick} >ButtonState: {count}</button>
    )
}
