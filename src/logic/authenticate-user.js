export default function (email, password) {
    if (typeof email !== 'string') throw new TypeError(`${email} is not a string`)
    if (typeof password !== 'string') throw new TypeError(`${password} is not a string`)

    return (async () => {
        const response = await fetch('https://b00tc4mp.herokuapp.com/api/v2/users/auth', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username: email, password })
        })

        if (response.ok) {
            const { token } = await response.json()

            return token
        }

        if (response.status < 500) {
            const { error } = await response.json()

            throw new Error(error)
        }

        throw new Error('server error')
    })()
}