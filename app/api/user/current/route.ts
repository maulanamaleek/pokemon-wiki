import { NextResponse } from "next/server"
import { cookies } from "next/headers"


export const GET = async () => {
  try {
    const res = cookies().get('mycookiekey')
    if (!res) {
      throw new Error('no cookie')
    }
    console.log('cookieeee', { res })
    return NextResponse.json({ ok: true, data: res })
  } catch (error) {
    return NextResponse.json({ ok: false })
  }
}