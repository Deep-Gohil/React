import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import "./form.css"; 

const validation = z.object({
  title: z
    .string()
    .min(3, "Minimum 3 Characters Required")
    .regex(/[a-zA-Z]/, "Title Must Contain Letters"),
  description: z
    .string()
    .min(10, "Minimum 10 Characters Required")
    .regex(/[a-zA-Z0-9]/, "Description Must Contain Letters And Numbers"),
  price: z.coerce.number().min(1, "Minimum Price Is 1"),
  img: z
    .custom((file) => file instanceof File, "Please upload a valid image file")
    .refine((file) => file?.type?.startsWith("image/"), "Only JPG, JPEG, or PNG files are allowed"),
});

const Form = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(validation),
    mode: "onChange",
  });

  const onSubmit = async (data) => {
    console.log("Clicked", data);

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("img", data.img);

    try {
      const res = await axios.post("http://localhost:8090/products/create", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Response:", res.data);
    } catch (error) {
      console.error("Upload Error:", error);
    }
  };

  return (
    <div className="form-container">
      <div className="form-box">
        <h2>Create Product</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              {...register("title")}
              className={errors.title ? "error-input" : ""}
            />
            {errors.title && <p className="error-message">{errors.title.message}</p>}
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea
              placeholder="Enter Description"
              {...register("description")}
              className={errors.description ? "error-input" : ""}
            />
            {errors.description && <p className="error-message">{errors.description.message}</p>}
          </div>

          <div className="form-group">
            <label>Price</label>
            <input
              type="number"
              placeholder="Enter Price"
              {...register("price")}
              className={errors.price ? "error-input" : ""}
            />
            {errors.price && <p className="error-message">{errors.price.message}</p>}
          </div>

          <div className="form-group">
            <label>Image</label>
            <input
              id="img"
              type="file"
              accept="image/png, image/jpeg, image/jpg"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) {
                  setValue("img", file);
                }
              }}
            />
            {errors.img && <p className="error-message">{errors.img.message}</p>}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
