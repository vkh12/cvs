import React from "react";
import HeaderBar from "../components/navigation/header/HeaderBar";
import cvsLogo from "../assets/cvsLogo.png"; 

export default function Dashboard() {
    console.log("Dashboard");

    return (
        <div className="flex flex-col h-screen">
            <HeaderBar 
                headerIcon={cvsLogo}
            />
            <h1>Header</h1>
        </div>
    );
}

