import { useState } from "react"


export const Cat = () => {
    
    const [cat, setCat] = useState({

        name: 'Pepe',
        years: 5,

    });

    const handleclick = () => {
        //console.log('Me haz dado click')
        setCat({...cat, years: cat.years + 1})
        //setCat((prevCat) => ({...prevCat, years: prevCat.years + 1}))
    }

    console.log(cat)

    return (
        <div className="container m-5">
            <h2>{cat.name} - {cat.years}</h2>
            <button onClick={handleclick} className="btn btn-primary">Update</button>
        </div>
    )
}
