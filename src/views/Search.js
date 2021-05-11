import React, { useState } from 'react'
import AppsTable from '../components/AppsTable'
import styled from 'styled-components'
import { getAppsById } from '../helpers/fetchData'

const Search = () => {
    const [id, setId] = useState('')
    const [apps, setApps] = useState()
    const [error, setError] = useState('') 

    const handleSubmitForm = async (e) => {
        e.preventDefault()
        try {
            const res = await getAppsById(id)
            const apps = await res.data.organizations[0].apps
            setApps(apps)
            if (error) {
                setError('')
            }
        } catch (error) {
            console.error(error)
            setApps(null)
            setError('there was an error when fetching the data')
        }
    }
    return (
        <>
            <Container>
                <form>
                    <input type="text" name="id" placeholder="Introduce DAO's address" value={id} onChange={e => setId(e.target.value)}></input>
                    <button onClick={handleSubmitForm} type="submit">Search</button>
                </form>
            </Container>
            {!apps &&
            <Container>
                    Example DAO: 0x004b9923ef4736fdff729a18ed533d4a3529765d
            </Container>}
            {apps &&
            <AppsTable apps={apps}/>}
            {error &&
            <Container>
                Incorrect DAO address
            </Container>}
        </>
    )
}

const Container = styled.div`
display: flex;
margin: auto;
margin-top: 50px;
justify-content:center;
`

export default Search