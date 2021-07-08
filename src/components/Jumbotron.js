import React from 'react'
import jumbotronImage from '../assets/header-x1.png'


export default function jumbotron() {
    return (
        <div className="container__jumbotron">
                {/*eslint-disable-next-line */}
                <img
                    width="100%"
                    height="480"
                    src={jumbotronImage}
                />
                <p className="jumbotron__text">Electronics</p>
        </div>
    )
}
