import React from "react"

export default function Form() {
    const [{
        firstName,
        lastName
    }, setName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */

    function handleChange(event) {
        setName({ [event.target.name]: event.target.value })
    }

    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                name="firstName"
                onChange={handleChange}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
            />
        </form>
    )
}
