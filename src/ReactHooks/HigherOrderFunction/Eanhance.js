import { useState } from 'react'

const Eanhance = (OrginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0);
        const increment = () => {
            setCount(count + 1)
        }


        return <OrginalComponent count={count} increment={increment} />

    }
    return NewComponent
}

export default Eanhance
