import { useStore } from "./store.js";
import { renderHandleMarkup } from "./handleMarkup.jsx";

export const GenericNode = ({ id, type, data }) => {
  const updateNodeData = useStore((state) => state.updateNodeData);

  const nodeName = data?.nodeName ?? id.replace(`${type}-`, `${type}_`);
  const onNameChange = (event) => {
    updateNodeData(id, "nodeName", event.target.value);
  };

  const handleData = data?.handle ?? { source: [], target: [] };
  const handleMarkup = renderHandleMarkup(id, handleData);

  return (
    <div style={{ width: "200px", height: "80px", border: "1px solid black" }}>
      <div className={`${type}`}>
        <span>{type}</span>
      </div>
      <div className={`${type}-name`}>
        <label>
          Name:
          <input type="text" value={nodeName} onChange={onNameChange} />
        </label>
      </div>
      {handleMarkup}
    </div>
  );
};
