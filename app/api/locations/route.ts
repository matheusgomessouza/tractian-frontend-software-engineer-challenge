import { NextResponse } from "next/server";

export async function GET(request: NextResponse) {
  const { searchParams } = new URL(request.url);
  const companyId = searchParams.get("id");
  
  try {
    const companies = await fetch(
      `https://fake-api.tractian.com/companies/${companyId}/locations`,
      {
        method: "GET",
      }
    );

    return NextResponse.json({ companies });
  } catch (error) {
    console.error("Unable to retrieve companies data api/companies/", error);
  }
}
