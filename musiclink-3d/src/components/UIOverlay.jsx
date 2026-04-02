export default function UIOverlay() {
  return (
    <div
      className="hide-scrollbar"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        pointerEvents: "none",
      }}
    >
      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 2rem",
          gap: "1.5rem",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.7rem, 2vw, 0.9rem)",
            letterSpacing: "0.5em",
            textTransform: "uppercase",
            color: "#4488ff",
            fontWeight: "400",
          }}
        >
          Musiclink · Portugal
        </p>
        <h1
          style={{
            fontSize: "clamp(2.5rem, 7vw, 6rem)",
            fontWeight: "200",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "white",
            lineHeight: 1.1,
          }}
        >
          Premium Sound.
          <br />
          Precision Design.
        </h1>
        <p
          style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)",
            letterSpacing: "0.2em",
            color: "rgba(255,255,255,0.4)",
            fontWeight: "300",
            marginTop: "1rem",
          }}
        >
          scroll
        </p>
      </section>

      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
          padding: "0 10vw",
          gap: "1rem",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#4488ff",
          }}
        >
          Experiencia
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "200",
            letterSpacing: "0.1em",
            color: "white",
            lineHeight: 1.2,
          }}
        >
          Engineered
          <br />
          for Audiophiles
        </h2>
        <p
          style={{
            fontSize: "clamp(0.9rem, 1.8vw, 1rem)",
            color: "rgba(255,255,255,0.4)",
            fontWeight: "300",
            maxWidth: "400px",
            lineHeight: 1.8,
            letterSpacing: "0.05em",
          }}
        >
          Colunas, aparelhagens e sistemas home cinema selecionados para os
          ouvidos mais exigentes.
        </p>
      </section>

      <section
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          justifyContent: "center",
          padding: "0 10vw",
          gap: "1rem",
          textAlign: "right",
        }}
      >
        <p
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            letterSpacing: "0.4em",
            textTransform: "uppercase",
            color: "#4488ff",
          }}
        >
          Showroom
        </p>
        <h2
          style={{
            fontSize: "clamp(2rem, 5vw, 4rem)",
            fontWeight: "200",
            letterSpacing: "0.1em",
            color: "white",
            lineHeight: 1.2,
          }}
        >
          Experience
          <br />
          Musiclink in 3D
        </h2>
        <a
          href="https://musiclink.pt"
          style={{
            display: "inline-block",
            marginTop: "1rem",
            padding: "0.8rem 2.5rem",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "white",
            textDecoration: "none",
            letterSpacing: "0.3em",
            fontSize: "0.8rem",
            textTransform: "uppercase",
            pointerEvents: "auto",
          }}
        >
          Ver Loja
        </a>
      </section>
    </div>
  );
}