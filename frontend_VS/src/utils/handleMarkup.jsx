import { Handle, Position } from "reactflow";

export const renderHandleMarkup = (id, handleData) => {
  return Object.entries(handleData).map(([handleType, handles]) => {
    const handlePosition =
      handleType === "source" ? Position.Right : Position.Left;
    return handles.map((handleName, index) => {
      const handlePlace = `${((index + 1) * 100) / (handles.length + 1)}%`;
      const handleId = `${id}-${handleType}-${handleName}-${index + 1}`;
      return (
        <Handle
          key={handleId}
          type={handleType}
          position={handlePosition}
          id={handleId}
          className={`${handleType}-handle`}
          style={{ top: handlePlace }}
        />
      );
    });
  });
};
