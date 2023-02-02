import axios from 'axios'
import React, { useEffect, useState } from 'react'
import View from '../components/View'

export default function Home() {
    const [responseData, setResponseData] = useState()

    const getData = () => {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
             .then(data => {setResponseData(data.data)})
             .catch(error => {console.log(error)})
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <div>
            {responseData && responseData.map(data => <View data={data}></View>)}
        </div>
    )
}
