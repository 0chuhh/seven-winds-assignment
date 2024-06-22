import { Outlet, useLocation } from 'react-router-dom';
import styles from './styles.module.scss';
import { useLayoutEffect, useState } from 'react';
import { tabList } from 'components/layout/navigation-layout/sidebar/tabs/tab-list';
import Box from '@mui/material/Box';

export const Project = () => {
    const [tabTitle, setTabTitle] = useState<string>('');
    const url = useLocation();
    useLayoutEffect(() => {
        setTabTitle(() => {
            const tab = tabList.find(t => t.href === url.pathname);
            return tab?.fullname || tab?.label || '';
        });
    }, [url.pathname]);
    return (
        <div>
            <div className={styles.tabPanel}>
                <div className={styles.tabTitle}>
                    {tabTitle}
                </div>
            </div>
            <Box
                component="main"
                className={styles.main}
            >
                <Outlet />
            </Box>
        </div>
    );
};