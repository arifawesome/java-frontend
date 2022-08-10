import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  marginLeft: 5,
  marginRight: 5,
  textAlign: "center",
  color: theme.palette.text.secondary
}));

export default function List(props) {
  const urls= props.urls;
  const GridItem= urls.map((url) => <Grid  item xs><Item><img style={{width:200 }}
  src={url}
  alt=""
></img></Item></Grid>);

  return (
    <Box sx={{ flexGrow: 0 }}>
     
      <Grid  container spacing={0}>
        
          {GridItem}
        
        </Grid>
    </Box>
  );
}


