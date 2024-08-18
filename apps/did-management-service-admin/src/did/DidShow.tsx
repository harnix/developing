import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { DID_TITLE_FIELD } from "./DidTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DidShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="document" source="document" />
        <TextField label="ID" source="id" />
        <TextField label="identifier" source="identifier" />
        <TextField label="metadata" source="metadata" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Credential"
          target="didId"
          label="Credentials"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <ReferenceField label="Did" source="did.id" reference="Did">
              <TextField source={DID_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="expirationDate" source="expirationDate" />
            <TextField label="ID" source="id" />
            <TextField label="issueDate" source="issueDate" />
            <TextField label="status" source="status" />
            <TextField label="type" source="typeField" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
