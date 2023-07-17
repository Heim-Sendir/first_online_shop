import mongoose, {Schema, Document} from "mongoose";
//import {User} from './user.model';

interface IShippingAddress extends Document {
   // user: ObjectId;
    address: string;
    city: string;
    postalCode: string;
    country: string;
}

const shippingAddressSchema: Schema = new Schema({
    //user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
    country: {types: String, required: true}
}, {versionKey: false});

export const ShippingAddress = mongoose.model<IShippingAddress>('ShippingAddress', shippingAddressSchema);