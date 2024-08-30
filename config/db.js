import mongoose from "mongoose";

export const connectDB= async () =>{
    await mongoose.connect('mongodb+srv://abbasaliR:cntQuickCart03db@cluster0.ecfow.mongodb.net/QuickCart').then(()=>console.log('DB Connected'));
} 