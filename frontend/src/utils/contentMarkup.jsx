import { memo, useEffect, useState } from "react";
import { RenderEmailNode } from "../nodes/emailNode";
import { RenderInputNode } from "../nodes/inputNode";
import { RenderLLMNode } from "../nodes/llmNode";
import { RenderOutputNode } from "../nodes/outputNode";
import { RenderTextNode } from "../nodes/textNode";

export const RenderContentMarkup = memo(
  ({ id, type, data, updateNodeData, updateNodeInternals }) => {
    const [dataText, setDataText] = useState(data?.text ?? "");

    useEffect(() => {
      const timer = setTimeout(() => {
        if (dataText !== data?.text) {
          updateNodeData(id, "text", dataText);
        }
      }, 500);

      return () => {
        clearTimeout(timer);
      };
    }, [updateNodeData, dataText, id, data?.text]);

    const dataMode = data?.mode ?? "text";
    const onModeChange = (event) => {
      updateNodeData(id, "mode", event.target.value);
    };

    const onTextChange = (event) => {
      const textValue = event.target.value;

      if (textValue === "{{input}}") {
        updateNodeData(id, "handle", {
          ...data.handle,
          target: [...data.handle.target, "input"],
        });
        updateNodeInternals(id);
        setDataText("");
        return;
      }

      if (textValue === "{{output}}") {
        updateNodeData(id, "handle", {
          ...data.handle,
          source: [...data.handle.source, "output"],
        });
        updateNodeInternals(id);
        setDataText("");
        return;
      }

      setDataText(textValue);
    };

    switch (type) {
      case "inputNode":
        return (
          <RenderInputNode
            id={id}
            data={data}
            updateNodeData={updateNodeData}
            dataMode={dataMode}
            onModeChange={onModeChange}
            dataText={dataText}
            onTextChange={onTextChange}
          />
        );

      case "textNode":
        return (
          <RenderTextNode dataText={dataText} onTextChange={onTextChange} />
        );

      case "llmNode":
        return (
          <RenderLLMNode
            id={id}
            data={data}
            updateNodeData={updateNodeData}
            dataText={dataText}
            onTextChange={onTextChange}
          />
        );

      case "outputNode":
        return (
          <RenderOutputNode
            id={id}
            data={data}
            dataMode={dataMode}
            onModeChange={onModeChange}
          />
        );

      case "emailNode":
        return (
          <RenderEmailNode
            id={id}
            data={data}
            updateNodeData={updateNodeData}
          />
        );

      default:
        return null;
    }
  }
);
