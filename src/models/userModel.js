import mongoose, { mongo } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please provide a username'],
    },
    email: {
      type: String,
      required: [true, 'Please provide a email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'Please provide a password'],
    },
    avatarURL: {
      type: String,
      default: '',
    },
    accessToken: String,
    accessTokenExpiry: Date,
    refreshToken: String,
    refreshTokenExpiry: Date,
  },
  { versionKey: false, timestamps: true }
);

const User = mongoose.models.users || mongoose.model('users', userSchema);
export default User;
