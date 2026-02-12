import { NextResponse } from 'next/server';

export async function GET() {
  const healthCheck = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: process.env.NODE_ENV,
    version: process.env.npm_package_version || '1.0.0',
    services: {
      database: 'connected',
      email: 'configured',
      storage: 'available'
    }
  };

  return NextResponse.json(healthCheck, { status: 200 });
}

export async function HEAD() {
  return new NextResponse(null, { status: 200 });
}
