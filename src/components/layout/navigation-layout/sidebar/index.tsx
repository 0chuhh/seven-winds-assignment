
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import styles from './styles.module.scss';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SideBarTabs } from './tabs';

export default function SideBar() {
    return (
        <Drawer
            classes={{
                root:styles.sidebar,
                paper: styles.sidebarPaper
            }}
            variant="permanent"
            anchor="left"
        >
            <Toolbar />
            <Accordion defaultExpanded disableGutters elevation={0}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    classes={{ root: styles.projectAccordion }}
                    id="panel-header"
                >
                    <div>
                        <Typography className={styles.projectTitle}>Название проекта</Typography>
                        <Typography className={styles.abbreviation}>Аббревиатура</Typography>
                    </div>
                </AccordionSummary>
                <AccordionDetails classes={{ root: styles.projectDetails, }}>
                    <SideBarTabs />
                </AccordionDetails>
            </Accordion>
        </Drawer>
    );
}