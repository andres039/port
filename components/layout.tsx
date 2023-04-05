import React from "react";
import { Button, Divider, Stack, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import BookIcon from "@mui/icons-material/Book";

const theme = createTheme({
  typography: {
    fontFamily: "roboto",
    fontSize: 16,
  },
  palette: {
    primary: {
      main: "#102572",
    },
  },
});

const Layout = ({ children }: any) => {

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ m: 5, position: "sticky", top: 0 }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{ px: 0, position: "sticky", top: 20, zIndex: 100 }}
        >
          <Link href="/">
            <Tooltip title="Home" placement="top" arrow color="primary">
              <Typography variant="h4" sx={{ cursor: "pointer" }}>
                AB
              </Typography>
            </Tooltip>
          </Link>
          <Stack direction="row">
            <Button>
              <Link href="https://github.com/andres039">{<GitHubIcon />}</Link>
            </Button>
            <Button>
              <Link href="https://www.linkedin.com/in/andresbeltrangarcia/">
                {<LinkedInIcon />}
              </Link>
            </Button>
            <Button>
              <Link href="mailto:andres.kosan@gmail.com">
                <EmailIcon />
              </Link>
            </Button>
            <Button>
              <Link href="https://andres039.hashnode.dev/">
              <Tooltip title="Blog">
                <BookIcon />
                </Tooltip>
              </Link>
            </Button>
          </Stack>
        </Stack>
        <Divider />
        {children}
      </Box>
    </ThemeProvider>
  );
};

export default Layout;
