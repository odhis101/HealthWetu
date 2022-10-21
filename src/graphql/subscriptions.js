/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
      id
      userId
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carID
      car {
        id
        type
        latitude
        longuitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      carOrdersId
    }
  }
`;
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
      id
      type
      latitude
      longuitude
      heading
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
      id
      username
      email
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
      id
      username
      email
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
      id
      username
      email
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar {
    onCreateCar {
      id
      type
      latitude
      longuitude
      heading
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar {
    onUpdateCar {
      id
      type
      latitude
      longuitude
      heading
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar {
    onDeleteCar {
      id
      type
      latitude
      longuitude
      heading
      orders {
        items {
          id
          userId
          createdAt
          type
          status
          originLatitude
          oreiginLongitude
          destLatitude
          destLongitude
          carID
          updatedAt
          userOrdersId
          carOrdersId
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder {
    onCreateOrder {
      id
      userId
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carID
      car {
        id
        type
        latitude
        longuitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      carOrdersId
    }
  }
`;
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder {
    onUpdateOrder {
      id
      userId
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carID
      car {
        id
        type
        latitude
        longuitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      carOrdersId
    }
  }
`;
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder {
    onDeleteOrder {
      id
      userId
      createdAt
      type
      status
      originLatitude
      oreiginLongitude
      destLatitude
      destLongitude
      user {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      carID
      car {
        id
        type
        latitude
        longuitude
        heading
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
      userOrdersId
      carOrdersId
    }
  }
`;
