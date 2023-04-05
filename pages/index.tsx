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
      <Container sx={{ minWidth: "90vw" }}>
        <About />{" "}
        <Typography
          color="primary"
          variant="h5"
          sx={{ textAlign: "center", mb: 6 }}
        >
          Projects:
        </Typography>
        <Container sx={{ mr: -3 }}>
          <Grid
            container
            spacing={4}
            // direction="column"
            // alignItems="center"
            justifyContent="center"
            sx={{ width: "50vw" }}
          >
            {projectsInfo.map((project) => (
              <Grid
                item
                // xs={12}
                // md={6}
                sx={{ m: 0 }}
                key={project.name}
              >
                <ProjectCard project={project} />
              </Grid>
            ))}
          </Grid>
        </Container>
      </Container>
    </>
  );
}
