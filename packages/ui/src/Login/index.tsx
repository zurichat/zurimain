import {
  Paper,
  createStyles,
  Flex
} from '@mantine/core';
import FormHeader from './FormHeader';
import { Outlet } from 'react-router-dom';
import { withMantine } from '../Wrappers/Mantine';

const useStyles = createStyles((theme) => ({
    pageContainer: {
        height: '100vh',
        background: '#FCF7F1',
    },
    
    wrapper: {
        width: '100%',
        height: '100%',
        minHeight: '100vh',
    },

    formContainer: {
        width: '60%',
        height: '100%',
        positon: 'relative',
        padding: '17px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            width: '100%',
        },
    },

    formImage: {
        width: '40%',
        height: '100%',
        background: '#14466F',
        color: 'white',
        zIndex: 99,
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            display: 'none',
        },
    },
}));

export const Login: React.FC = withMantine(() => {
  const { classes } = useStyles();
  return (
    <div className={classes.pageContainer}>
        <Flex
            className={classes.wrapper}
            justify="between"
            align="center"
        >
            <Flex 
                className={classes.formContainer}
                justify="center"
                align="center"
            >
                <FormHeader />
                <Outlet />  
            </Flex>
            <Paper className={classes.formImage}>
            </Paper>
        </Flex>
    </div>
  );
})

export default Login;