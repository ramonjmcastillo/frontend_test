import Select from "react-select";
import { useId } from "react";

interface ControlsProps {
  setSortField: (event: string) => void;
  setSortDirection: (event: string) => void;
}

const Controls = ({ setSortField, setSortDirection }: ControlsProps) => {
  const fieldOptions = [
    { label: "Name", value: "name" },
    { label: "Company", value: "company" },
    { label: "Email", value: "email" },
  ];
  const directionOptions = [
    { label: "Ascending", value: "ascending" },
    { label: "Descending", value: "descending" },
  ];

  return (
    <div className="gallery-controls controls">
      <div className="form-group group">
        <label htmlFor="sort-field" className="label">
          Sort Field
        </label>
        <Select
          instanceId={useId()}
          options={fieldOptions}
          inputId="sort-field"
          className="input"
          onChange={(event) => setSortField(event?.value!)}
        />
      </div>
      <div className="form-group group">
        <label htmlFor="sort-direction" className="label">
          Sort Direction
        </label>
        <Select
          instanceId={useId()}
          options={directionOptions}
          inputId="sort-direction"
          className="input"
          onChange={(event) => setSortDirection(event?.value!)}
        />
      </div>
    </div>
  );
};

export default Controls;
