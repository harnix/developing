import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  ReferenceField,
  TextField,
} from "react-admin";
import { DID_TITLE_FIELD } from "../did/DidTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const CredentialShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
