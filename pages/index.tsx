import Head from "next/head";
// import styles from '@/styles/Home.module.css'
import { Container, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/projectCard";
import About from "./About";
import projectsInfo from "../projectsInfo.json";

export default function Home() {
  return (
    <>
      <Head>
        <title>Andrés Beltrán</title>
        <link rel="icon" href="/favicon-16x16.png" />
      </Head>
      <Container maxWidth="md">
        <About />{" "}
        <Typography
          color="primary"
          variant="h4"
          sx={{ textAlign: "center", my: 6 }}
        >
          Projects
        </Typography>
        <Container>
          <Grid
            container
            spacing={4}
            // direction="column"
            // alignItems="center"
            justifyContent="center"
            sx={{ maxWidth: "100vw", mt: 4 }}
          >
            {projectsInfo.map((project) => (
              <Grid item md={6} key={project.name}>
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}
