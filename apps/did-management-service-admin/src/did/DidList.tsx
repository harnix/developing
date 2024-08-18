import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const DidList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"DIDS"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="document" source="document" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <TextField label="metadata" source="metadata" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
