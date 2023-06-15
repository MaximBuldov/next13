import { $wcApi } from "@/services/http";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { data } = await $wcApi.get('products?_fields=id,name,slug,description,sku,price,average_rating,categories,images,attributes,default_attributes,variations,acf')
    return NextResponse.json(data)
  } catch (e: any) {
    return NextResponse.json(e)
  }
}