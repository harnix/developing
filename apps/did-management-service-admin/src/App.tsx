import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { DidList } from "./did/DidList";
import { DidCreate } from "./did/DidCreate";
import { DidEdit } from "./did/DidEdit";
import { DidShow } from "./did/DidShow";
import { CredentialList } from "./credential/CredentialList";
import { CredentialCreate } from "./credential/CredentialCreate";
import { CredentialEdit } from "./credential/CredentialEdit";
import { CredentialShow } from "./credential/CredentialShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"DIDManagementService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Did"
          list={DidList}
          edit={DidEdit}
          create={DidCreate}
          show={DidShow}
        />
        <Resource
          name="Credential"
          list={CredentialList}
          edit={CredentialEdit}
          create={CredentialCreate}
          show={CredentialShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
