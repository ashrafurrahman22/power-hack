import { useEffect, useState } from "react";

const useConsumer = () => {
    const [consumers, setConsumer] = useState([]);

    useEffect(()=>{
        fetch('https://royal-doright-26309.herokuapp.com/payment')
        .then(res => res.json())
        .then(data => setConsumer(data))
    }, [consumers])
    return [consumers, setConsumer];
}

export default useConsumer;