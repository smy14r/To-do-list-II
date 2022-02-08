import React from 'react'

export const About = () => {
    const styleObj = {
        fontSize: 19,
        textAlign: "center",
        paddingTop: 30,
        paddingBottom: 30
    }
    return (
        <div style={styleObj}>
            <h3>A Todo List</h3>
            <br/>
            <p style={styleObj}>List of errands to be done with title and description.</p>
        </div>
    )
}
