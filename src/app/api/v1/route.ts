import { getNewLogin } from "@/controllers/libs/google-auth";
import { NextResponse } from "next/server";

export async function GET(res: Request) {
    const data = await getNewLogin();
    const parseUrl = data.config.url?.replace(/\s/g,"");
    return NextResponse.json(parseUrl)
}