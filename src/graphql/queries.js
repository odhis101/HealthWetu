/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        email
        orders {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCars(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
export const listOrders = /* GraphQL */ `
  query ListOrders(
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
        user {
          id
          username
          email
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
          createdAt
          updatedAt
        }
        updatedAt
        userOrdersId
        carOrdersId
      }
      nextToken
    }
  }
`;
