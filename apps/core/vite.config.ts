import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default {
  rollupOptions: {
    input: "src/main.tsx",
    format: "system",
    preserveEntrySignatures: true
  },
  base: "http://localhost:3000",
  plugins: [react()]
};
