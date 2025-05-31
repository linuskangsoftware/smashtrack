import { NextResponse } from 'next/server'

export async function GET() {
  const now = new Date()
  const readableTimestamp = `${now.toLocaleDateString("en-AU", { dateStyle: "long" })} at ${now.toLocaleTimeString("en-AU", { timeStyle: "short" })}`
  const data = {
    apiversion: 'v1.0.0',
    message: 'API Server is running. Read the docs at: https://github.com/linuskangsoftware/smashtrack',
    timestamp: readableTimestamp,
  }
  return NextResponse.json(data)
}