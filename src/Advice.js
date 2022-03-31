import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Advice(props) {

    const [slip, setSlip] = useState([])
    const [loading, setLoading] = useState(false)
    const [liked, setLiked] = useState(false)

    useEffect(async () => {
        setLoading(true)
        let res = await axios.get("https://api.adviceslip.com/advice")
        setSlip(res.data.slip)
        setLoading(false)
    }, [])

    if (loading) return "Loading..."

    const likeBtn = () => {
        if (!liked) { setLiked(true) }
        return (<p className='likeOn'>★</p>)
    }

    const unlike = () => {
        if (liked) { setLiked(false) }
        return (<p className='likeOff'>☆</p>)
    }
    return (
        <div className='Advice'>
            <div className='advice-container'>
                <p>{slip.advice}</p>
            </div>
            <div className='buttons'>
                <button className='new-btn' onClick={() => window.location.reload()}>new advice</button>
                <button className='like-btn' onClick={liked ? unlike : likeBtn}>{liked ? likeBtn() : "☆"}</button>
            </div>
        </div>
    );
}

export default Advice;