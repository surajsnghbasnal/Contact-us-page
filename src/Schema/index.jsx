import * as Yup from "yup"

export const formSchema = Yup.object({
    name: Yup.string().min(2, 'Please enter valid name.').max(25, 'Please enter valid name.').required("Please enter your name."),
    email: Yup.string().email().required("Please enter your email."),
    contact: Yup.string().min(10, 'Please enter a contact number with a minimum of 10 digits.').max(14, 'Please enter a contact number with a minimum of 10 digits.').required("Please enter your phone number."),
    comment: Yup.string().required("Enter something here as well.")
})