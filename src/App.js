import React from 'react'
import Header from './components/Header'
import Jumbotron from './components/Jumbotron'
import { Button } from 'reactstrap';
import './styles.css'

export default function App() {
    return (
        <div>
            <Header />
            <Jumbotron />
            <Button color="danger">Danger!</Button>
        </div>
    )
}
