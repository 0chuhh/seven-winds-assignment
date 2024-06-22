import Tabs from '@mui/material/Tabs';
import { LinkTab } from 'components/ui/link-tab';
import { useCallback, useLayoutEffect, useState } from 'react';
import styles from './styles.module.scss';
import navItemIcon from 'assets/icons/nav-item-icon.svg';
import { Icon } from 'components/ui/icon';
import { useLocation } from 'react-router-dom';
import { tabList } from './tab-list';
import React from 'react';

export const SideBarTabs = React.memo(() => {
    const [value, setValue] = useState(0);

    const url = useLocation()

    const handleChange = useCallback((_event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    },[]);

    useLayoutEffect(()=>{
        setValue(tabList.findIndex(t=>t.href===url.pathname))
    },[url.pathname])

    return (
        <Tabs
            value={value}
            onChange={handleChange}
            orientation='vertical'
            classes={{ root: styles.tabs, indicator: styles.indicator }}
        >
            {
                tabList.map((tab) => (
                    <LinkTab
                        icon={<Icon src={navItemIcon} />}
                        classes={{ root: styles.tab }}
                        key={tab.label}{...tab}
                    />
                ))
            }
        </Tabs>
    );
});