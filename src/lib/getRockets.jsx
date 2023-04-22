import { gql } from "@apollo/client";

export const GET_ROCKETS = gql`
query Rockets {
  rockets {
    id
    name
    type
    mass {
      kg
    }
    boosters
    cost_per_launch
    engines {
      type
    }
    description
    height {
      meters
    }
    diameter {
      meters
    }
    first_flight
    active
    company
  }
}
`;