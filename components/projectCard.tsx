import React, { useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

interface Project {
  project: {
    name: string;
    href?: string;
    image: string;
    description: string;
    live?: string;
    source?: string;
  };
}
const ProjectCard = ({ project }: Project) => {
  const [hover, setHover] = useState(false);

  return (
    <Card
      sx={{ cursor: "pointer", width: 300, height: 500 }}
      raised={hover}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <Image
        src={project.image}
        height={200}
        width={300}
        alt="choosing an item"
      />
      <CardContent>
        <Stack>
          <Typography variant="h6" textAlign={"center"}>
            {project.name}
          </Typography>
          <Container sx={{ mt: 3, minHeight: "180px" }}>
            <Typography paragraph>{project.description}</Typography>
          </Container>
          <Stack direction="row" sx={{ minHeight: "25%" }}>
            {project.live && (
              <Button
                size="small"
                onClick={() => (window.location.href = project.live as string)}
              >
                Live
              </Button>
            )}

            <Button
              size="small"
              onClick={() => (window.location.href = project.source as string)}
            >
              Source Code
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
