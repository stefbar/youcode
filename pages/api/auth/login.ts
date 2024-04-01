import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, name, password } = body;
        console.log(email, name, password);

        const existingUserByEmail = await prisma.user.findUnique({
            where: {
                email
            }
        });
        if(existingUserByEmail) {
            return NextResponse.json({ error: "User with this email already exists" }, { status: 400 });
        }

        return NextResponse.json(body, { status: 200 });

    } catch (error) {
        console.log(error);
    }
}