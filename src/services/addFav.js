const ENDPOINT = 'http://localhost:8080/api'

export default function addFav({ id, jwt }) {
    return fetch(`${ENDPOINT}/favs/${id}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': jwt
        }
    }).then(res => {
        if(!res.ok) throw new Error('Response is NOT ok')
        return res.json();
    }).then(res => {
        const { favs } = res;
        console.log('success post favs', favs)
        return favs;
    })
}