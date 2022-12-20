import { Stack } from "@mui/material";
import { observer } from "mobx-react";
import { LayoutPages } from "pkg.layout.pages";
import { Navigation } from "kit/Navigation";
// import {
//   Header,
//   SubHeader,
//   Content,
//   Breadcrumbs,
//   Slider,
// } from "components/Community/Post";

const Post = observer(() => (
  <LayoutPages noIndex>
    <Navigation>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={0}
        sx={{
          height: "100vh",
          width: "100%",
          p: 4,
          overflow: "auto",
        }}
      >
        1
        {/* <Breadcrumbs />
        <Header />
        <SubHeader />
        <Content />
        <Slider /> */}
      </Stack>
    </Navigation>
  </LayoutPages>
));

export default Post;
