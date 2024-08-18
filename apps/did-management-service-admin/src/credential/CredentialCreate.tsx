import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DidTitle } from "../did/DidTitle";
import { UserTitle } from "../user/UserTitle";

export const CredentialCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="did.id" reference="Did" label="Did">
          <SelectInput optionText={DidTitle} />
        </ReferenceInput>
        <DateTimeInput label="expirationDate" source="expirationDate" />
        <DateTimeInput label="issueDate" source="issueDate" />
        <TextInput label="status" source="status" />
        <TextInput label="type" source="typeField" />
        <ReferenceInput source="user.id" reference="User" label="User">
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
