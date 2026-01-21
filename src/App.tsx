import { createContext, useState, useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Nav, NavItem, NavLink, Col, Row, Container } from 'reactstrap';
import { Navigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import * as yup from 'yup';
import Avatar from '@mui/material/Avatar';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CookieConsent from 'react-cookie-consent';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';
import EmailIcon from '@mui/icons-material/Email';
import emailjs from '@emailjs/browser';
import Fade from '@mui/material/Fade';
// import { storage } from "./firebase.ts";
import GitHubIcon from '@mui/icons-material/GitHub';
import Grid from '@mui/material/Grid';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import LightModeIcon from '@mui/icons-material/LightMode';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Modal from '@mui/material/Modal';
import { motion } from "motion/react"
import ReactGA from 'react-ga4';
import Typography from '@mui/material/Typography';
import { useAnimationFrame } from "motion/react"
import { yupResolver } from '@hookform/resolvers/yup';

import './App.css?inline';
import karmaPic from './assets/images/karma_typewriter.webp';
import negKarmaPic from './assets/images/neg_karma_typewriter.webp';
import olBug from './assets/images/ol-bug.png';
import { Projects } from './projects.tsx';
import Resume from './assets/files/DevAdv_08112025_ATS_web.pdf';
import cc from './assets/images/creative-commons-logo-png-transparent.png';
import ccrainbow from './assets/images/creativecommonsrainbow.png';

import amberWavesPic from './assets/images/amber_waves.webp';
import antalyaTemplePic from './assets/images/antalya_temple.webp';
import armineAdPic from './assets/images/armine_ad.webp';
import balloonPic from './assets/images/balloon.webp';
import blueDoorPic from './assets/images/blue_door.webp';
import blurryParadeCarPic from './assets/images/blurry_parade_car.webp';
import bosphorusSugarCubesPic from './assets/images/bosphorus_sugar_cubes.webp';
import brokenWagonPic from './assets/images/broken_wagon.webp';
import breadShopPic from './assets/images/breadShop.webp';
import brideGroomWalkPic from './assets/images/bride_groom_walk.webp'
import busWindowPic from './assets/images/bus_window.webp';
import cafeCatsSusGuyPic from './assets/images/cafe_cats_sus_guy.webp';
import calligraphyPic from './assets/images/calligraphy.webp';
import camiBlueTarpPic from './assets/images/cami_blue_tarp.webp';
import camiFolksIntPic from './assets/images/cami_folks_int.webp';
import carCowPic from './assets/images/car_cow.webp';
import caveMotionPic from './assets/images/cave_motion.webp';
import cherokeeRestSignPic from './assets/images/cherokee_rest_sign.webp';
import cherokeeTradingPic from './assets/images/cherokee_trading.webp';
import downtownLaBwPic from './assets/images/downtown_la_bw.webp';
import fotoShopPic from './assets/images/foto_shop.webp';
import futbolCelebrationPic from './assets/images/futbol_celebration.webp';
import futbolFansCarPic from './assets/images/futbol_fans_car.webp';
import galataBirdsPic from './assets/images/galata_birds.webp';
import gutterSmokePic from './assets/images/gutter_smoke.webp';
import happyCouplePic from './assets/images/happy_couple.webp';
import hotelNoticePic from './assets/images/hotel_notice.webp';
import hungryCatPic from './assets/images/hungry_cat.webp';
import iskenderKabobWindowPic from './assets/images/iskender_kabob_window.webp';
import kocReflectionsPic from './assets/images/koc_reflections.webp';
import malibuTemplePic from './assets/images/malibu_temple.webp';
import miamiMuralPic from './assets/images/miami_mural.webp';
import mocaPedPic from './assets/images/moca_ped.webp';
import rightWingRallyPic from './assets/images/right_wing_rally.webp';
import seagullCloseupPic from './assets/images/seagull_closeup.webp';
import seasideRuinPic from './assets/images/seaside_ruin.webp';
import soloBoatPic from './assets/images/solo_boat.webp';
import streetCarWiresPic from './assets/images/streetcar_wires.webp';
import taksimSuspiciousCouplePic from './assets/images/taksim_suspicious_couple.webp';
import taksimInterestingShopkeeperPic from './assets/images/taksim_interesting_shopkeeper.webp';
import taksimHipsterBaitPic from './assets/images/taksim_hipster_bait.webp';
import taksimShopHighAnglePic from './assets/images/taksim_shop_high_angle.webp';
import taksimHungryDogPic from './assets/images/taksim_hungry_dog.webp';
import touristPenPic from './assets/images/tourist_pen.webp';
import touristsScarvesPic from './assets/images/tourists_scarves.webp';
import trainFacePic from './assets/images/train_face.webp';
import treeHillPic from './assets/images/tree_hill.webp';
import wallSupporterPic from './assets/images/wall_supporter.webp';

const bgArray: Array = [
    amberWavesPic,
    antalyaTemplePic,
    armineAdPic,
    balloonPic,
    blueDoorPic,
    blurryParadeCarPic,
    bosphorusSugarCubesPic,
    breadShopPic,
    brideGroomWalkPic,
    brokenWagonPic,
    busWindowPic,
    cafeCatsSusGuyPic,
    calligraphyPic,
    camiBlueTarpPic,
    camiFolksIntPic,
    carCowPic,
    caveMotionPic,
    cherokeeRestSignPic,
    cherokeeTradingPic,
    downtownLaBwPic,
    futbolCelebrationPic,
    futbolFansCarPic,
    fotoShopPic,
    galataBirdsPic,
    gutterSmokePic,
    happyCouplePic,
    hotelNoticePic,
    hungryCatPic,
    iskenderKabobWindowPic,
    kocReflectionsPic,
    malibuTemplePic,
    miamiMuralPic,
    mocaPedPic,
    rightWingRallyPic,
    seagullCloseupPic,
    seasideRuinPic,
    soloBoatPic,
    streetCarWiresPic,
    taksimHipsterBaitPic,
    taksimHungryDogPic,
    taksimSuspiciousCouplePic,
    taksimInterestingShopkeeperPic,
    taksimShopHighAnglePic,
    touristPenPic,
    trainFacePic,
    treeHillPic,
    wallSupporterPic,
    touristsScarvesPic,
];    

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
        color: '#fff',
        border: '#fff',
        navShadow: '0px 5px 10px -5px rgba(255, 255, 255, 1.0)',
        avatarShadow: '',
    },
    breakpoints: {
        values: {
            sm: 600,
        },
    },
    cardType: 'outlined'
}

const lightTheme = {
    typography: { 
        fontFamily: 'Consolas, Andale Mono WT, Andale Mono, Lucida Console, Lucida Sans Typewriter, DejaVu Sans Mono, Bitstream Vera Sans Mono, Liberation Mono, Nimbus Mono L, Monaco, Courier New, Courier, monospace',
    },
    palette: {
        background: '#fff',
        color: '#000000',
        border: '#000000',
        navShadow: '0px 5px 10px -5px rgba(0, 0, 0, 1.0)',
        avatarShadow: '0px 6px 6px -3px rgba(0, 0, 0, 0.2), 0px 10px 14px 1px rgba(0, 0, 0, 0.14), 0px 4px 18px 3px rgba(0, 0, 0, 0.12)',
    },
    breakpoints: {
        values: {
            sm: 600,
        },
    },
    cardType: 'elevation'
}

// function DiscoBg() {
//     const selectBg = () => {
//         const hasRun = useRef(false);
//         if (!hasRun.current) {
//             const randomIndex = Math.floor(Math.random() * bgArray.length);
//             const randomBg = bgArray[randomIndex];
//             hasRun.current = true;
//             return (randomBg);
//         }
//     };
//     const [discoBgIsSet, setDiscoBg] = useState(true);
//     const [discoOpac, setDiscoOpac] = useState(true);
//     function handleClick() {         
//         setDiscoBg(false);    
//         resizeDiv();
//     }
//     function delay(ms) {
//         return new Promise(resolve => setTimeout(resolve, ms));
//     }
//     async function resizeDiv() {
//         await delay(1000);
//         setDiscoOpac(false);
//     }
//     return (           
//         <motion.div 
//             onClick={handleClick}
//             id="disc-bg"
//             className="disco-bg-outer"
//             style={{
//                 backgroundSize: 'cover',
//                 backgroundRepeat: 'no-repeat',
//                 backgroundColor: '#000',
//                 backgroundImage: `url(${selectBg()})`, 
//                 position: 'fixed', 
//                 height: !discoOpac ? 0 : '100vh', 
//                 width: '100vw', 
//                 zIndex: 300,
//             }}
//             initial={{ opacity: 1 }}
//             animate={{ opacity: !discoBgIsSet ? 0 : 1 }}
//             transition={{ duration: 1 }}
//         />
//     );
// }



export default function App() {
    const [showFoto, setShowFoto] = useState(false);
    const [theme, changeTheme] = useState(darkTheme);
    const [isHovered, setIsHovered] = useState(false);
    const [navIsHovered, navSetHovered] = useState(false);
    function handleMouseEnterAvatar() {
        setIsHovered(true);
    };
    function handleMouseLeaveAvatar() {
        setIsHovered(false);
    };
    function switchTheme(currMode) {
        if (currMode === darkTheme) { 
            changeTheme(lightTheme);
        } else { 
            changeTheme(darkTheme);
    }};
    const borderCss = '5px solid '+theme.palette.border;
    const cssString = '1px solid '+theme.palette.border;

    function NavComponent() {
        const [isFotoHovered, setFotoHovered] = useState(false);
        const handleMouseEnterHover = () => {
            setFotoHovered(true);
        }
        const handleMouseLeaveHover = () => {
            setFotoHovered(false);
        }
        const [isScrolled, setScrolled] = useState(false);
        useEffect(() => {
            const handleScroll = () => {
                if (window.scrollY > 50) {
                    setScrolled(true);
                } else {
                    setScrolled(false);
                }
            };
            window.addEventListener('scroll', handleScroll);
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        }, []);
        const [navIsHovered, navSetHovered] = useState(false);
        function navHandleMouseEnter() {
            navSetHovered(true);
        };
        function navHandleMouseLeave() {
            navSetHovered(false);
        };
        return (
            <>
                <div className='nav-main-div' 
                    onMouseEnter={() => navHandleMouseEnter()} 
                    onMouseLeave={() => navHandleMouseLeave()}
                    style={{ 
                        zIndex: 10,
                        display: 'flex', 
                        width: '100vw',
                        paddingLeft: '0.05vw',
                        borderBottom: cssString,
                        position: 'fixed', 
                        height: '5vh',
                        overflow: 'hidden',
                        backgroundColor: theme.palette.background,
                        opacity: navIsHovered ? 1 : isScrolled ? 0.5 : 1,
                        boxShadow: navIsHovered && isScrolled ? theme.palette.navShadow : isScrolled ? theme.palette.navShadow : ''
                    }}
                >
                    <Nav style={{ width: '100%', display: 'flex', height: '100%' }}>
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
                                    <Typography 
                                        className='btn-typo' 
                                        style={{ 
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
                                    <Typography 
                                        className='btn-typo' 
                                        style={{ 
                                            color: theme.palette.color, 
                                            fontFamily: theme.typography.fontFamily, 
                                            textTransform: 'uppercase' 
                                        }}>
                                        Contact
                                    </Typography>   
                                </Button>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ marginLeft: '83.5vw', index: 11, position: 'fixed' }}>
                            <NavLink
                                style={{ color: theme.palette.color, textDecoration: 'None' }}
                                href="/#foto"
                            >
                                <nav 
                                    onMouseEnter={handleMouseEnterHover}
                                    onMouseLeave={handleMouseLeaveHover}
                                >
                                    <Button 
                                        onClick={()=>setShowFoto(true)}
                                        // style={{ borderStyle: !isFotoHovered ? '' : 'solid', borderWidth: '1px', borderColor: theme.palette.border }}
                                    >

                                        <Typography
                                            className='btn-typo'
                                            style={{
                                                display: !isFotoHovered ? 'none' : '',
                                                color: theme.palette.color,
                                                fontFamily: theme.typography.fontFamily,
                                                textTransform: 'uppercase',
                                            }}>
                                            Foto
                                        </Typography>
                                    </Button>
                                </nav>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{marginLeft: '87.5vw', index: 11, position: 'fixed', marginTop: 'auto', marginBottom: 'auto' }}>
                            <NavLink style={{ color: theme.palette.color, textDecoration: 'None' }}>
                                <SpecsModal/>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ display: 'flex', height: '5vh', alignItems: 'center', marginTop: 'auto', marginBottom: 'auto', color: theme.palette.color, marginLeft: '92.5vw', zIndex: 11, position: 'fixed' }}>
                            <NavLink href="https://openlineage.io/" style={{ textDecoration: 'None' }}>
                                <Avatar src={olBug} sx={{ height: '2.5vh' }}/>
                            </NavLink>
                        </NavItem>
                        <NavItem style={{ display: 'flex', height: '5vh', alignItems: 'center', color: theme.palette.color, marginTop: 'auto', marginBottom: 'auto', marginLeft: '97vw', zIndex: 11, position: 'fixed' }}>
                            {theme === darkTheme ? 
                                <LightModeIcon sx={{ cursor: 'pointer' }} onClick={() => switchTheme(theme)} /> :
                                <DarkModeIcon sx={{ cursor: 'pointer' }} onClick={() => switchTheme(theme)} />
                            }
                        </NavItem>
                    </Nav>
                </div>
            </>
        );
    }

    function CopyLeftModal() {
        const hasExec = useRef(false);    
        const [copyModalIsOpen, copyModalSet] = useState(true);
        const handleClick = () => {
            copyModalSet(false);
            hasExec.current = true;
        }
        const borderStr = '1px solid '+theme.palette.color
        if (!hasExec.current) {
            return (
                <>  
                    <div 
                        id="copy-left-div"
                        style={{
                            backgroundColor: theme.palette.background,
                            position: 'absolute',
                            display: !copyModalIsOpen ? 'none' : 'inherit', 
                            marginTop: '5vh',
                            width: '100vw',
                            opacity: 1,
                            borderBottom: borderStr,
                            boxShadow: 24,
                            color: theme.palette.color,
                            zIndex: 9,
                            height: '5vh',
                            lineHeight: '5vh',
                            paddingLeft: '1.2vw',
                            fontFamily: theme.typography.fontFamily,
                        }}>
                        <span><img style={{ height: '3.6vh', width: 'auto' }} src={ccrainbow}/></span> Photography CC BY-SA Michael Robinson 2025
                    </div>
                    <div style={{ width: '100vw', display: 'flex', height: '4.5vh', justifyContent: 'right' }}>
                        <Button
                            id="copy-btn"
                            style={{
                                zIndex: 9,
                                marginTop: '5.1vh',
                                position: 'absolute',
                                width: '3.8vw',
                                height: '4.5vh',
                                opacity: 1,
                                // backgroundColor: theme.palette.background,
                                // borderColor: theme.palette.color,
                                // borderWidth: '1px',
                                // borderStyle: 'solid',
                                color: theme.palette.color,
                                fontFamily: theme.typography.fontFamily,
                                fontSize: 'large',
                                marginRight: '0.4vw',
                            }}
                            onClick={handleClick}
                        >
                        X
                        </Button>
                    </div>
                </>
            );
        }
    }

    function SpecsModal() {
        const [modalIsOpen, modalSetOpen] = useState(false);
        const modalStyle = {
          position: 'absolute',
          top: '5vh',
          right: '0%',
          width: 500,
          bgcolor: 'background.paper',
          border: '2px solid #000',
          boxShadow: 24,
          color: '#000',
          p: 4,
          opacity: .50
        };
            return (
                <>
                    <div className="modal-div">
                        <Button 
                            style={{ color: theme.palette.color, fontFamily: theme.typography.fontFamily, fontSize: '1rem' }}
                            onClick={() => modalSetOpen(true)}
                        >
                            <Typography
                                className='btn-typo'
                                style={{
                                    color: theme.palette.color,
                                    fontFamily: theme.typography.fontFamily,
                                    textTransform: 'uppercase'
                                }}>
                                    About
                            </Typography>
                        </Button>
                        <Modal
                            disablePortal
                            open={modalIsOpen}
                            onClose={() => modalSetOpen(false)}
                            closeAfterTransition
                            slots={{ backdrop: Backdrop }}
                            slotProps={{
                              backdrop: {
                                timeout: 500,
                              },
                            }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Fade in={modalIsOpen}>
                                <Box sx={modalStyle}>
                                    <span style={{ position: 'absolute', marginLeft: '83%', marginTop: '0' }}>
                                        <a href='https://github.com/merobi-hub/dev-portfolio' style={{ color: '#000' }}>
                                            <GitHubIcon sx={{ marginTop: 0, fontSize: '150%' }} />
                                        </a>
                                    </span>
                                  <Typography className='btn-typo' sx={{ fontFamily: theme.typography.fontFamily }}>
                                    Specs
                                  </Typography>
                                  <Typography id="modal-modal-description" sx={{ mt: 2, fontFamily: theme.typography.fontFamily }}>
                                    Language: TypeScript <br/> Framework: React 19 <br/> Bundler: Vite <br/> Hosting: Firebase <br/> FE Libraries: MaterialUI, Reactstrap, Motion <br/> Analytics: GA4 <br/> Email service: EmailJS API<br/>
                                  </Typography>
                                </Box>
                            </Fade>
                        </Modal>
                    </div>
                </>
            );
    }

    function Portfolio() {
        const itemsPerLoad = 4;
        const [items, setItems] = useState(Projects.slice(0, itemsPerLoad));
        const [nextIndex, setNextIndex] = useState(itemsPerLoad);
        const [hasMore, setHasMore] = useState(true);
        const projectCategories = [...new Set(Projects.map((val) => val.category))];
        const [cat, setCat] = useState<string>('');
        const projectsLen = Projects.length;
        const itemsLen = items.length;
        const handleLoadMore = () => {
            const newIndex = nextIndex + itemsPerLoad;
            const newVisibleItems = [...items, ...Projects.slice(nextIndex, newIndex)];
            setItems(newVisibleItems);
            setNextIndex(newIndex);
            if (newIndex >= Projects.length) {
                setHasMore(false);
            }
        };
        function FilterItem(currCat) {
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
        return (
            <>
                <div id='portfolio' style={{ backgroundColor: theme.palette.background, scrollMarginTop: 70, padding: 0, marginTop: 0, position: 'relative', width: '100%' }}>
                    <div style={{ display: 'flex', width: '100%', padding: 0, position: 'relative', backgroundColor: theme.palette.background }}>
                        <div style={{ display: 'flex', zIndex: 0, margin: '0 auto', padding: 0, width: '100vw', backgroundColor: theme.palette.background }}>
                            <div style={{ width: '100%', zIndex: 1, marginBottom: 150, backgroundColor: theme.palette.background }}>
                                <div style={{ textAlign: 'center' }}>
                                    <h1 style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color }}>Developer Portfolio</h1>
                                </div>
                                <Container className='container' style={{ marginTop: 75, minWidth: '70vw', justifyContent: 'space-evenly' }}>
                                    <Row>
                                        <Col md='1'>
                                            <Button 
                                                style={ projectsLen === itemsLen ? { 
                                                    color: theme.palette.color, 
                                                    padding: '2px 0px 4px', 
                                                    borderColor: theme.palette.border, 
                                                    fontWeight: 'bold',
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: '0.8vw'
                                                } : { 
                                                    color: theme.palette.color, 
                                                    padding: '2px 0px 4px',
                                                    fontFamily: theme.typography.fontFamily,
                                                    fontSize: '0.8vw'
                                                    } 
                                                }
                                                onClick={() => FilterItem('all')}
                                                size='small'
                                                variant={theme.cardType}
                                                elevation="10"
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
                                                            fontFamily: theme.typography.fontFamily,
                                                            fontSize: '0.8vw'
                                                        } : { 
                                                            color: theme.palette.color, 
                                                            padding: '2px 0px 4px',
                                                            fontFamily: theme.typography.fontFamily,
                                                            fontSize: '0.8vw'
                                                        }}
                                                        onClick={() => FilterItem(val)}
                                                        size='small'
                                                        variant={theme.cardType}
                                                        elevation="10"
                                                    >
                                                        {val}
                                                    </Button>
                                                </Col>
                                            ))}
                                        
                                    </Row>
                                </Container>
                                <Grid container margin='auto' rowSpacing={8} columnSpacing={4} paddingBottom={4} width='85%'>
                                    {items.map((project, index) => (
                                        <Grid marginX='auto' justifyItems='top' key={project.img_path}>
                                            <div md='12' sm className='col d-flex' style={{ marginTop: 60, justifyContent: 'space-evenly' }}>
                                                <Card
                                                    component={motion.div}
                                                    initial={{ scale: 0.95 }} 
                                                    animate={{ scale: 1 }}
                                                    variant={theme.cardType}
                                                    sx={{ 
                                                        minWidth: 500, 
                                                        maxWidth: 500, 
                                                        minHeight: 550, 
                                                        marginTop: 7, 
                                                        backgroundColor: theme.palette.background, 
                                                        color: theme.palette.color, 
                                                        borderColor: theme.palette.border,
                                                        borderWidth: '2px',
                                                        boxShadow: theme.palette.shadow,
                                                    }}
                                                    elevation='10'
                                                >                                  
                                                    <CardMedia 
                                                        sx={{ height: '20em'}}
                                                        image={project.img_path}
                                                        title='Screenshot of app'
                                                    />
                                                    <CardContent>
                                                        <Typography style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color, fontSize: 14, borderWidth: '0px 0px 1px 0px', borderStyle: 'solid', borderColor: '#ececec' }}>
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
                                {hasMore && (
                                    <div style={{ width: '100vw', display: 'flex', paddingTop: '4vh' }}>
                                        <Button 
                                            variant='outlined'
                                            onClick={handleLoadMore}
                                            style={{ marginLeft: 'auto', marginRight: 'auto', color: theme.palette.color, fontFamily: theme.typography.fontFamily }}
                                        >
                                            Load More
                                        </Button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    function ContactForm() {
        const schema = yup.object().shape({
            name: yup.string().required(),
            email: yup.string().email(),
            message: yup.string().required(),
        });
        const {register, formState: {errors}} = useForm<FormData> ({
            resolver: yupResolver(schema)
        });
        const form = useRef();
        function sendEmail(e) {
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
        return (
            <>
                <div id='contact'>
                    <div style={{ paddingTop: 140, paddingBottom: 140, backgroundColor: theme.palette.background }}>
                        <div className='justify-content-md-center' style={{ width: '100%' }}>
                            <div className='col display-flex' md='12'>
                                <Card 
                                    variant={theme.cardType} 
                                    sx={{ 
                                        marginLeft: 'auto', 
                                        marginRight: 'auto', 
                                        width: 600, 
                                        borderWidth: '2px', 
                                        borderColor: theme.palette.border 
                                    }}
                                    elevation='10'
                                >
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
                                                        style={{ width: 560, fontFamily: theme.typography.fontFamily, backgroundColor: theme.palette.background, color: theme.palette.color }}
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
                                                        style={{ width: 560, fontFamily: theme.typography.fontFamily, backgroundColor: theme.palette.background, color: theme.palette.color }}
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
                                                        style={{ width: 560, height: '20vh', fontFamily: theme.typography.fontFamily, backgroundColor: theme.palette.background, color: theme.palette.color }}
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
                    <script type='text/javascript'
                        src='https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js'>
                    </script>
                    <script type='text/javascript'>
                        emailjs.init(process.env.EMAILJS!);
                    </script>
                </div>
            </>
        );
    }

    function FotoGallery() {
        if (showFoto) {
            const fotosPerLoad = 9;
            const [modalIsOpen, setModalOpen] = useState(false);
            let id = 0;
            const hasRun = useRef(false);
            function createStateVars() {
                const stateVars = [];
                for (const f of bgArray) {
                    const item = {};
                    const fStr = f.toString();
                    item['id'] = id;
                    item['name'] = fStr;
                    item['active'] = false;
                    stateVars.push(item);
                    id++;
                }
                return (stateVars);
            }
            const initialFotos = createStateVars();
            const [fotos, setFotos] = useState(initialFotos);
            const [fModal, setFModal] = useState('');
            const [displayFotos, setDisplayFotos] = useState(fotos.slice(0, fotosPerLoad));
            const [nextIndex, setNextIndex] = useState(fotosPerLoad);
            const [hasMore, setHasMore] = useState(true);
            const handleLoadMore = () => {
                const newIndex = nextIndex + fotosPerLoad;
                const newVisibleItems = [...displayFotos, ...fotos.slice(nextIndex, newIndex)];
                setDisplayFotos(newVisibleItems);
                setNextIndex(newIndex);
                if (newIndex >= fotos.length) {
                    setHasMore(false);
                }
            };
            const handleClick = (id, name) => {
                const index = displayFotos.findIndex(foto => foto.id === id);
                displayFotos[index].active = true
                setFModal(name);
                setModalOpen(true);
            }
            const FotoModal = (uri) => {
                return (
                    <>
                        <Modal
                            key={uri}
                            disablePortal
                            open={modalIsOpen}
                            onClose={() => setModalOpen(false)}
                            closeAfterTransition
                            sx={{ width: '100vw', height: '100vh', display: 'flex' }}
                        >
                            <Fade in={modalIsOpen}>
                                <Box style={{ margin: '0 auto' }}>
                                    <img style={{ width: '80vw', height: 'auto' }} src={uri}/>
                                </Box>
                            </Fade>
                        </Modal>
                    </>
                );
            }
            const FotoTitle = () => {
                return (
                    <div 
                        id="foto"
                        style={{ textAlign: 'center' }}>
                        <h1 style={{
                            marginBottom: 0,
                            backgroundColor: theme.palette.background,
                            fontFamily: theme.typography.fontFamily,
                            color: theme.palette.color
                        }}>
                            Photography
                        </h1>
                    </div>
                );
            }

            return (
                <>
                    <FotoTitle/>
                    <div style={{ display: 'flex', width: '100vw', backgroundColor: theme.palette.background }}>
                        <Grid
                            container
                            margin='auto'
                            rowSpacing={1}
                            columnSpacing={4}
                            paddingBottom={4}
                            width='85%'
                        >
                            {displayFotos.map((foto) => (
                                <Grid marginX='auto' justifyItems='top'>
                                    <div>
                                        <motion.div
                                            key={foto.id}
                                            id="gallery-img-div"
                                            style={{
                                                marginTop: 60,
                                                display: 'flex',
                                                backgroundColor: '#555',
                                                height: '29vh',
                                                width: '100%',
                                                cursor: 'pointer',
                                                overflow: 'hidden',
                                                padding: 0,
                                                borderColor: theme.palette.border,
                                                borderWidth: '2px',
                                                borderStyle: theme === darkTheme ? 'solid' : '',
                                                boxShadow: 'rgba(0, 0, 0, 0.2) 0px 6px 6px -3px, rgba(0, 0, 0, 0.14) 0px 10px 14px 1px, rgba(0, 0, 0, 0.12) 0px 4px 18px 3px',
                                                borderRadius: '4px',
                                            }}
                                            initial={{ scale: 0.95 }}
                                            animate={{ scale: 1 }}
                                        >
                                            <img
                                                onClick={() => handleClick(foto.id, foto.name)}
                                                src={foto.name}
                                                style={{ margin: '0 auto' }}
                                            />
                                        </motion.div>
                                    </div>
                                    {foto.active && (FotoModal(fModal))}
                                </Grid>
                            ))}
                        </Grid>
                    </div>
                    {hasMore && (
                        <div style={{ width: '100vw', paddingTop: '4vh', display: 'flex', backgroundColor: theme.palette.background }}>
                            <Button
                                variant='outlined'
                                onClick={handleLoadMore}
                                style={{ marginLeft: 'auto', marginRight: 'auto', color: theme.palette.color, fontFamily: theme.typography.fontFamily }}
                            >
                                Load More
                            </Button>
                        </div>
                    )}
                </>
            );
        }
    }

    function LoadCookieConsent() {
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
                style={{ fontFamily: theme.typography.fontFamily, position: 'fixed', top: '93%', zIndex: 1000 }}
            >
                This website uses cookies.
            </CookieConsent>
        </>
      );
    }

    // function DiscoBg() {
    //     const [discoRun, setDiscoHasRun] = useState(false);
    //     const discoHasRun = useRef(false);
    //     console.log('discostate', discoHasRun.current);
    //     let val = 100;
    //     if (!discoHasRun.current) {
    //         console.log('disco');
    //         for (let i = 101; i > 0; i--) {
    //             let valStr = val.toString();
    //             let marginVal = valStr + 'vw';
    //             val -= 1;
    //             return (
    //                 <>
    //                 <motion.div 
    //                     className="disco-bg-inner" 
    //                     key={i} 
    //                     style={{ 
    //                         backgroundColor: theme.palette.background, 
    //                         marginLeft: marginVal,
    //                         height: discoRun ? '0vh' : '70vh',
    //                         width: '1vw', 
    //                         zIndex: 2000, 
    //                         position: 'absolute',
    //                         marginTop: 0,
    //                     }}
    //                     animate={{ rotateY: 90 }} 
    //                     initial={{ y: 180 }} 
    //                     transition={{ 
    //                         duration: 5, 
    //                         delay: 0 
    //                     }}
    //                 />
    //                 </>
    //             );
    //         }
    //         discoHasRun.current = true;
    //         setDiscoHasRun(true);
        
    //     } else { return ([]); }
    // }

    return (
        <ThemeContext.Provider value={{ theme }}>
            <div style={{ backgroundColor: theme.palette.background, width: '100vw', height: '100vh', margin: 0, padding: 0 }}>
                <NavComponent/>
                <CopyLeftModal/>
                <div 
                    id='home' 
                    className='main_div' 
                    style={{ 
                        backgroundColor: theme.palette.background, 
                        width: '100%', 
                        height: '100%', 
                        margin: 0, 
                        padding: 0, 
                        zIndex: 0, 
                        position: 'absolute' 
                    }}>
                        <Container id="fluid-container" fluid style={{ backgroundColor: theme.palette.background, zIndex: 3, height: '100vh', position: 'relative' }}>
                            <Row style={{ backgroundColor: theme.palette.background, height: '100vh' }} >
                                <Col xs='5' className="d-flex justify-content-end align-items-center" style={{ backgroundColor: theme.palette.background }}>
                                    {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                    <Row style={{ height: '42vh' }} className="d-flex align-items-center">

                                            <Box
                                                sx={{
                                                    width: '26vw',
                                                    height: 'auto',
                                                    aspectRatio: '1/1'
                                                }}
                                            >
                                                <Avatar
                                                    id='home-avatar'
                                                    alt='Typewriter pic'
                                                    sx={{
                                                        height: '100%',
                                                        width: '100%',
                                                        border: theme === darkTheme ? borderCss : '',
                                                        boxShadow: theme.palette.avatarShadow,
                                                    }}
                                                    onMouseEnter={() => handleMouseEnterAvatar()}
                                                    onMouseLeave={() => handleMouseLeaveAvatar()}
                                                    src={ isHovered ? negKarmaPic : karmaPic }
                                                />
                                            </Box>

                                    </Row>
                                </Col>
                                <Col xs='7'>
                                    <Row className="align-items-center">
                                        <Col>
                                            <Row style={{ height: '50vh', width: '40vw' }}>
                                                <Col className='d-flex flex-column justify-content-end'>
                                                    {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                                    <Row>
                                                        <Typography style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color, fontSize: '3.8vw', marginLeft: '2vw' }}>
                                                            Michael Robinson
                                                        </Typography>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row style={{ height: '8vh', position: 'relative', width: '40vw' }}>
                                                <Col style={{ marginTop: '0vh' }} className='d-flex flex-column text-left'>
                                                    {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                                    <Row>
                                                        <Typography style={{ fontFamily: theme.typography.fontFamily, color: theme.palette.color, fontSize: '1.74vw', marginLeft: '2vw' }}>
                                                            Developer and Learning Technologist
                                                        </Typography>
                                                    </Row>
                                                </Col>
                                            </Row>
                                            <Row style={{ height: 0, position: 'relative', width: '40vw', textAlign: 'top' }}>
                                                <Col className='d-flex flex-column justify-content-end'>
                                                    <Row style={{ justifyContent: 'space-between' }}>
                                                        <a href='https://github.com/merobi-hub' target="_blank" style={{ color: theme.palette.color }}>
                                                            {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                                            <div>
                                                                <GitHubIcon style={{ marginTop: 0, fontSize: '1.78vw', marginLeft: '2vw' }} />
                                                            </div>
                                                        </a>
                                                        <a href='https://www.linkedin.com/in/michael-robinson/' target="_blank" style={{ color: theme.palette.color }}>
                                                            {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                                            <div>
                                                                <LinkedInIcon sx={{ marginTop: 0, fontSize: '1.78vw' }} />
                                                            </div>
                                                        </a>
                                                        <a href={Resume} download='Robinson_resume' target="_blank" style={{ color: theme.palette.color }}>
                                                            {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                                            <div>
                                                                <DownloadForOfflineIcon sx={{ marginTop: 0, fontSize: '1.78vw' }} />
                                                            </div>
                                                        </a>
                                                        <a href='mailto:merobi@gmail.com' target="_blank" style={{ color: theme.palette.color }}>
                                                            {/*<motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }} transition={{ duration: 20, delay: 0 }}>*/}
                                                            <div>
                                                                <EmailIcon sx={{ marginTop: 0, fontSize: '1.78vw', marginRight: '1vw' }}/>
                                                            </div>
                                                        </a>
                                                    </Row>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </Container>
                    <LoadCookieConsent/>
                    <Portfolio/>
                    <FotoGallery/>
                    <ContactForm/>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}
