import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: ""
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
                value={formData.firstName}
            />
            <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={formData.lastName}
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
            />
            <textarea
                value={formData.comments}
                name="comments"
                onChange={handleChange}
                placeholder="Enter Comments Here"
            />
        </form>
    )
}
