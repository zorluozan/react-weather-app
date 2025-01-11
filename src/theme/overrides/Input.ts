export default function Input() {
  return {
    MuiInput: {
      styleOverrides: {
        root: {
          fontSize: "12px",
          color: "#fff",
          padding: "10px",
          "&::before": {
            borderBottom: "none",
          },
          width: "100%",
          border: "1px solid #fff",
          borderRadius: "12px",
        },
      },
    },
  };
}
