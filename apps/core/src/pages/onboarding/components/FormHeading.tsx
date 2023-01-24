import {
  createStyles,
  Text,
  Title
} from '@mantine/core';

interface Props {
    title: string;
    subtitle?: string;
    boldSubtitle?: string;
}

const useStyles = createStyles((theme) => ({
    title: {
        // color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
        fontSize: '40px',
        lineHeight: '50px',
        fontWeight: 700,
        color: '#1E2122',
    },
}));

const FormHeading: React.FC<Props> = ({ title, subtitle, boldSubtitle }) => {
    const { classes } = useStyles();
  return (
    <div>
        <Title order={2} className={classes.title} align="center" mt="md" mb={20}>
            {title}
        </Title>
        <Text
            align='center'
            mb={20}
            size={20}
            weight={400}
            color='#373B3D'
        >
            {subtitle}{' '}
            <Text display={'inline'} weight={700}>{boldSubtitle}</Text>
        </Text>
    </div>
  )
}

export default FormHeading