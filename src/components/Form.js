import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import { isName, isPhone, isAdd, isCode, isEdu } from "../utils/Validation";
import { useDispatch } from "react-redux";
import { addData } from "../store/FormData-slice";
import { useNavigate } from "react-router-dom";
import Alertbox from "./Alertbox";
function Form() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [enteredValues, setEnteredValues] = useState({
    name: "",
    address: "",
    postalCode: "",
    phone: "",
    education: "",
    pass_year: "",
  });
  //for showing error when input out of focus
  const [isEdit, setEdit] = useState({
    fullname: false,
    address: false,
    postalCode: false,
    phone: false,
    education: false,
  });

  const nameIsInvalid = isEdit.name && !isName(enteredValues.name);
  const phoneIsInvalid = isEdit.phone && !isPhone(enteredValues.phone);
  const addIsInvalid = isEdit.address && !isAdd(enteredValues.address);
  const codeInvalid = isEdit.postalCode && !isCode(enteredValues.postalCode);
  const eduInvalid = isEdit.education && !isEdu(enteredValues.education);

  function handleInputBlur(identifier) {
    setEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: true,
    }));
  }
  function handleInputChange(identifier, value) {
    setEdit((prevEdit) => ({
      ...prevEdit,
      [identifier]: false,
    }));

    setEnteredValues((prevValues) => ({
      ...prevValues,
      [identifier]: value,
    }));
  }
  const handleSubmit = (event) => {
    const { name, address, postalCode, phone, education } = enteredValues;
    event.preventDefault();
    const arr = [name, address, postalCode, phone, education];
    const notEmpty = arr.every((element) => element.length > 0);
    if (
      notEmpty &&
      isName(name) &&
      isPhone(phone) &&
      isAdd(address) &&
      isCode(postalCode) &&
      isEdu(education)
    ) {
      dispatch(addData(enteredValues));
      navigate("/data");
    } else {
      setOpen(true);
    }
  };

  return (
    <Container
      component="main"
      maxWidth="sm"
      sx={{ background: "white", padding: "10px", borderRadius: "20px" }}
    >
      <CssBaseline />
      <Box
        sx={{
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box component="form" noValidate onSubmit={handleSubmit}>
          <Grid container columnSpacing={2} rowSpacing={1}>
            <Grid item xs={12} sm={7}>
              <TextField
                required
                fullWidth
                id="fullName"
                label="Full Name"
                name="name"
                variant="filled"
                error={nameIsInvalid}
                helperText={
                  nameIsInvalid ? "Error- This field only accepts string" : " "
                }
                value={enteredValues.name}
                onChange={(event) =>
                  handleInputChange("name", event.target.value)
                }
                onBlur={() => handleInputBlur("name")}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                id="phone"
                label="Phone no."
                name="phone"
                variant="filled"
                error={phoneIsInvalid}
                helperText={
                  phoneIsInvalid ? " Error- accepts only 10 digits" : " "
                }
                value={enteredValues.phone}
                onChange={(event) =>
                  handleInputChange("phone", event.target.value)
                }
                onBlur={() => handleInputBlur("phone")}
              />
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                required
                fullWidth
                id="education"
                label="Highest Education"
                name="education"
                variant="filled"
                error={eduInvalid}
                helperText={
                  eduInvalid ? "Error- This field only accepts string" : " "
                }
                value={enteredValues.education}
                onChange={(event) =>
                  handleInputChange("education", event.target.value)
                }
                onBlur={() => handleInputBlur("education")}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <FormControl variant="filled" sx={{ width: "100%" }}>
                <InputLabel id="year">Passing year</InputLabel>
                <Select
                  value={enteredValues.pass_year}
                  onChange={(event) =>
                    handleInputChange("pass_year", event.target.value)
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={2020}>2020</MenuItem>
                  <MenuItem value={2021}>2021</MenuItem>
                  <MenuItem value={2022}>2022</MenuItem>
                  <MenuItem value={2023}>2023</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={7}>
              <TextField
                required
                // multiline
                // maxRows={3}
                fullWidth
                id="address"
                label="Address"
                name="address"
                variant="filled"
                error={addIsInvalid}
                helperText={
                  addIsInvalid
                    ? "This field only allows hypen, comma, alphabets, numbers"
                    : " "
                }
                value={enteredValues.address}
                onChange={(event) =>
                  handleInputChange("address", event.target.value)
                }
                onBlur={() => handleInputBlur("address")}
              />
            </Grid>
            <Grid item xs={12} sm={5}>
              <TextField
                required
                fullWidth
                id="postalCode"
                label="Postal code"
                name="postalCode"
                variant="filled"
                error={codeInvalid}
                helperText={
                  codeInvalid ? "accpets only number and alphabets" : " "
                }
                value={enteredValues.postalCode}
                onChange={(event) =>
                  handleInputChange("postalCode", event.target.value)
                }
                onBlur={() => handleInputBlur("postalCode")}
              />
            </Grid>
          </Grid>

          <Button
            // fullWidth
            type="submit"
            disableRipple
            variant="contained"
            color="primary"
            sx={{ mt: "0.5rem", mb: "1rem" }}
          >
            Submit
          </Button>
        </Box>
      </Box>
      <Alertbox setOpen={setOpen} open={open} />
    </Container>
  );
}

export default Form;
