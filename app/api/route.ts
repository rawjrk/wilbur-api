import { NextRequest, NextResponse } from 'next/server'
import { quote } from '@/lib/quote'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl
  const qt = searchParams.get('qt')
  let quantity

  if (!qt) quantity = 1
  else quantity = parseInt(qt, 10)

  const quotes = [...Array(quantity)].map(() => quote())
  const response = {
    length: quotes.length,
    quotes,
  }

  return NextResponse.json(response)
}
