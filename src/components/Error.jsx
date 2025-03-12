import React from "react";
import { useRouteError } from "react-router-dom"; // ✅ Correct Hook

function Error() {
    const error = useRouteError(); // ✅ Corrected Hook Name

    return (
        <div style={{ textAlign: "center", padding: "50px", backgroundColor: "#f8d7da", color: "#721c24" }}>
          <h1>🚨 Oops! Something went wrong</h1>
          <p>{error.statusText || error.message}</p>
          <a href="/" style={{ textDecoration: "none", color: "blue", fontSize: "20px" }}>
            🔙 Go Back Home
          </a>
        </div>
    );
}

export default Error;
