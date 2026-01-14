import { DraggableNode } from "../utils/draggableNode.jsx";

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: "10px" }}>
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <DraggableNode type="inputNode" label="Input" />
        <DraggableNode type="llmNode" label="LLM" />
        <DraggableNode type="outputNode" label="Output" />
        <DraggableNode type="textNode" label="Text" />
        <DraggableNode type="emailNode" label="Email" />
      </div>
    </div>
  );
};
