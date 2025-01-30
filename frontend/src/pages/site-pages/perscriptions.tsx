import React from "react";
import HeaderBar from "../../components/navigation/header/HeaderBar";

export default function Perscriptions() {
    const returnButton = [
        {
            text: "Return to Home",
            link: "/",
            icon: "null",
        },
    ];
    return (
        <div>
            <div>
                <HeaderBar 
                    headerIcon={undefined}                    
                />
            </div>
        </div>
    )
}