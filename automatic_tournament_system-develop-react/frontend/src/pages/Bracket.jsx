import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useFetching } from '../hooks/useFetching'
import Loader from '../components/UI/Loader/Loader'
import PostService from "../API/PostService";
import RoundRobin from '../components/RoundRobin';
import SingleEl from '../components/SingleEl';
import DoubleEl from '../components/DoubleEl';
import BracketWrapper from '../components/UI/BracketWrapper/BracketWrapper';

const Bracket = () => {
    const params = useParams()
    const [bracket, setBracket] = useState([])
    const [type, setTypes] = useState('')
    const [fetchBrackets, isBraLoadind, braError] = useFetching(async (id) => {
        const response = await PostService.getBracketById(id)
        setBracket(response.data.bracket)
        setTypes(response.data.type)
        console.log(response.data.bracket)
    })

    useEffect(() => {
        fetchBrackets(params.id)
    }, [])

    return (
        <section>
            {isBraLoadind
                ? <div className='loader'><Loader/></div>
                :   <div className="container" style={{width: '1500px', height: '1000px'}}>
                        <BracketWrapper >
                        {(() => {
                            
                                    if (type === "SE") {
                                        return (
                                            <SingleEl id={params.id} bracket={bracket} owner={''}/>
                                        )
                                    } else if (type === "RR") {
                                        return (
                                            <RoundRobin id={params.id} bracket={bracket} owner={''}/>
                                        )
                                    } else if (type === "DE") {
                                        
                                        return (
                                            <DoubleEl id={params.id} bracket={bracket} owner={''}/>
                                        )
                                    }
                            })()}
                        </BracketWrapper>
                    </div>
            
            }
        </section>
    )
}

export default Bracket