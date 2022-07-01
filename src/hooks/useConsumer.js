import { useEffect, useState } from "react";

const useConsumer = () => {
    const [consumers, setConsumer] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/payment')
        .then(res => res.json())
        .then(data => setConsumer(data))
    }, [consumers])
    return [consumers, setConsumer];
}

export default useConsumer;