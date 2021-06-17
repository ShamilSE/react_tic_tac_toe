import {React, useState} from 'react'


function Login() {

    const [isFormSubmitted, setIsFormSubmitted] = useState(false)

    function sendForm(event) {
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
                        <input type="text"/>
                    </label>
                    <label>
                        <p>password</p>
                        <input type="password"/>
                    </label>
                </fieldset>
                <button type="submit">submit</button>
            </form>
        </div>
    )
}

export {Login}