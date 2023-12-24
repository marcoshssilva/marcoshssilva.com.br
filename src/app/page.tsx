"use client";
import { Box, Button, Container, Typography } from "@mui/material";

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from '@mui/icons-material/Mail';

import MenuComponent from "./components/menu/menu";

export default function Home() {
  const theme = useTheme();
  const isTablet = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <MenuComponent />
      <Container className="min-h-screen flex flex-col items-center justify-center" sx={{ paddingY: '64px' }}>
        <Box className="px-5">

            <Typography 
              className="pb-4" 
              sx={{ width: '100%' }} 
              variant={ isTablet ? 'h4' : 'h5'} 
              align={ isTablet ? 'left' : 'left'}>Olá, eu sou</Typography>

            <Typography 
              className="pb-4" 
              sx={{ width: '100%' }} 
              variant={ isTablet ? 'h1' : 'h3'} 
              align={ isTablet ? 'left' : 'left'}>Marcos Henrique.</Typography>

            <Typography 
              className="pb-4" 
              sx={{ width: '100%' }} 
              variant={ isTablet ? 'h2' : 'h4'} 
              align={ isTablet ? 'left' : 'left'}>Desenvolvo aplicações para a web.</Typography>

            <Button 
              variant="outlined"
              startIcon={ <LinkedInIcon /> } 
              href="https://www.linkedin.com/in/marcos-henrique-santana/" 
              size="large"
              sx={{ marginRight: '16px' }}
              target="_blank">LinkedIn</Button>

            <Button 
              variant="outlined"
              startIcon={ <GitHubIcon /> } 
              href="https://github.com/marcoshssilva" 
              size="large"
              sx={{ marginRight: '16px' }}
              target="_blank">GitHub</Button>

            <Button 
              variant="outlined"
              startIcon={ <MailIcon /> } 
              href="mailto:me@marcoshssilva.com.br" 
              size="large"
              sx={{ marginRight: '16px' }}
              target="_blank">E-Mail</Button>

        </Box>
      </Container>

    </>
  );
}
