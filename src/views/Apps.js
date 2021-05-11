import React, { useState, useEffect } from 'react'
import { PieChart } from '../components/PieChart'
import styled from 'styled-components'
import { getPieChartData } from '../services/getChartData'

const Apps = () => {
    const [data, setData] = useState([])

    const fetchNewData = async () => {
        const newData = await getPieChartData()
        setData(newData)
    }

    useEffect(() => {
        fetchNewData()
    }, [])

    return (
        <Container>
            <PieChart data={data}/>
        </Container>
    )
}

const Container = styled.div`
    height: 500px;

`
export default Apps