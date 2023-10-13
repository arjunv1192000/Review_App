import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email format').required('Email is required'),
  dateOfBirth: Yup.date().required('Date of birth is required'),
  usageFrequency: Yup.string().required('Usage frequency is required'),
  mainAppGoals: Yup.array()
    .min(1, 'Select at least one main app goal')
    .of(Yup.string())
    .required('Main app goals are required'),
  userExperienceRating: Yup.number()
    .min(1, 'User experience rating must be at least 1')
    .max(10, 'User experience rating cannot be greater than 10')
    .required('User experience rating is required'),
  improvements: Yup.string().required('Suggested improvements are required'),
});
export default validationSchema;