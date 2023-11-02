import { getSearchParams } from '@utils/http.utils'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// THIS MIDDLEWARE RECEIVE THE TICKET AND CHANGE FOR TOKEN, THEN SET TOKEN IN COOKIES AND CLEAN URL
export async function middleware(request: NextRequest) {
  try {
    const TOKEN_NAME = process.env.API_TOKEN || ""
    const token = request.cookies.get(TOKEN_NAME)

    if(token) return NextResponse.next();
  
    const params = getSearchParams(request.url)
    const ticket = params.ticket || null

    if (!ticket) throw new Error("Invalid ticket")

    const resp = await fetch(`${process.env.URL_AUTH_SERVICE}api/v1/changeTicket`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ ssoTicket: ticket })
    })

    if (!resp || resp.status !== 200) throw new Error("Invalid status to change token")

    const data = await resp.json()

    const url = new URL(request.nextUrl)
    url.searchParams.delete('ticket')

    const response = NextResponse.redirect(url) 
    response.cookies.set(TOKEN_NAME, data.data.token)
    response.cookies.set({
      name: TOKEN_NAME,
      value: data.data.token,
      path: '/',
    })

    return response

  } catch (error) {
    console.error(error)
    return NextResponse.next();
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}