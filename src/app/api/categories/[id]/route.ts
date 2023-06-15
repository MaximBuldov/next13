import { $wcApi } from "@/services/http"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  try {
    const { data } = await $wcApi.get(`products?category=${params.id}`)
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json(e)
  }
}