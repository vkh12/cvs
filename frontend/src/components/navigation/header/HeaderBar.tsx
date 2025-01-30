import React  from 'react';
import HeaderBarTitle from "./HeaderBarTitle";

interface HeaderBarProps {
    headerIcon: any;
}

export default function HeaderBar({
    headerIcon,
}: HeaderBarProps) {
    return (
        <div>
            <HeaderBarTitle
                icon={headerIcon}
            />
        </div>
    );
}