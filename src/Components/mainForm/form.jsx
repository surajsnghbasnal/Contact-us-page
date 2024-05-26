import React from 'react'
import formStyles from './form.module.css'
import formImg from "../../Assets/sapiens (1).png"
import Button from '../Button/Button'
import { useFormik } from "formik";
import { formSchema } from '../../Schema';
import { MdMessage } from 'react-icons/md'
import { FaPhone } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import axios from 'axios';

const Form = () => {

    const userData = {
        name: "",
        email: "",
        contact: "",
        comment: ""
    }

    const { values, errors, touched, handleBlur, handleSubmit, handleChange, resetForm } = useFormik({
        initialValues: userData,
        validationSchema: formSchema,
        onSubmit: (values, { resetForm }) => {
            axios.post('http://localhost:8000/userData', values)
                .then((res) => {
                    alert(`Thank you ${values.name} for visiting my website, will reach you soon.❤️`)
                    resetForm();
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    })

    return (
        <div id='container' className='flex justify-center w-4/4 p-10'>
            <div id='inr-container' className='flex w-4/5'>
                <div className='w-2/4'>
                    <div id='buttonContainer' className='flex justify-around py-2'>
                        <Button
                            onClick={() => alert("Chat Support.")}
                            text="Via Support Chat"
                            icon={<MdMessage fontSize={"20px"} />}
                        />
                        <Button onClick={() => alert("Call Support.")} text="Via Support Call" icon={<FaPhone fontSize={"20px"} />} />
                    </div>
                    <div className='py-2 flex justify-center mb-5'>
                        <Button onClick={() => alert("Mail Support.")} text="Via Support Mail" isOutline={true} icon={<IoMdMail fontSize={"20px"} />} />
                    </div>
                    <form className='px-8 flex flex-col' onSubmit={handleSubmit}>
                        <div className={`${formStyles.formControll}`}>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                            />
                            {errors.name && touched.name ? <p className='text-sm text-red-600'>{errors.name}</p> : null}
                        </div>
                        <div className={`${formStyles.formControll}`}>
                            <label htmlFor="email">E-mail</label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            {errors.email && touched.email ? <p className='text-sm text-red-600'>{errors.email}</p> : null}
                        </div>
                        <div className={`${formStyles.formControll}`}>
                            <label htmlFor="contact">Number</label>
                            <input
                                type="number"
                                name="contact"
                                id="contact"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.contact}
                            />
                            {errors.contact && touched.contact ? <p className='text-sm text-red-600'>{errors.contact}</p> : null}
                        </div>
                        <div className={`${formStyles.formControll}`}>
                            <label htmlFor="comment">Comment</label>
                            <textarea
                                rows={5}
                                name="comment"
                                id="comment"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.comment}
                            />
                            {errors.comment && touched.comment ? <p className='text-sm text-red-600'>{errors.comment}</p> : null}
                        </div>
                        <Button text="Submit" />
                    </form>
                </div>
                <div className='img-container w-2/4'>
                    <img className='object-cover' src={formImg} alt="Form Illustration"></img>
                </div>
            </div>
        </div>
    )
}

export default Form
