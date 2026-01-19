const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #0f172a, #1e293b)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },

  card: {
    width: "420px",
    backgroundColor: "rgba(255,255,255,0.9)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 30px 80px rgba(0,0,0,0.3)",
  },

  title: {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "6px",
  },

  subtitle: {
    fontSize: "14px",
    color: "#475569",
    marginBottom: "20px",
  },

  textarea: {
    width: "100%",
    height: "140px",
    padding: "14px",
    borderRadius: "12px",
    border: "1px solid #e5e7eb",
    outline: "none",
    resize: "none",
    fontSize: "14px",
    marginBottom: "16px",
  },

  stats: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
    color: "#334155",
    fontSize: "14px",
  },

  actions: {
    display: "flex",
    gap: "10px",
  },

  button: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#6366f1",
    color: "white",
    fontSize: "12px",
    cursor: "pointer",
  },

  clearButton: {
    flex: 1,
    padding: "10px",
    borderRadius: "10px",
    border: "1px solid #cbd5f5",
    backgroundColor: "transparent",
    color: "#4338ca",
    fontSize: "12px",
    cursor: "pointer",
  },
};