import { connectDb } from '@/configs/dbConfig';
import User from '@/models/userModel';
import { NextRequest, NextResponse } from 'next/server';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

connectDb();

export async function POST(request) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    //check if user already exists
    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: 'No such user in DB' },
        { status: 400 }
      );
    }

    //check password
    const comparePassword = await bcryptjs.compare(password, user.password);

    if (!comparePassword) {
      return NextResponse.json(
        { error: 'Email or password is wrong' },
        { status: 401 }
      );
    }

    // create token
    const jwtPaylooad = {
      id: user._doc._id,
      name: user._doc.name,
      email: user._doc.email,
      image: user._doc.image,
    };
    const accessToken = jwt.sign(jwtPaylooad, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });
    const result = {
      ...jwtPaylooad,
      accessToken,
    };

    await User.findByIdAndUpdate(user._doc._id, { accessToken });

    // return new Response(JSON.stringify(result, { status: 200 }));
    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    return NextResponse.json(null);
  }
}
