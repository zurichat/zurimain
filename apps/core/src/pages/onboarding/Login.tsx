import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Title,
  Text,
  Anchor,
  Divider,
  Flex
} from '@mantine/core';
import Logo from '../../assets/Zurilogo.svg';

const useStyles = createStyles((theme) => ({
    loginPage: {
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

    formHeader: {
        position: 'fixed',
        left: '0',
        right: '0',
        top: '0',
        height: '75px',
        borderBottom: '1px solid #F9DBB6',
        display: 'flex',
        justifyContent: 'start',
        alignItems: 'center',
        paddingLeft: '110px',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            paddingLeft: '17px',
        },
    },

    formLogo: {
        display: 'flex',
        gap: '10px',
        justifyContent: 'start',
        alignItems: 'center',
        
    },

    form: {
        // borderRight: `1px solid ${
        // theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
        // }`,
        maxWidth: '480px',
        width: '100%',
        background: 'transparent',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
        maxWidth: '480px',
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

    title: {
        // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: '44px',
        lineHeight: '50px',
        fontWeight: 700,
        color: '#1E2122',
    },

    logo: {
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        width: 120,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },

    label: {
        fontSize: '20px',
        fontWeight: 700,
        color: '#373B3D'
    }
}));

const Login = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.loginPage}>
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
                <div className={classes.formHeader}>
                    <div className={classes.formLogo}>
                        <img src={Logo} alt="" />
                        <Text color={'#1E2122'} size={25} weight={900}>ZuriChat</Text>
                    </div>
                </div>
                <Paper className={classes.form} radius={0}>
                    <Title order={2} className={classes.title} align="center" mt="md" mb={20}>
                        Welcome back
                    </Title>
                    <TextInput placeholder="name@workemail.com" size="md" mb={20} autoComplete='false' />
                    <PasswordInput placeholder="Enter password" mt="md" size="md" mb={20} autoComplete='false' />
                    <Text align="right" mb={20} size={12} color={'#626769'} >Forgot Password</Text>
                    <Button fullWidth mt="xl" size="md" bg={'#14466F'} mb={25} >
                        Login
                    </Button>
                    <Divider my="xs" label="OR" labelPosition="center" color='#B5BEC1' classNames={{ label: classes.label }}/>
                    <Button fullWidth mt="xl" size="md" bg={'transparent'}variant='outline' color='#14466F' mb={25} >
                        Login with Google
                    </Button>
                    <Text align="center" mt="md" color={'#373B3D'} weight={'700'} size={20} mb={25} >
                        New to Zurichat ?{' '}
                    <Anchor<'a'> href="#" weight={700} color={'#14466F'} onClick={(event) => event.preventDefault()}>
                        Sign Up
                    </Anchor>
                    </Text>
                </Paper>  
            </Flex>
            <Paper className={classes.formImage}>
            </Paper>
        </Flex>
    </div>
  );
}

export default Login