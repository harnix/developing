import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { DidTitle } from "../did/DidTitle";
import { UserTitle } from "../user/UserTitle";

export const CredentialEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
