"use client"

interface GlobalErrorProps {
  error: Error & { digest?: string }
  reset: () => void
}

export default function GlobalError({ reset }: GlobalErrorProps) {
  return (
    <html lang="cs">
      <body
        style={{
          margin: 0,
          fontFamily: "Georgia, serif",
          backgroundColor: "#FAFAFA",
          color: "#1A1718",
        }}
      >
        <main
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh",
            padding: "2rem",
            textAlign: "center",
          }}
        >
          <p
            style={{
              fontSize: "0.75rem",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#8E8A8C",
              marginBottom: "0.5rem",
            }}
          >
            Něco se pokazilo
          </p>
          <h1
            style={{
              fontSize: "2rem",
              fontWeight: 300,
              letterSpacing: "-0.02em",
              margin: "0 0 0.75rem 0",
            }}
          >
            Omlouváme se
          </h1>
          <p
            style={{
              fontSize: "1rem",
              color: "#6B6769",
              maxWidth: "24rem",
              lineHeight: 1.6,
              marginBottom: "2rem",
            }}
          >
            Došlo k neočekávané chybě. Zkuste to prosím znovu.
          </p>
          <button
            onClick={reset}
            style={{
              backgroundColor: "#522953",
              color: "#FFFFFF",
              border: "none",
              padding: "0.75rem 2rem",
              fontSize: "0.875rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Zkusit znovu
          </button>
        </main>
      </body>
    </html>
  )
}
