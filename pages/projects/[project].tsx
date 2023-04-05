import { Container, Link, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { Box } from "@mui/system";
import projects from "../../projects.json";

type images = { path: string; alt: string };
interface ProjectStructure {
  project: {
    title: string;
    stack: string;
    link: string;
    text: string[];
    images: images[];
  };
}

export const getStaticPaths = () => {
  const data = projects.map((project) => {
    return {
      params: {
        project: project.title.toLowerCase(),
      },
    };
  });
  return {
    paths: data,
    fallback: false,
  };
};

export const getStaticProps = async (context: {
  params: { project: string };
}) => {
  const project = projects.find(
    (pro) =>
      pro.title.toLowerCase() === context.params.project.toLowerCase()
  );
  return {
    props: { project },
  };
};

const Project = ({ project }: ProjectStructure) => {
  return (
    <Container>
      <Container sx={{ p: 2 }}>
        <Typography variant="h5" align="center">
          {project.title}
        </Typography>
        <Typography align="center" variant="subtitle1">
          Stack: {project.stack}
        </Typography>
        <Container sx={{ display: "flex", justifyContent: "center" }}>
          <Link href={project.link}>Source Code</Link>
        </Container>
        <Container sx={{ p: 2 }}>
          <Typography paragraph> {project.text[0]}</Typography>{" "}
          <Typography paragraph>{project.text[1]}</Typography>
          <Box
            sx={{
              m: 2,
              position: "relative",
              width: "50vw",
              height: "50vh",
              p: 4,
            }}
          >
            <Image
              src={project.images[0].path}
              layout="fill"
              alt={project.images[0].alt}
              priority
              style={{ objectFit: "contain" }}
            />
          </Box>
          <Typography paragraph>{project.text[1]}</Typography>{" "}
          <Typography paragraph>{project.text[2]}</Typography>{" "}
          <Typography paragraph>{project.text[3]}</Typography>
          <Box
            sx={{ m: 2, position: "relative", width: "70vw", height: "40vh" }}
          >
            <Image
              src={project.images[1].path}
              layout="fill"
              alt={project.images[1].alt}
            />
          </Box>
          <Typography paragraph> {project.text[4]}</Typography>{" "}
          <Typography paragraph>{project.text[5]}</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
            <Image
              src={project.images[2].path}
              height={600}
              width={800}
              alt={project.images[2].alt}
              style={{ objectFit: "contain" }}
            />
          </Box>
        </Container>
      </Container>
    </Container>
  );
};

export default Project;
