import { ImageResponse } from 'next/og'

export const alt = 'Adee Labs - Innovation & Technology Solutions'
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = 'image/png'

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0a0a',
          backgroundImage: 'radial-gradient(circle at 25% 25%, #667eea20 0%, transparent 50%), radial-gradient(circle at 75% 75%, #764ba220 0%, transparent 50%)',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 40,
          }}
        >
          <div
            style={{
              fontSize: 120,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              width: 180,
              height: 180,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 40,
              color: 'white',
            }}
          >
            A
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <span
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 16,
            }}
          >
            Adee Labs
          </span>
          <span
            style={{
              fontSize: 32,
              color: '#a1a1aa',
            }}
          >
            Innovation & Technology Solutions
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            marginTop: 60,
            gap: 40,
          }}
        >
          {['Supersplit', 'Image2Vector', 'TextGPT', 'MapMaker'].map((product) => (
            <span
              key={product}
              style={{
                fontSize: 20,
                color: '#71717a',
              }}
            >
              {product}
            </span>
          ))}
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
