import React from 'react'
import { useForm } from 'react-hook-form';
const Validation = () => {

    const { register, handleSubmit, formState: { errors }, } = useForm({});

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        alert('Form submitted successfully!');
        console.log(errors)
    };

    const validation = {
        name: {
            required: {
                value: true,
                max: 6,
                min: 5,
                message: "name is required"
            }
        },

        email: {
            required: {
                value: true,
                message: "Email is required"
            },
            pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Enter a valid email"
            }
        },

        password: {
            required: {
                value: true,
                max: 6,
                message: "password must be 6 character"

            }
        },

        phone: {
            required: {
                value: true,
                message: "Phone number is required"
            },
            pattern: {
                value: /^[6-9]\d{9}$/,
                message: "Enter a valid 10-digit phone number"
            },
            validate: {
                notAllZeroes: (value) => {
                    const last9 = value.slice(-9);
                    return last9 !== '000000000' || "Last 9 digits cannot be all zeroes";
                }
            }
        },


    }

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Name:</label><br />

                <input {...register("name", validation.name)} />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
            </div>

            <div>
                <label>Email:</label><br />
                <input {...register("email", validation.email)} />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>

            <div>
                <label>Password:</label><br />
                <input {...register("password", validation.password)} />
                {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>


            <div>
                <label>Phone:</label><br />
                <input {...register("phone", validation.phone)} />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
            </div>






            <br />
            <button type="submit">Submit</button>

        </form>

    )
}

export default Validation;
