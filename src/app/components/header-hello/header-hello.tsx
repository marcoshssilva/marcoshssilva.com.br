import { Box, Typography } from "@mui/material";

export default function HeaderHelloComponent() {
  return <>
    <Box className="flex flex-col">

      <Typography variant="h1" sx={{ fontWeight: 600, fontSize: '4rem' }}>Olá, eu sou</Typography>
      <Typography variant="h1" sx={{ fontWeight: 600, fontSize: '4rem', color: 'var(--color-yellow);' }}>Marcos Henrique.</Typography>
      <Typography variant="h1" sx={{ fontWeight: 300, fontSize: '2.12rem', marginBottom: '0.75rem' }}>
        Desenvolvo aplicações para a web
      </Typography>

      <Typography sx={{ paddingY: '0.5rem', paddingRight: '1rem' }} >
        Sou um Desenvolvedor FullStack com alguns anos de experiência.<br/>
        Atualmente, focado em desenvolvimento de aplicações voltadas para microserviços e escalabilidade vertical.
      </Typography>

    </Box>
    </>;
}
