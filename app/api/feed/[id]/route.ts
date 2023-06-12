import { prisma } from "@utils/prisma"
import { NextRequest, NextResponse } from "next/server";


interface IGetParams {
  params: {
    id: string
  }
}

export const GET = async (req: NextRequest, { params }: IGetParams) => {
  try {
    const id = params.id;
    const specificFeed = await prisma.feed.findFirst({
      where: {
        id: +id
      }
    })

    return NextResponse.json({
      code: 200,
      data: specificFeed
    })
  } catch (error) {
    return NextResponse.error
  }
}

export const DELETE = async (req: NextRequest, { params }: IGetParams) => {
  try {
    const id = params.id;
    const specificFeed = await prisma.feed.delete({
      where: {
        id: +id
      }
    })

    return NextResponse.json({
      code: 200,
      data: specificFeed
    })
  } catch (error) {
    return NextResponse.error
  }
}