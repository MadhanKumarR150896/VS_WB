export const renderContentMarkup = (id, type, data, updateNodeData) => {
  const dataMode = data?.mode ?? "text";
  const onModeChange = (event) => {
    updateNodeData(id, "mode", event.target.value);
  };

  const dataText = data?.text ?? "";
  const onTextChange = (event) => {
    updateNodeData(id, "text", event.target.value);
  };

  switch (type) {
    case "inputNode": {
      return (
        <>
          <label>
            Format:
            <select
              value={dataMode}
              onChange={onModeChange}
              className="nodrag nowheel"
            >
              <option value="text">Text</option>
              <option value="file">File</option>
            </select>
          </label>
          {dataMode === "text" && (
            <label>
              Input:
              <textarea
                value={dataText}
                onChange={onTextChange}
                className="nodrag nowheel"
              ></textarea>
            </label>
          )}
          {dataMode === "file" && (
            <label>
              Upload:
              <input
                className="nodrag nowheel"
                type="file"
                multiple
                onChange={(event) => {
                  updateNodeData(id, "files", Array.from(event.target.files));
                }}
              />
              {data.files?.length > 0 && (
                <ul style={{ listStyle: "none" }}>
                  {data.files.map((file, index) => (
                    <li key={`${id}-file${index + 1}`}>{file.name}</li>
                  ))}
                </ul>
              )}
            </label>
          )}
        </>
      );
    }
    case "textNode": {
      return (
        <label>
          Input:
          <textarea
            value={dataText}
            onChange={onTextChange}
            className="nodrag nowheel"
          ></textarea>
        </label>
      );
    }
    case "llmNode": {
      return (
        <>
          <label>
            Model:
            <select
              value={data?.model ?? "model-1"}
              onChange={(event) => {
                updateNodeData(id, "model", event.target.value);
              }}
              className="nodrag nowheel"
            >
              <option value="model-1">Model-1</option>
              <option value="model-2">Model-2</option>
            </select>
          </label>
          <label>
            Prompt:
            <textarea
              value={dataText}
              onChange={onTextChange}
              className="nodrag nowheel"
            ></textarea>
          </label>
        </>
      );
    }
    case "outputNode": {
      return (
        <>
          <label>
            Format:
            <select
              value={dataMode}
              onChange={onModeChange}
              className="nodrag nowheel"
            >
              <option value="text">Text</option>
              <option value="file">File</option>
            </select>
          </label>
          {dataMode === "text" && (
            <label>
              Output:
              <pre
                style={{ whiteSpace: "pre-wrap", wordBreak: "break-word" }}
                className="nodrag nowheel"
              >
                {data?.text ?? ""}
              </pre>
            </label>
          )}
          {dataMode === "file" && data?.files?.length > 0 && (
            <label>
              Download:
              <ul style={{ listStyle: "none" }}>
                {data.files.map((file, index) => (
                  <li key={`${id}-file${index + 1}`}>
                    <a
                      style={{ textDecoration: "none" }}
                      className="nodrag nowheel"
                      href={URL.createObjectURL(file)}
                      download={file.name}
                    >
                      {file.name}
                    </a>
                  </li>
                ))}
              </ul>
            </label>
          )}

          {dataMode === "file" &&
            (!data?.files || data?.files.length === 0) && (
              <label>
                Download:
                <div>File not found</div>
              </label>
            )}
        </>
      );
    }
    case "emailNode": {
      return (
        <>
          <label>
            To:
            <input
              value={data?.email ?? ""}
              onChange={(event) => {
                updateNodeData(id, "email", event.target.value);
              }}
              className="nodrag nowheel"
              type="email"
            />
          </label>
          <label>
            Subject:
            <input
              value={dataText}
              onChange={onTextChange}
              className="nodrag nowheel"
              type="text"
            />
          </label>
        </>
      );
    }
    default:
      return null;
  }
};
