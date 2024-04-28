import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useSelector, useDispatch } from "react-redux";
import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteForm } from "../store/FormData-slice";

const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: 15,
  borderRadius: "10px",
}));
const Typostyle = styled(Typography)(({ theme }) => ({
  color: theme.palette.primary.main,
  marginBottom: 0.5,
  marginRight: 4,
  fontSize: "1rem",
  fontWeight: 700,
}));
const Typostyle2 = styled(Typography)(() => ({
  marginBottom: 0.5,
  fontSize: "1rem",
  fontWeight: 500,
  color: "#616161",
  wordWrap: "break-word",
  textTransform: "capitalize",
}));

const EmptyBox = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "50vh",
  textAlign: "center",
}));
function ShowData() {
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteForm(id));
  }
  const data = useSelector((state) => state.formkey);

  // console.log(data);
  return (
    <>
      <Container maxWidth="sm">
        <Box>
          {data.length === 0 ? (
            <EmptyBox>
              <div>
                <h1>No data to show</h1>
              </div>
            </EmptyBox>
          ) : (
            <Grid container spacing={2}>
              {data.map((element) => (
                <Grid item xs={12} key={element.id}>
                  <Item>
                    <Box sx={{ display: "flex", padding: "5px" }}>
                      <Box
                        sx={{
                          display: "flex",
                          flexFlow: "column",
                          width: "100%",
                          height: "fit-content",
                          padding: "10px",
                          // backgroundColor:"pink"
                          // width:"fit-content"
                        }}
                      >
                        <Box sx={{ display: "flex" }}>
                          <Typostyle>Name:</Typostyle>
                          <Typostyle2>{element.name}</Typostyle2>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typostyle>Phone:</Typostyle>
                          <Typostyle2>{element.phone}</Typostyle2>
                        </Box>

                        <Box sx={{ display: "flex" }}>
                          <Typostyle>Address:</Typostyle>
                          <Typostyle2>{element.address}</Typostyle2>
                        </Box>
                        <Box sx={{ display: "flex" }}>
                          <Typostyle>postalCode:</Typostyle>
                          <Typostyle2>{element.postalCode}</Typostyle2>
                        </Box>
                        <Stack
                          direction={{ xs: "column", sm: "row" }}
                          spacing={{ xs: 0, sm: 1, md: 1 }}
                          divider={<Divider orientation="vertical" flexItem />}
                        >
                          <Box sx={{ display: "flex" }}>
                            <Typostyle>Highest Education:</Typostyle>
                            <Typostyle2>{element.education}</Typostyle2>
                          </Box>
                          <Box sx={{ display: "flex" }}>
                            <Typostyle>Passing Year:</Typostyle>
                            <Typostyle2>{element.pass_year}</Typostyle2>
                          </Box>
                        </Stack>
                      </Box>

                      <DeleteIcon
                        color="primary"
                        sx={{ alignSelf: "flex-end", marginBottom: "10px" }}
                        onClick={() => handleDelete(element.id)}
                      />
                    </Box>
                  </Item>
                </Grid>
              ))}
            </Grid>
          )}
        </Box>
      </Container>
    </>
  );
}

export default ShowData;
