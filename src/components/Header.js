import React from 'react'
import styled from 'styled-components'

const Header = () => {
    return (
        <container>
            <Navbar>
                <Link href="/apps">apps</Link>
                <Link href="/search" external={false}>
                  search
                </Link>
            </Navbar>
        </container>
    )
}

const Navbar = styled.a`
    display: flex;
    font-size: 20px;
    margin: 10px 200px;
    border: 2px solid black;
    padding: 10px;
`
const Link = styled.a`
    margin: 10px 30px;
    text-decoration: none;
    color: #242424;
    border: none;
    &:hover {
        color: lightblue;
    }
`
export default Header
