import { useStore } from "./store.js";
import { renderHandleMarkup } from "./handleMarkup.jsx";
import { renderContentMarkup } from "./contentMarkup.jsx";

export const GenericNode = ({ id, type, data }) => {
  const updateNodeData = useStore((state) => state.updateNodeData);

  const nodeName = data?.nodeName ?? id.replace(`${type}-`, `${type}_`);
  const onNameChange = (event) => {
    updateNodeData(id, "nodeName", event.target.value);
  };

  const handleMarkup = renderHandleMarkup(id, data, updateNodeData);
  const contentMarkup = renderContentMarkup(type, data, updateNodeData);

  return (
    <div style={{ border: "1px solid black" }}>
      <div className={`${type}`}>
        <span>{type}</span>
      </div>
      <div className={`${type}-name`}>
        <label>
          Name:
          <input
            className="nodrag nowheel"
            type="text"
            value={nodeName}
            onChange={onNameChange}
          />
        </label>
      </div>
      <div>{contentMarkup}</div>
      {handleMarkup}
    </div>
  );
};
