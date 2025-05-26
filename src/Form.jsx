
import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    
  });

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    alert('Form submitted successfully!');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      
      <div>
        <label>Name:</label><br />
        <input
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
      </div>

    
      <div>
        <label>Email:</label><br />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "Enter a valid email",
            },
          })}
        />
        {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
      </div>

     
      <div>
        <label>Phone Number:</label><br />
       <input
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]{10}$/,    //[6-9]{1}  && [0-9]{9}
        message: "Phone number must be exactly 10 digits",
      },
    //   validate: (value) =>
    //     value !== "0000000000" || "Phone number cannot be all zeros",
    // })}
    validate: (value) =>
  !/^(\d)\1{9}$/.test(value) || "Phone number cannot be all same digits"
})}
  />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
      </div>

      <br />
      <button type="submit">Submit</button>
    </form>
  );
}
