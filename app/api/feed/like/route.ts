import { prisma } from "@utils/prisma"
import { NextRequest, NextResponse } from "next/server"


export const POST = async (req: NextRequest) => {
  try {
    const data = await req.json();

    const updatefeed = await prisma.feed.update({
      where: {
        id: data.id,
      },
      data: {
        likes: {
          increment: 1
        }
      }
    })

    return NextResponse.json(updatefeed)

  } catch (error) {
    console.log('There is Server Error')
    return NextResponse.error()
  }
}
