import { prisma } from "@utils/prisma"
import { NextRequest, NextResponse } from "next/server"
import jwt from 'jsonwebtoken';
import { User } from "@prisma/client";


export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const token = req.cookies.get('token')?.value;
    if (!token) {
      throw new Error('No Token Provided');
    }

    const key = process.env.JWT_PRIVATE || 'nextsecret';

    const user = jwt.verify(token, key) as User;

    if (!user) {
      throw new Error('No User Found')
    }

    await prisma.feed.create({
      data: {
        ...data,
        userId: user.id
      }
    })

  } catch (error) {
    if (error) {
      return NextResponse.json({ ok: false })
    }
    console.log('There is Server Error')
  }

  return NextResponse.json({ ok: true })
}
