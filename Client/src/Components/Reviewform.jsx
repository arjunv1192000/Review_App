import React from "react";
import {
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Slider,
  Button,
  TextField,
  FormHelperText,
} from "@mui/material";
import axios from "../Axios/axios";
import { useFormik } from "formik";
import validationSchema from "../../Validation/formvalidation";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';

const Reviewform = () => {

  const navigate = useNavigate();


  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      dateOfBirth: "",
      usageFrequency: "",
      mainAppGoals: [],
      userExperienceRating: "",
      improvements: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const body = {
        name: values.name,
        email: values.email,
        usageFrequency: values.usageFrequency,
        mainAppGoals: values.mainAppGoals,
        userExperienceRating: values.userExperienceRating,
        improvements: values.improvements,
        dateOfBirth: values.dateOfBirth,
      };
      console.log(body);

      
      axios.post("/addreview", body).then((response) => {


        if (response.data.status === true) {

          toast('Review Added sucessfully', {
            icon: '👏',
          });


          setTimeout(() => {
            navigate("/home")
  
          }, 1500)
  

      

        

        } else {
          
          


        }


      }).catch((response) => {
        console.error(response.message);



      })

      
    },
  });

  return (
    <>
      <form noValidate onSubmit={formik.handleSubmit}>
        <FormControl fullWidth variant="outlined" margin="normal">
          <TextField
            label="Name"
            variant="outlined"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.name && Boolean(formik.errors.name)}
          />
          {formik.touched.name && formik.errors.name && (
            <FormHelperText error>{formik.errors.name}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <TextField
            label="Email"
            variant="outlined"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.email && Boolean(formik.errors.email)}
          />
          {formik.touched.email && formik.errors.email && (
            <FormHelperText error>{formik.errors.email}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel htmlFor="usage-frequency">
            1. How often do you use this app?
          </InputLabel>
          <Select
            label="1. How often do you use this app?"
            id="usage-frequency"
            name="usageFrequency"
            value={formik.values.usageFrequency}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={
              formik.touched.usageFrequency &&
              Boolean(formik.errors.usageFrequency)
            }
          >
            <MenuItem value="Daily">Daily</MenuItem>
            <MenuItem value="Weekly">Weekly</MenuItem>
            <MenuItem value="Monthly">Monthly</MenuItem>
            <MenuItem value="Rarely">Rarely</MenuItem>
            <MenuItem value="First time">First time</MenuItem>
          </Select>
          {formik.touched.usageFrequency && formik.errors.usageFrequency && (
            <FormHelperText error>{formik.errors.usageFrequency}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>2. Main app goal?</InputLabel>
          <Select
            label="2. Main app goal?"
            multiple
            renderValue={(selected) => selected.join(", ")}
            name="mainAppGoals"
            value={formik.values.mainAppGoals}
            onChange={(e) => formik.setFieldValue("mainAppGoals", e.target.value)}
            onBlur={formik.handleBlur}
            error={formik.touched.mainAppGoals && Boolean(formik.errors.mainAppGoals)}
          >
            <MenuItem value="Information">Information</MenuItem>
            <MenuItem value="Chat">Chat</MenuItem>
            <MenuItem value="Entertainment">Entertainment</MenuItem>
            <MenuItem value="Buy">Buy</MenuItem>
            <MenuItem value="Socialize">Socialize</MenuItem>
            <MenuItem value="Other">Other</MenuItem>
          </Select>
          {formik.touched.mainAppGoals && formik.errors.mainAppGoals && (
            <FormHelperText error>{formik.errors.mainAppGoals}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <InputLabel>3. Rate user experience (1-10)</InputLabel>
          <Slider
            value={Number(formik.values.userExperienceRating)}
            onChange={(_, newValue) =>
              formik.setFieldValue("userExperienceRating", newValue)
            }
            min={1}
            max={10}
            step={1}
            valueLabelDisplay="auto"
            valueLabelFormat={(value) => (
              <span>
                ({value}){" "}
                {value === 1
                  ? "Very Bad"
                  : value === 2
                  ? "Bad"
                  : value === 3
                  ? "Not Good"
                  : value === 4
                  ? "Okay"
                  : value === 5
                  ? "Good"
                  : value === 6
                  ? "Very Good"
                  : value === 7
                  ? "Excellent"
                  : value === 8
                  ? "Outstanding"
                  : value === 9
                  ? "Exceptional"
                  : "Perfect"}
              </span>
            )}
            sx={{ marginTop: 4 }}
          />
          {formik.touched.userExperienceRating && formik.errors.userExperienceRating && (
            <FormHelperText error>{formik.errors.userExperienceRating}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth margin="normal">
          <TextField
            label="4. Suggest any improvements"
            variant="outlined"
            multiline
            rows={4}
            name="improvements"
            value={formik.values.improvements}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.improvements && Boolean(formik.errors.improvements)}
          />
          {formik.touched.improvements && formik.errors.improvements && (
            <FormHelperText error>{formik.errors.improvements}</FormHelperText>
          )}
        </FormControl>
        <FormControl fullWidth variant="outlined" margin="normal">
          <TextField
            label=""
            type="date"
            variant="outlined"
            name="dateOfBirth"
            value={formik.values.dateOfBirth}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)}
          />
          {formik.touched.dateOfBirth && formik.errors.dateOfBirth && (
            <FormHelperText error>{formik.errors.dateOfBirth}</FormHelperText>
          )}
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          type="submit"
          sx={{ marginTop: 2 }}
        >
          Submit
        </Button>
      </form>
      <Toaster
  position="top-center"
  reverseOrder={false}
/>
    </>
  );
};

export default Reviewform;
