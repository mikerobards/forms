import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {
            firstName: "",
            lastName: "",
            email: "",
            comments: "",
            isFriendly: true
        })


    function handleChange(event) {
        const { name, value, type, checked } = event.target
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: type === "checkbox" ? checked : value
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
            <input
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"

            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
        </form>
    )
}
