import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Button,
  Text,
  Anchor,
  Divider,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useLoginUserMutation } from '@zuri/utilities';
import FormTitle from '../../components/FormTitle';

const useStyles = createStyles((theme) => ({

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

    label: {
        fontSize: '20px',
        fontWeight: 700,
    },

    inputField: {
        backgroundColor: 'transparent',
        color: 'black'
    },

    passwordIcon: {
        color: 'black'
    },

    outlineBtn: {
        border: '1px solid #14466F',
        color: '#14466F'
    },

    link: {
        color: '#14466F'
    }
}));

export const LoginPage: React.FC = () => {

  const { classes } = useStyles();
  const {
    form,
    inputField,
    passwordIcon,
    label,
    outlineBtn,
    link
  } = classes

  const LoginForm = useForm({
    initialValues: {
        email: '',
        password: ''
    },

    validate: {
        password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
        email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  })

  const [ loginUser, { isLoading, isError, error, isSuccess }] = useLoginUserMutation();

//   const handleSubmit = LoginForm.onSubmit(
//     async() => {
//         try {
//             const payload = await loginUser(LoginForm.values).unwrap();
//             console.error('fulfilled', payload)
//         } catch (error) {
//             console.error('rejected', error);
//         }
//     }
//   )

  return (
    <Paper className={form} radius={0}>
        <FormTitle
            title='Welcome back'
        />
        <form>
            <TextInput
                placeholder="name@workemail.com"
                size="md"
                mb={20}
                autoComplete='false'
                classNames={{ input: inputField}}
                {...LoginForm.getInputProps('email')}
            />
            <PasswordInput
                placeholder="Enter password"
                mt="md"
                size="md"
                mb={20}
                autoComplete='false'
                classNames={{ input: classes.inputField, visibilityToggle: passwordIcon }}
                {...LoginForm.getInputProps('password')}
            />
            <Text align="right" mb={20} size={12} color={'#626769'} >Forgot Password</Text>
            <Button fullWidth mt="xl" size="md" bg={'#14466F'} mb={25} >
                Login
            </Button>
        </form>
        <Divider my="xs" label="OR" labelPosition="center" labelProps={{ color: '#373B3D' }} color='#B5BEC1' classNames={{ label: label }}/>
        <Button fullWidth mt="xl" size="md" variant='outline' color='#14466F' mb={25} className={ outlineBtn } >
            Login with Google
        </Button>
        <Text align="center" mt="md" color={'#373B3D'} weight={'700'} size={20} mb={25} >
            New to Zurichat ?{' '}
        <Anchor<'a'> href="#" weight={700} color='#14466F' onClick={(event) => event.preventDefault()} className={ link }>
            Sign Up
        </Anchor>
        </Text>
    </Paper>
  );
}

export default LoginPage;