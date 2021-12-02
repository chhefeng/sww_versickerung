import React, { useState } from "react";
import { useForm } from "react-hook-form";
import DataGrid, { TextEditor } from "react-data-grid";
import styled from "styled-components";

function VMulde() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  const DataGridContainer = styled.div`
    width: 50%;
  `;

  function MyGrid() {
    const columns = [
      { key: "id", name: "ID", editor: TextEditor },
      { key: "title", name: "Title", editor: TextEditor },
    ];

    const initialRows = [{ id: 0, title: "Example" }, {}, {}, {}, {}, {}];

    const [rows, setRows] = useState(initialRows);

    return <DataGrid columns={columns} rows={rows} onRowsChange={setRows} />;
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* 1. part of required input data */}
        <div>
          <label htmlFor="gesametFlaeche">Einzugsgebietsfläche</label>
          <input placeholder="bill" {...register("gesametFlaeche")} />
        </div>

        <div>
          <label htmlFor="abflussbeiwert">Abflussbeiwert </label>
          <input placeholder="luo" {...register("abflussbeiwert")} />
        </div>

        {/* 2. part of required input data */}
        <div>
          <label htmlFor="versickerungsflaeche">Versickerungsfläche </label>
          <input placeholder="luo" {...register("versickerungsflaeche")} />
        </div>

        <div>
          <label htmlFor="durchlaessigkeitsbeiwert">
            Durchlässigkeitsbeiwert{" "}
          </label>
          <input placeholder="luo" {...register("durchlaessigkeitsbeiwert")} />
        </div>

        <div>
          <label htmlFor="regenhaeufigkeit">Regenhäufigkeit </label>
          <input placeholder="luo" {...register("regenhaeufigkeit")} />
        </div>

        <div>
          <label htmlFor="zuschlagsfaktor">Zuschlagsfaktor </label>
          <input placeholder="luo" {...register("zuschlagsfaktor")} />
        </div>

        {/* 3. part of required input data */}
        <DataGridContainer>
          <MyGrid />
        </DataGridContainer>
        <input type="submit" />
      </form>
    </div>
  );
}

export default VMulde;
