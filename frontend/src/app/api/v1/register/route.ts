// ✅ app/api/hello/route.ts  (App Router style)

import { NextRequest, NextResponse } from "next/server";
const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;


export async function GET(req: NextRequest) {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: 'GET',
    });

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Invalid JSON data" },
      { status: 400 }
    );
  }
}   

export async function POST(req: NextRequest) {
  try {
    const { name, phone, email, date, time, area, city, state, postCode } = await req.json();

    const response = await fetch(`${BASE_URL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        date,
        time,
        area,
        city,
        state,
        postCode,
      }),
    });

    const data = await response.json();
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON data" }, { status: 400 });
  }
}

export async function PUT(req: NextRequest) {
  try {
    const { id, name, phone, email, date, time, area, city, state, postCode } = await req.json();

    const response = await fetch(`${BASE_URL}/users/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        phone,
        email,
        date,
        time,
        area,
        city,
        state,
        postCode,
      }),
    });

    const data = await response.json();
    console.log(data);

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ success: false, message: "Invalid JSON data" }, { status: 400 });
  }
}




