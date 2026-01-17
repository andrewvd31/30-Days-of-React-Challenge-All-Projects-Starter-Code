const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#5b0098",
    padding: "40px",
  },

  card: {
    width: "360px",
    backgroundColor: "rgba(255,255,255,0.85)",
    backdropFilter: "blur(12px)",
    borderRadius: "20px",
    padding: "32px",
    boxShadow: "0 25px 60px rgba(0,0,0,0.2)",
    textAlign: "center",
  },

  avatar: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    backgroundColor: "#23003b",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "32px",
    fontWeight: 700,
    margin: "0 auto 16px",
  },

  name: {
    fontSize: "22px",
    fontWeight: 700,
    marginBottom: "8px",
  },

  bio: {
    fontSize: "14px",
    color: "#475569",
    marginBottom: "24px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
  },

  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    fontSize: "14px",
    resize: "none",
    height: "80px",
  },
};