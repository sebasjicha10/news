import React from "react"
import styles from "./Form.module.css"
import PropTypes from "prop-types"
import useSelect from "../hooks/useSelect"


const Form = ({setCategory}) => {

    const OPTIONS = [
        {value: "general", label: "General"},
        {value: "business", label: "Business"},
        {value: "entertainment", label: "Entertainment"},
        {value: "health", label: "Health"},
        {value: "science", label: "Science"},
        {value: "sports", label: "Sports"},
        {value: "technology", label: "Technology"}
    ]

    // Use custom hook
    const [category, SelectNews] = useSelect("general", OPTIONS)

    // On form submit, send category to App.js
    const browseNews = e => {
        e.preventDefault()

        setCategory(category)
    }

    return ( 
        <div className={`${styles.browser} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={browseNews}
                >
                    <h2 className={styles.heading}>Find News by Category</h2>

                    <SelectNews />

                    <div className="input-field col s12">
                        <input 
                            type="submit"
                            className={`${styles["btn-block"]} btn-large amber darken-2`}
                            value="Search"
                        />
                    </div>
                </form>
            </div>
        </div>
    )
}

Form.prototype = {
    setCategory: PropTypes.func.isRequired
}
 
export default Form