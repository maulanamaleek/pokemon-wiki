import { prisma } from "@utils/prisma"
import { NextRequest, NextResponse } from "next/server"

export const GET = async (req: NextRequest) => {
  try {
    const allFeed = await prisma.feed.findMany({
      include: {
        user: true
      }
    })

    return NextResponse.json(allFeed)

  } catch (error) {
    console.log('There is Server Error')
    return NextResponse.json({ ok: true })
  }
}
