import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: ""
        })

    console.log(formData)

    function handleChange(event) {
        // setFormData({ [event.target.name]: event.target.value })
        setFormData(prevFormData => ({
            ...prevFormData,
            [event.target.name]: event.target.value
        })
        )
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
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
            />
        </form>
    )
}
