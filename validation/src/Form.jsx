import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const validation = z.object({
    username: z.string().min(3, "Minimum 3 Characters Required"),
    email: z.string().email(),
    password: z.string().min(6, "Minimum 6 Characters Required")
        .regex(/[a-z]/, "At least One Lowercase Character Required")
        .regex(/[A-Z]/, "At least One Uppercase Character Required")
        .regex(/[0-9]/, "At least One Number Required")
        .regex(/[@#$*_]/, "Special Character Required")
});

const Form = () => {
    const { register,watch, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(validation),
        mode:"onChange"
    });

    const onSubmit = (data) => {
        console.log("Clicked", data);
    };
    watch()
    return (
        <div className="form-container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <input 
                        type="text" 
                        placeholder="Enter Username" 
                        {...register("username")} 
                        className={errors.username ? "error" : ""}
                    />
                    {errors.username && <p className="error-message">{errors.username.message}</p>}
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        placeholder="Enter Email" 
                        {...register("email")} 
                        className={errors.email ? "error" : ""}
                    />
                    {errors.email && <p className="error-message">{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        placeholder="Enter Password" 
                        {...register("password")} 
                        className={errors.password ? "error" : ""}
                    />
                    {errors.password && <p className="error-message">{errors.password.message}</p>}
                </div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    );
};

export default Form;
