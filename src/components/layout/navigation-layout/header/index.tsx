import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import styles from './styles.module.scss';
import gridIcon from 'assets/icons/grid-icon.svg';
import leftArrowIcon from 'assets/icons/left-arrow-icon.svg';
import { Icon } from 'components/ui/icon';
import { Stack } from '@mui/material';
import { HeaderTabs } from './tabs';

export const Header = () => {
    return (
        <AppBar>
            <Toolbar className={styles.appbar}>
                <Stack direction={'row'} gap={'20px'}>
                    <Icon src={gridIcon} />
                    <Icon src={leftArrowIcon} />
                    <HeaderTabs />
                </Stack>
            </Toolbar>
        </AppBar>
    );
};