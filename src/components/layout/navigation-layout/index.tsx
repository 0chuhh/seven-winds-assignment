import SideBar from './sidebar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Outlet } from 'react-router-dom';
import { Header } from './header';
import styles from './styles.module.scss';

export const NavigationLayout = () => {
    return (
        <Box>
            <Header />
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <SideBar/>
                <Box
                    component="main"
                    className={styles.main}
                >
                    <Toolbar />
                    <Outlet />
                </Box>
            </Box>
        </Box>

    )
}