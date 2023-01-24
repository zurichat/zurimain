import {
  Paper,
  createStyles,
  TextInput,
  Button,
  Text,
  Anchor,
  Divider,
  Flex
} from '@mantine/core';
import FormHeading from '../components/FormHeading';

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
        maxWidth: '500px',
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
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 700,
        color: '#1E2122',
        [`@media (max-width: ${theme.breakpoints.sm}px)`]: {
            fontSize: '28px',
        },
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
    },

    fullwidth: {
        width: '100%'
    },

    urlField: {
        width: '100%',
        maxWidth: '270px',
        backgroundColor: 'transparent',
        color: '#14466F'
    },

    outlineBtn: {
        border: '1px solid #14466F',
        color: '#14466F'
    },

    link: {
        color: '#14466F'
    }
}));

const Login = () => {
  const { classes } = useStyles();
  return (
    <Paper className={classes.form} radius={0}>
        <FormHeading
            title='Sign in to your workspace'
            subtitle='Enter your workplace'
            boldSubtitle='Zurichat URL'
        />
        <Flex
            justify={'start'}
            align={'center'}
            gap={'10px'}
            className={classes.fullwidth}
        >
            <TextInput placeholder="name@workemail.com" size="md" autoComplete='false' classNames={{ input: classes.urlField}} />
            <Text
                weight={700}
                size={20}
                color='#373B3D'
            >
                .zurichat.com
            </Text>
        </Flex>
        <Button fullWidth mt="xl" size="md" bg={'#14466F'} mb={25} >
            Continue
        </Button>
        <Text align="center" mt="md" color={'#373B3D'} weight={'400'} size={16} mb={25} >
            Don’t know your workspace URL ?{' '}
            <Anchor<'a'> href="#" weight={700} color={'#14466F'} onClick={(event) => event.preventDefault()} className={ classes.link }>
                Find your workspace
            </Anchor>
        </Text>
        <Divider my="xs" label="OR" labelPosition="center" labelProps={{ color: '#373B3D' }} color='#B5BEC1' classNames={{ label: classes.label }}/>
        <Button fullWidth mt="xl" size="md" color='#14466F' variant='outline' mb={25} className={ classes.outlineBtn } >
            Create A New Workspace
        </Button>
    </Paper>
  );
}

export default Login