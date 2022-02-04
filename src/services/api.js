import axios from "axios";

export const api = axios.create({
    baseURL: "https://corebiz-test.herokuapp.com",
});

export function sendData(name, email){
    let apiUrl = 'https://corebiz-test.herokuapp.com/api/v1/newsletter'

    axios.post(apiUrl, {
        name: name,
        email: email
    })
    .then(function (response) {
        window.dispatchEvent( new Event('newsletterSendSucess'))
        console.log(response)
    })
    .catch(function (error) {
        console.log(error);
    });
}