import { gql } from "@apollo/client";

export const GET_ROCKETS = gql`
query Rockets {
  rockets {
    id
    name
    active
    company
  }
}
`;