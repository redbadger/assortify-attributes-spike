import {
  AppBar as MaterialAppBar,
  Container,
  css,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import tw from "twin.macro";
import Progress from "./Progress";

const AppBar = () => {
  const theme = useTheme();

  return (
    <MaterialAppBar position="sticky">
      <div
        css={css`
          height: env(safe-area-inset-top);
          background-color: ${theme.palette.primary.dark};
        `}
      />
      <Container>
        <Toolbar tw="justify-between">
          <a
            css={[
              tw`no-underline`,
              css`
                color: inherit;
              `,
            ]}
            title="Home"
            href="/"
          >
            <Typography variant="h5" component="h1">
              Assortify Attributes Spike
            </Typography>
          </a>
        </Toolbar>
      </Container>
      <Progress />
    </MaterialAppBar>
  );
};

export default AppBar;
