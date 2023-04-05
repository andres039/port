import { Box, Grid, Link, Stack, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import React from "react";

const About = () => {
  return (
    <Box sx={{}}>
      <Grid container>
        <Grid item xs={12} sx={{ width: "100vw" }}>
          <Stack
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 6, sm: 6, md: 6 }}
            padding={"5%"}
            mx={{ md: "10%", sm: "5%" }}
          >
             <Avatar
              alt="Picture of Andres"
              src="/images/front.jpg"
              sx={{ width: 116, height: 116 }}
            />
            <Typography paragraph fontSize={22}>
              Hi. My name is Andres Beltran. I&apos;m a Web developer with a
              background in Philosophy. I aim to write code that is easy to
              understand and to integrate to existing codebases.
            </Typography>
            <Typography fontSize={22}>
              I currently contribute whenever I find the time to{" "}
              <Link href="https://greenstand.org/"> Greenstand</Link>, solving issues
              that relate to React, Material UI, or calls from the API, and to{" "}
              <Link href="https://buddhistuniversity.net/">
                The Open Buddhist University
              </Link>
              , adding teacher&apos;s biographies in markup language.
            </Typography>

          </Stack>

          {/* <Typography paragraph>
          Hi. My name is Andrés Beltrán. I believe in the power of language for
          the creation of new worlds. Literature, math, arts, music,
          programming: all of this disciplines share, from my point of view, the
          capacity to create within their ‘scope’ their own worlds, and we use
          their possibilities with the help of our own imagination.
        </Typography>
        <Typography paragraph>
          I coded briefly when I was a kid, using the awesome ‘Logo’ programming
          language, drawing geometrical figures. Later on, I damaged a computer
          by trying to write BASIC on already existing files out of intuition. I
          purchased a Visual Basic book as well, but I was never able to figure
          it out. As a young adult, I studied Philosophy and Literature at
          University and taught myself how to play various instruments in my
          leisure time. I enjoyed the study of logic and semantics, and kept an
          interest in the mystery of language.
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={9}>
            <Typography paragraph>
              Revisiting my interest in coding came from a curiosity with HTML.
              From then on, I went to checkout CSS and JavaScript, and I have
              been enjoying learning and creating web applications. I also
              joined the BootCamp at Lighthouse Labs where I ‘met’ the backend
              with <strong>PostgreSQL, </strong>
              <strong>Express</strong>, <strong>Node</strong>, and a tiny bit of{" "}
              <strong>Ruby on Rails</strong>. I have been using{" "}
              <strong>React</strong> for all of my current projects after
              successfully completing the bootcamp, paired with Material UI for
              the looks and the React testing library. One of my biggest
              achievements has been the application of
              <strong> TypeScript</strong> to <strong>React</strong>, and the
              recent possibility of contributing to two open source projects:
              <Link href="https://greenstand.org/"> Greenstand</Link> and{" "}
              <Link href="https://buddhistuniversity.net/">
                The Open Buddhist University
              </Link>
              . I am currently looking for a full time position where I can put
              my energy and enthusiasm into the development of great
              applications.
            </Typography>
          </Grid>

            */}
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
