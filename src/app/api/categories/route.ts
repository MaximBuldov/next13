import { $wcApi } from "@/services/http";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await $wcApi.get('products/categories?_fields=id,name,slug,count')
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json(e)
  }
}