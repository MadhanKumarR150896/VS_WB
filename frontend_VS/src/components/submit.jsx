import { useStore } from "../utils/store";
import { useShallow } from "zustand/shallow";

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
});

export const SubmitButton = () => {
  const { nodes, edges } = useStore(useShallow(selector));
  const API_URL = import.meta.env.VITE_API_URL;

  async function sendPipeline() {
    try {
      const response = await fetch(`${API_URL}/pipelines/parse`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nodes, edges }),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error(
        "Couldn't provide the required data, please check the request",
        error
      );
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={sendPipeline}
        style={{ backgroundColor: "#000", color: "#fff" }}
        type="submit"
      >
        Submit
      </button>
    </div>
  );
};
