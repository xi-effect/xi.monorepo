import React from "react";
import { observer } from "mobx-react";
import { Stack, Typography } from "@mui/material";

const Header = observer(() => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      sx={{
        mt: 4,
        width: "100%",
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: "32px",
          lineHeight: "40px",
          color: "grayscale.100",
        }}
      >
        Задания
      </Typography>
    </Stack>
  );
});

export default Header;
