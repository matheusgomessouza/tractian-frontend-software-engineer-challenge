import { NextResponse } from "next/server";

export async function GET() {
  try {
    const companies = await fetch("https://fake-api.tractian.com/companies", {
      method: "GET",
    });

    return NextResponse.json({ companies });
  } catch (error) {
    console.error("Unable to retrieve companies data api/companies/", error);
  }
}
