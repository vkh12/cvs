import React from "react";
import HeaderBar from "../components/navigation/header/HeaderBar";
import cvsLogo from "../assets/cvs-logo.png";

export default function Dashboard() {
    return(
        <div className="flex flex-col h-screen">
            <HeaderBar 
                headerIcon={cvsLogo}
            />
        </div>
    );
}

