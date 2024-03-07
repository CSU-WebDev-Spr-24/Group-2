import React from "react";
import { Container } from "../Container";
import axios from 'axios'
import { paths } from '../const.js'

function Main () {
    // axios.get(paths.root + '/introduction')
    //     .then(function (response) {
    //         // handle success
    //         console.log(response);
    //     })
    //     .catch(function (error) {
    //         // handle error
    //         console.log(error);
    //     })
    //     .finally(function () {
    //         // always executed
    // });
    return (
        <Container/>
        );
}
export default Main;
