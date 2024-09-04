/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFieldworker = /* GraphQL */ `
  query GetFieldworker($id: ID!) {
    getFieldworker(id: $id) {
      id
      fwname
      fwlocation
      jobassgned
      jobstatus
      jobcompletiondateandtime
      jobiuploadmage
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listFieldworkers = /* GraphQL */ `
  query ListFieldworkers(
    $filter: ModelFieldworkerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFieldworkers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        fwname
        fwlocation
        jobassgned
        jobstatus
        jobcompletiondateandtime
        jobiuploadmage
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
