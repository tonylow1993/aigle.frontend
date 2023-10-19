import React from 'react'
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Typed from 'react-typed';
import './Hero.css';

const Hero = () => {
    const theme = useTheme();

    const isMd = useMediaQuery(theme.breakpoints.up('md'), {
        defaultMatches: true,
    });
    return (
        <Grid className="hero-bg" container spacing={4}>
            <Grid item container xs={3} md={3} alignItems={'center'}>

            </Grid>
            <Grid item container xs={9} md={9} alignItems={'center'}>
                <Box data-aos={isMd ? 'fade-right' : 'fade-up'} paddingLeft={isMd && 2} p={1}>
                    <Box marginBottom={2}>
                        <Typography
                            className="hero-text"
                            variant="h2"
                            color="white"
                            sx={{ fontWeight: 700 }}
                        >
                            Clearer Vision,{' '} <br />
                            Healthier Tomorrow{' '} <br />
                            Diagnose {' '}
                            <Typography
                                color={'#1aa684'}
                                component={'span'}
                                variant={'inherit'}
                                sx={{
                                    background: `linear-gradient(180deg, transparent 82%, white 0%)`,
                                }}
                            >
                                <Typed
                                    strings={['X-Ray', 'CT Scan', 'Ultrasonography']}
                                    typeSpeed={100}
                                    loop={true}
                                />
                            </Typography>
                        </Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Hero
