import { NextResponse } from "next/server"
import { cookies } from "next/headers"
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from "@constants/api";


export const GET = async () => {
  try {
    const res = cookies().get('token')?.value;

    if (!res) {
      throw new Error('no cookie')
    }
    const userInfo = jwt.verify(res, JWT_SECRET);
    if (!userInfo) {
      throw new Error('Invalid Credentials')
    }
    return NextResponse.json({ ok: true, data: userInfo })
  } catch (error) {
    return NextResponse.json({ ok: false, message: error })
  }
}