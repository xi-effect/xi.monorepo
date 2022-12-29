import React from "react";
import { observer } from "mobx-react";
import {
  Grid,
  Box,
  Typography,
  Stack,
  useMediaQuery,
  Theme,
} from "@mui/material";
import { useRouter, NextRouter } from "next/router";
import { Arrow } from "pkg.icons.arrow";
import { TaskT } from "./types";

type ItemsT = {
  item: TaskT;
  index: number;
};

const Item: React.FC<ItemsT> = observer(({ item, index }) => {
  const router: NextRouter = useRouter();
  const mobile1336: boolean = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down(1336)
  );

  const { mark, title, description } = item;

  const getColor = () => {
    if (mark === 4 || mark === 5) return "#11743A";
    if (mark === 3) return "#E75223";
    return "#F42D2D";
  };

  const getBgColor = () => {
    if (mark === 4 || mark === 5) return "#B0F9CE";
    if (mark === 3) return "#FEF2EB";
    return "#FEEAEA";
  };

  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      onClick={() =>
        router.push(
          `/community/${router.query.comid}/tasks/${router.query.chid}/task/${index}`
        )
      }
      sx={{
        height: "198px",
        backgroundColor: "grayscale.0",
        textAlign: "center",
        minWidth: mobile1336 ? "343px" : "504px",
        borderRadius: "8px",
        cursor: "pointer",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          bgcolor: "error.pale",
          width: "80px",
          height: "100%",
          borderTopLeftRadius: "8px",
          borderBottomLeftRadius: "8px",
        }}
      >
        <Typography
          sx={{
            color: "error.dark",
            fontWeight: 400,
            fontSize: "12px",
            lineHeight: "16px",
          }}
        >
          Сегодня
        </Typography>
        <Typography
          sx={{
            color: "error.dark",
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: "22px",
          }}
        >
          14:00
        </Typography>
      </Stack>
      <Stack
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{
          p: 2,
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            p: "4px 8px",
            bgcolor: "error.pale",
            color: "error.dark",
            fontWeight: 500,
            fontSize: "12px",
            lineHeight: "16px",
            borderRadius: "4px",
          }}
        >
          Назначено
        </Box>
        <Typography
          sx={{
            mt: 1,
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "24px",
          }}
        >
          Расчет цикла ПХМ
        </Typography>
        {/* <Grid container wrap="nowrap" spacing={2}>
          <Grid item xs zeroMinWidth> */}
        <Typography
          align="justify"
          // noWrap
          sx={{
            mt: 0.5,
            fontWeight: 400,
            fontSize: "16px",
            lineHeight: "22px",
            /* Here's where the line-clamp magic begins. First, we need to hide the content that overflows our desired number of text lines to show */
            overflow: "hidden",
            /* Then, we use the old implementation of Flexbox on the paragraph and set its direction to be row */
            display: "-webkit-box",
            "-webkit-box-orient": "vertical",
            /* Finally, we set the desired number of lines we want to show */
            "-webkit-line-clamp": "3",
          }}
        >
          Паровая холодильная машина работает по циклу с дросселированием.
          Температура кипения в испарителе to,температура в конденсаторе tk. В
          компрессор поступает пар с температурой t1.Рабочее тело перед
          регулирующим вентилем переохлаждается до tпер.
        </Typography>
        {/* </Grid>
        </Grid> */}
      </Stack>
    </Stack>
  );
});

export default Item;
