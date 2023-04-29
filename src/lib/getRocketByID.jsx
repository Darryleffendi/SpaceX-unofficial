import { gql } from "@apollo/client";

export const GET_ROCKET_BY_ID = gql`
  query Rocket($rocketId: ID!) {
    rocket(id: $rocketId) {
      id
      name
      type
      mass {
        kg
      }
      cost_per_launch
      country
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
      engines {
        type
        layout
        thrust_sea_level {
          kN
        }
        thrust_vacuum {
          kN
        }
        propellant_1
        propellant_2
        version
      }
      payload_weights {
        kg
        name
      }
    }
  }
`;