import React  from 'react'; 
import { Link } from "react-router-dom";

interface HeaderBarTitleProps {
    icon: any;
}

export default function HeaderBarTitle({ icon }: HeaderBarTitleProps) {
    return (
        <div className = "flex items-center justify-between w-full">
            <div className = "flex items-center">
                <Link to="/" className ="flex items-ceneter mr-2">
                    <img
                        src={icon}
                        alt="CVS Health & Pharamcy Logo"
                        className="w-auto h-6 flex items-left"
                    />
                </Link>
            </div>
        </div>
    );
}