import React from 'react';
import { useForm } from "react-hook-form";
import { makeStyles } from '@material-ui/styles';

const CategoryFilter = () => {

     const { register, handleSubmit } = useForm();
     const onSubmit = (data) => console.log(data);

     const useStyles  = makeStyles({
          
     })
     const classes = useStyles();

     return (
          <form className='filterProducts' onSubmit={handleSubmit(onSubmit)}>
               
               <select  {...register("filterProduct")}>
               <option value="men">Men's Shop</option>
               <option value="women">Women's Shop</option>
               <option value="electronics">Electronics</option>
               </select>
               
          </form>
     );
};

export default CategoryFilter;