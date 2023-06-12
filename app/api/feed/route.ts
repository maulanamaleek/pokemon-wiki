import { prisma } from "@utils/prisma"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();
    const userId = data.userId;

    const userExist = await prisma.user.findFirst({ where: { id: userId } })

    if (userExist) {
      console.log('there is user')

      await prisma.feed.create({
        data
      })
    }

  } catch (error) {
    console.log('There is Server Error')
  }

  return NextResponse.json({ ok: true })
}
