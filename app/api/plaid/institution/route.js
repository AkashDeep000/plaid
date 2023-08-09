import { NextResponse } from "next/server";
import plaidClient from "@/lib/plaidClient";

export async function GET(request) {
  const options = {
    count: 10,
    offset: 0,
    country_codes: ["US"],
    options: {
      products: ["transactions"],
    },
  };
  try {
    const response = await plaidClient.institutionsGet(options);
    const institutions = response.data.institutions;
    return NextResponse.json(institutions);
  } catch (error) {
    // Handle error
    console.log(error);
    return NextResponse.json({
      error: true,
      massage: "failed to fetch institutions",
    });
  }
}
