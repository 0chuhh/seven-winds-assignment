import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import React, { useCallback, useState } from 'react';
import styles from './styles.module.scss';
export const HeaderTabs = React.memo(() => {
    const [value, setValue] = useState(0);

    const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    }, []);

    return (
        <Tabs
            classes={{
                root: styles.tabs,
                indicator: styles.indicator
            }}
            value={value}
            onChange={handleChange}
        >
            <Tab
                classes={{
                    root: styles.tab,
                    selected: styles.selected
                }}
                label="Просмотр" id='0'
            />
            <Tab classes={{
                root: styles.tab,
                selected: styles.selected
            }}
                label="Управление" id='1'
            />
        </Tabs>
    );
});