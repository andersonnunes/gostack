import React from "react";

import { Browser } from "./styles";

export default function Repository({ route }) {
  const repository = route.params.repository;

  return <Browser source={{ uri: repository.html_url }} />;
}
