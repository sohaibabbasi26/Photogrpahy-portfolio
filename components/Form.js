
"use client"

import styles from './Form.module.css';
import React from 'react';
import { useForm } from 'react-hook-form';

const Form = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div>
                <label>First Name:</label>
                <input {...register("firstName", { required: "First name is required" })} />
                {errors.firstName && <p>{errors.firstName.message}</p>}
            </div>

            <div>
                <label>Last Name:</label>
                <input {...register("lastName", { required: "Last name is required" })} />
                {errors.lastName && <p>{errors.lastName.message}</p>}
            </div>

            <div>
                <label>Email:</label>
                <input type="email" {...register("email", { required: "Email is required" })} />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label>Phone:</label>
                <input {...register("phone", { required: "Phone number is required" })} />
                {errors.phone && <p>{errors.phone.message}</p>}
            </div>

            <div>
                <label>Subject:</label>
                <input {...register("subject", { required: "Subject is required" })} />
                {errors.subject && <p>{errors.subject.message}</p>}
            </div>

            <div>
                <label>Message:</label>
                <textarea {...register("message", { required: "Message is required" })}></textarea>
                {errors.message && <p>{errors.message.message}</p>}
            </div>

            <div>
                <label>How did you hear about us?</label>
                <select {...register("source")}>
                    <option value="internet">Internet</option>
                    <option value="friend">Friend</option>
                    <option value="advertisement">Advertisement</option>
                </select>
            </div>

            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
    );
}

export default Form;
