export const renderContentMarkup = (type) => {
  switch (type) {
    case "inputNode": {
      return (
        <>
          <label>
            Format:
            <select className="nodrag nowheel">
              <option value="text">Text</option>
              <option value="file">File</option>
            </select>
          </label>

          <label>
            Input:
            <textarea className="nodrag nowheel"></textarea>
          </label>
          <label>
            Upload:
            <input className="nodrag nowheel" type="file" />
          </label>
        </>
      );
    }
    case "textNode": {
      return (
        <label>
          Input:
          <textarea className="nodrag nowheel"></textarea>
        </label>
      );
    }
    case "llmNode": {
      return (
        <>
          <label>
            Model:
            <select className="nodrag nowheel">
              <option value="model-1">Model-1</option>
              <option value="model-2">Model-2</option>
            </select>
          </label>
          <label>
            Prompt:
            <textarea className="nodrag nowheel"></textarea>
          </label>
        </>
      );
    }
    case "outputNode": {
      return (
        <>
          <label>
            Format:
            <select className="nodrag nowheel">
              <option value="text">Text</option>
              <option value="file">File</option>
            </select>
          </label>

          <label>
            Output:
            <textarea readOnly className="nodrag nowheel"></textarea>
          </label>
          <label>
            Download:
            <a className="nodrag nowheel" href=""></a>
          </label>
        </>
      );
    }
    case "emailNode": {
      return (
        <>
          <label>
            To:
            <input className="nodrag nowheel" type="email" />
          </label>
          <label>
            Subject:
            <input className="nodrag nowheel" type="text" />
          </label>
        </>
      );
    }
  }
};
