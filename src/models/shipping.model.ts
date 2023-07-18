import mongoose, {Schema, Document, ObjectId} from "mongoose";

interface IShippingAddress extends Document {
    user: ObjectId;
    address: string;
    create_time: Date;
    city: string;
    postalCode: string;
    country: string;
}

const shippingSchema: Schema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    address: {type: String, required: true},
    city: {type: String, required: true},
    postalCode: {type: String, required: true},
    country: {type: String, required: true},
    create_time: {type: Number, default: () => Date.now()}
}, {versionKey: false, timestamps: {updatedAt: false, createdAt: false}});

export const Shipping = mongoose.model<IShippingAddress>('Shipping', shippingSchema);