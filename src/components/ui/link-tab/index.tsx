import Tab, { TabProps } from "@mui/material/Tab";
import React, { useCallback } from "react";
import { FC } from "react";
import { To, useNavigate } from "react-router-dom";

interface LinkTabProps extends TabProps {
    label?: string;
    href?: string;
    selected?: boolean;
}

export const LinkTab: FC<LinkTabProps> = React.memo(({ selected, href, icon, ...restProps }) => {
    const navigate = useNavigate();
    
    const onClick = useCallback(() => {
        navigate(href as To);
    }, [href, navigate]);

    return (
        <Tab
            onClick={onClick}
            aria-current={selected && 'page'}
            {...restProps}
            icon={icon}
        />
    );
});