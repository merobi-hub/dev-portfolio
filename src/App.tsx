import { Nav, NavItem, NavLink, Col, Row, Container } from 'reactstrap';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import karmaPic from './assets/images/karma_typewriter.webp';
import negKarmaPic from './assets/images/neg_karma_typewriter.webp';
import olBug from './assets/images/ol-bug.png';
import ReactGA from 'react-ga4';
import CookieConsent from 'react-cookie-consent';
import Resume from './assets/files/DevAdv_08112025_ATS_web.pdf';
import { createContext, useState, useRef } from 'react';
import './App.css?inline';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Button from '@mui/material/Button';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Projects } from './projects.tsx';
import Grid from '@mui/material/Grid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import emailjs from '@emailjs/browser';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const ThemeContext = createContext();

type FormData = {
    name: string;
    email: string;
    message: string;
};

const darkTheme = {
    typography: {
        fontFamily: 'Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace',
    },
    palette: {
        background: '#000000',
        color: '#FFFFFF',
        border: '#FFFFFF',
        shadow: '0px 5px 10px -5px rgba(255, 255, 255, 1.0)',
    },
    breakpoints: {
        values: {
            sm: 600,
        },
    },
}

const lightTheme = {
    typography: { 
        fontFamily: 'Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace',
    },
    palette: {
        background: '#FFFFFF',
        color: '#000000',
        border: '#000000',
        shadow: '0px 5px 10px -5px rgba(0, 0, 0, 1.0)',
    },
    breakpoints: {
        values: {
            sm: 600,
        },
    },
}

const schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email(),
    message: yup.string().required(),
});


export default function App() {
    const [theme, changeTheme] = useState(darkTheme);
    const switchTheme = (currMode) => {
        if (currMode === darkTheme) { 
            changeTheme(lightTheme);
        } else { 
            changeTheme(darkTheme);
    }};
    const borderCss = '5px solid '+theme.palette.border;
    const cssString = '1px solid '+theme.palette.border;
    const [items, setItems] = useState(Projects);
    const projectCategories = [...new Set(Projects.map((val) => val.category))];
    const [cat, setCat] = useState<string>('');
    const [isHovered, setIsHovered] = useState(false);
    const handleMouseEnter = () => {
        setIsHovered(true);
    };
    const handleMouseLeave = () => {
        setIsHovered(false);
    };
    const projectsLen = Projects.length;
    const itemsLen = items.length;
    const FilterItem = (currCat) => {
        const selection = Projects.filter((val) => {
            // const key = index;
            setCat(currCat);
            return String(val.category) === currCat;
        });
        if (currCat === 'all') {
            setItems(Projects); 
        } else {
            setItems(selection);
    }};
    const { register, formState: { errors } } = useForm<FormData> ({
        resolver: yupResolver(schema)
    });
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_ofbf6mt', 'template_58ca9cw', form.current, import.meta.env.REACT_APP_EMAILJS)
            .then(function(response) {
            console.log('SUCCESS!', response.text);
            // Redirect to home
            return <Navigate to='/' replace={true} />;
            }, function(error) {
            console.log('FAILED...', error.text);
            });
    }
    const LoadCookieConsent = () => {
      return (
        <>
        <CookieConsent 
          enableDeclineButton 
          buttonText={'Accept'}
          declineButtonText={'Decline'}
          onAccept={() => {
            ReactGA.initialize(
              'G-R4RZ145T3T', {
                gaOptions: {
                  cookie_flags: 'SameSite=none; Secure'
                }
              }
            );
          }}
          onDecline={() => {
            alert('Cookie preferences saved.');
          }}
          style={{ fontFamily: theme.typography.fontFamily, position: 'fixed', top: '92%' }}
        >
          This website uses cookies.
        </CookieConsent>
        </>
      );
    }
    
    return (
        <ThemeContext.Provider value={{ theme }}>
            <div style={{ backgroundColor: theme.palette.background, width: '100%', margin: 0, padding: 0 }}>
                <div style={{ color: theme.palette.color, marginLeft: '94vw', marginTop: '1.5vh', zIndex: 11, position: 'fixed' }}>
                    <a style={{ textDecoration: 'None'}} href="https://openlineage.io/">
                        <Avatar src={olBug} sx={{ height: '2.5vh' }}/>
                    </a>
                </div>
                <div style={{ color: theme.palette.color, marginLeft: '97vw', marginTop: '1.3vh', zIndex: 11, position: 'fixed' }}>
                    {theme === darkTheme ? 
                        <LightModeIcon sx={{ cursor: 'pointer' }} onClick={() => switchTheme(theme)} /> :
                        <DarkModeIcon sx={{ cursor: 'pointer' }} onClick={() => switchTheme(theme)} />
                    }
                </div>
                <div className='nav-main-div' style={{ 
                    zIndex: 10,
                    display: 'flex', 
                    width: '100%',
                    borderBottom: cssString,
                    position: 'fixed', 
                    height: 50,
                    overflow: 'hidden',
                    backgroundColor: theme.palette.background,
                    opacity: 1,
                    boxShadow: theme.palette.shadow,
                }}>
                    <Nav style={{ width: '100%' }}>
                        <NavItem className='navitem'>
                            <NavLink style={{ color: theme.palette.color, textDecoration: 'None' }}
                                href="/#home"
                            >
                                <Button>
                                    <HomeFilledIcon style={{ color: theme.palette.color }}/>
                                </Button>
                            </NavLink>
                        </NavItem>
                        <NavItem className='navitem'>                 
                            <NavLink style={{ color: theme.palette.color, textDecoration: 'None' }}
                                href="/#portfolio"
                            >
                                <Button>                    
                                    <Typography className='btn-typo' style={{ 
                                        color: theme.palette.color, 
                                        fontFamily: theme.typography.fontFamily, 
                                        textTransform: 'uppercase' 
                                    }}>
                                        Portfolio
                                    </Typography>   
                                </Button>
                            </NavLink>
                        </NavItem>
                        <NavItem className='navitem'>                    
                            <NavLink style={{ color: theme.palette.color, textDecoration: 'None' }}
                                href="/#contact"
                            >
                                <Button>                    
                                    <Typography className='btn-typo' style={{ 
                                        color: theme.palette.color, 
                                        fontFamily: theme.typography.fontFamily, 
                                        textTransform: 'uppercase' 
                                    }}>
                                        Contact
                                    </Typography>   
                                </Button>
                            </NavLink>
                        </NavItem>
                    </Nav>
                </div>
                <div id='home' className='main-div' style={{ backgroundColor: theme.palette.background, width: '100%', margin: 0, padding: 0 }}>
                    <Container style={{ zIndex: 0 , height: '100vh', width: '100vw', marginLeft: 0, marginRight: 0, paddingLeft: 0, paddingRight: 0   }}>
                        <Row style={{ height: '100vh', width: '100vw' }}>
                            <Col md='6'>
                                <Avatar
                                    alt='Typewriter pic' 
                                    sx={{ 
                                        width: 400, 
                                        height: 400,
                                        top: '30vh',
                                        left: '25vw',
                                        border: borderCss,
                                    }}                                    
                                    onMouseEnter={() => handleMouseEnter()} 
                                    onMouseLeave={() => handleMouseLeave()}
                                    src={ isHovered ? negKarmaPic : karmaPic }
                                />
                            </Col>
                            <Col md='6'>
                                <Row style={{ height: 35, position: 'relative', top: '43vh' }}>
                                    <Col md='12' className='text-left align-items-bottom'>
                                        <Typography style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color, fontSize: '3.0rem' }}>Michael Robinson</Typography>
                                    </Col>
                                </Row>
                                <Row style={{ height: 35, position: 'relative', top: '45.5vh' }}>
                                    <Col md='12' className='align-items-top text-left'>
                                        <Typography style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color, fontSize: '1.37rem' }}>Developer and Learning Technologist</Typography>
                                    </Col>
                                </Row>
                                <Row style={{ height: 400, position: 'relative', top: '46vh' }}>
                                    <Col md='2' className='align-items-top justify-items-right'>
                                        <a href='https://github.com/merobi-hub' style={{ color: theme.palette.color }}>
                                            <GitHubIcon sx={{ marginTop: 0, fontSize: '150%' }} />
                                        </a>
                                    </Col>
                                    <Col md='2' className='align-items-top justify-items-center'>
                                        <a href='https://www.linkedin.com/in/michael-robinson/' style={{ color: theme.palette.color }}>
                                            <LinkedInIcon sx={{ marginTop: 0, fontSize: '150%' }} />
                                        </a>
                                    </Col>
                                    <Col md='2' className='align-items-top justify-items-center'>
                                        <a href={Resume} download='Robinson_resume' style={{ color: theme.palette.color }}>
                                            <DownloadForOfflineIcon sx={{ marginTop: 0, fontSize: '150%' }} />
                                        </a>
                                    </Col>
                                    <Col md='2' className='align-items-top justify-items-center'>
                                        <a href='mailto:merobi@gmail.com' style={{ color: theme.palette.color }}>
                                            <EmailIcon sx={{ marginTop: 0, fontSize: '150%' }}/>
                                        </a>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <LoadCookieConsent />
                    <div id='portfolio' style={{ scrollMarginTop: 70, padding: 0, marginTop: 25, position: 'relative', width: '100%' }}>
                        <div style={{ display: 'flex', width: '100%', padding: 0, position: 'relative' }}>
                            <div style={{ display: 'flex', zIndex: 0, margin: '0 auto', padding: 0, width: '100vw' }}>
                                <div style={{ width: '100%', zIndex: 1, marginBottom: 150 }}>
                                    <Container className='container' style={{ marginTop: 75, minWidth: '70vw', justifyContent: 'space-evenly' }}>
                                        <Row>
                                            <Col md='1'>
                                                <Button 
                                                    style={ projectsLen === itemsLen ? { 
                                                        color: theme.palette.color, 
                                                        padding: '2px 0px 4px', 
                                                        borderColor: theme.palette.border, 
                                                        fontWeight: 'bold',
                                                        fontFamily: theme.typography.fontFamily
                                                    } : { 
                                                        color: theme.palette.color, 
                                                        padding: '2px 0px 4px',
                                                        fontFamily: theme.typography.fontFamily
                                                        } 
                                                    }
                                                    onClick={() => FilterItem('all')}
                                                    size='small'
                                                    variant='outlined'
                                                >
                                                ALL
                                                </Button>
                                              </Col>
                                                {projectCategories.map((val, index) => (
                                                    <Col med='1' key={index}>
                                                        <Button
                                                            style={ val === cat ? { 
                                                                color: theme.palette.color, 
                                                                padding: '2px 0px 4px', 
                                                                borderColor: theme.palette.border, 
                                                                fontWeight: 'bold',
                                                                fontFamily: theme.typography.fontFamily
                                                            } : { 
                                                                color: theme.palette.color, 
                                                                padding: '2px 0px 4px',
                                                                fontFamily: theme.typography.fontFamily
                                                            }}
                                                            onClick={() => FilterItem(val)}
                                                            size='small'
                                                            variant='outlined'
                                                        >
                                                            {val}
                                                        </Button>
                                                    </Col>
                                                ))}
                                            
                                        </Row>
                                    </Container>
                                    <Grid container margin='auto' rowSpacing={8} columnSpacing={4} paddingBottom={4} width='85%'>
                                        {items.map((project, index) => (
                                            <Grid marginX='auto' justifyItems='top'>
                                                <div key={index} md='12' sm className='col d-flex' style={{ marginTop: 60, justifyContent: 'space-evenly' }}>
                                                    <Card
                                                        variant='outlined'
                                                        style={{ minWidth: 500, maxWidth: 500, minHeight: 550, marginTop: 7, backgroundColor: theme.palette.background, color: theme.palette.color, borderColor: theme.palette.border }}
                                                    >                                  
                                                        <CardMedia 
                                                            style={{ height: '20em'}}
                                                            image={project.img_path}
                                                            title='Screenshot of app'
                                                        />
                                                        <CardContent>
                                                            <Typography style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color, fontSize: 14, borderWidth: '0px 0px 1px 0px', borderStyle: 'solid', borderColor: 'light gray' }}>
                                                                {project.description_general}
                                                            </Typography>
                                                            <Typography variant='h5' component='h2' style={{ fontFamily: theme.typography.fontFamily }}>
                                                                {project.title}
                                                            </Typography>
                                                            <Typography style={{ color: '#9E9E9E', marginBottom: 2, fontFamily: theme.typography.fontFamily }}>
                                                                {project.description_specific}
                                                            </Typography>
                                                            <Typography variant='body2' component='p' style={{ fontFamily: theme.typography.fontFamily }}>
                                                                {project.tools_1}
                                                                <br />
                                                                {project.tools_2}
                                                            </Typography>
                                                        </CardContent>
                                                        <CardActions>
                                                            {Object.entries(project.links).map(([k, v]) => (
                                                                <Button
                                                                    key={v}
                                                                    style={{ color: theme.palette.color, fontFamily: theme.typography.fontFamily }} 
                                                                    size='small' 
                                                                    href={v}
                                                                >
                                                                    <Typography style={{ color: theme.palette.color, fontFamily: theme.typography.fontFamily }}>
                                                                        {k}
                                                                    </Typography>
                                                                </Button>
                                                            ))}
                                                        </CardActions>
                                                    </Card>
                                                </div>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='contact'>
                        <div>
                            <div>
                                <div style={{ marginTop: 140, paddingBottom: 140, backgroundColor: theme.palette.background }}>
                                    <div className='justify-content-md-center' style={{ width: '100%' }}>
                                        <div className='col display-flex' md='12'>
                                            <Card variant='outlined' sx={{ marginLeft: 'auto', marginRight: 'auto', width: 600, borderWidth: '2px', borderColor: theme.palette.border }}>
                                                <CardContent sx={{ backgroundColor: theme.palette.background, color: theme.palette.color }}>
                                                    <form ref={form} onSubmit={sendEmail}>
                                                        <div style={{ marginBottom: 20 }}>
                                                            <Typography fontFamily={theme.typography.fontFamily} variant='h4' component='h2'>
                                                                Contact
                                                            </Typography>
                                                        </div>
                                                        <div style={{ marginBottom: 20 }}>
                                                            <Typography fontFamily={theme.typography.fontFamily} variant='h5' component='h2'>
                                                                <label htmlFor='from_name'>Name</label>
                                                                <br />
                                                                <input
                                                                    style={{ width: '31.5vw', fontFamily: theme.typography.fontFamily, backgroundColor: theme.palette.background, color: theme.palette.color }}
                                                                    id='from_name'
                                                                    placeholder='name'
                                                                    {...register('name', { required: true, maxLength: 60, pattern: '/^[ A-Za-z]+$/i' })} 
                                                                /> 
                                                                { errors.name?.message }                                           
                                                            </Typography>
                                                        </div>
                                                        <div style={{ marginBottom: 20 }}>
                                                            <Typography fontFamily={theme.typography.fontFamily} variant='h5' component='h2'>
                                                                <label htmlFor='from_email'>E-mail</label>
                                                                <br />
                                                                <input
                                                                    style={{ width: '31.5vw', fontFamily: theme.typography.fontFamily, backgroundColor: theme.palette.background, color: theme.palette.color }}
                                                                    id='from_email'
                                                                    type='email'
                                                                    placeholder='e-mail address' 
                                                                    {...register('email', { required: true })} 
                                                                />
                                                                { errors.email?.message }
                                                            </Typography>
                                                        </div>
                                                        <div style={{ marginBottom: 20 }}>
                                                            <Typography  variant='h5' component='h2'>
                                                                <label htmlFor='message'>Message</label>
                                                                <br />
                                                                <textarea
                                                                    style={{ width: '31.5vw', height: '20vh', fontFamily: theme.typography.fontFamily, backgroundColor: theme.palette.background, color: theme.palette.color }}
                                                                    id='message'
                                                                    placeholder='message'
                                                                    {...register('message', { required: true, maxLength: 1500, pattern: '/^[ A-Za-z]+$/i' })}
                                                                />
                                                                { errors.message?.message }
                                                            </Typography>
                                                        </div>
                                                        <input
                                                            type='submit'
                                                            className='btn btn-primary'
                                                            value='Submit'
                                                            style={{ fontFamily: theme.typography.fontFamily }}                                            
                                                        />
                                                    </form>
                                                </CardContent>
                                            </Card>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <script type='text/javascript'
                                src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'>
                            </script>
                            <script type='text/javascript'>
                                emailjs.init(process.env.EMAILJS!);
                            </script>
                        </div>
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
