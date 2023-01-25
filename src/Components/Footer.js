import React from 'react'

function Footer() {
    return (
        <div>
            <p style={{ position: "absolute", bottom: "0", width: "100%", textAlign: "center" }}>
                &copy; copyrights {new Date().getFullYear()} sujahath
            </p>
        </div>
    )
}

export default Footer