/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createFieldworker = /* GraphQL */ `
  mutation CreateFieldworker(
    $input: CreateFieldworkerInput!
    $condition: ModelFieldworkerConditionInput
  ) {
    createFieldworker(input: $input, condition: $condition) {
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
export const updateFieldworker = /* GraphQL */ `
  mutation UpdateFieldworker(
    $input: UpdateFieldworkerInput!
    $condition: ModelFieldworkerConditionInput
  ) {
    updateFieldworker(input: $input, condition: $condition) {
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
export const deleteFieldworker = /* GraphQL */ `
  mutation DeleteFieldworker(
    $input: DeleteFieldworkerInput!
    $condition: ModelFieldworkerConditionInput
  ) {
    deleteFieldworker(input: $input, condition: $condition) {
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
