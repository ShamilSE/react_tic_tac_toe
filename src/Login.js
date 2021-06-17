import {React, useState} from 'react'


function Login() {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)
    const [username, setUserName] = useState(null)
    const [password, setPassword] = useState(null)

    async function sendForm(event) {
        event.preventDefault()
        setIsFormSubmitted(true)
    }

    return (
        <div className="login">
            {isFormSubmitted && <p>form submitted</p>}
            <form onSubmit={sendForm}>
                <fieldset>
                    <legend>log in</legend>
                    <label>
                        <p>login</p>
                        <input type="text" onChange={(event) => setUserName(event.target.value)}/>
                    </label>
                    <label>
                        <p>password</p>
                        <input type="password" onChange={(event) => setPassword(event.target.value)}/>
                    </label>
                </fieldset>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export {Login}