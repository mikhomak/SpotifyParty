import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  party: PartyResponse;
  parties: Array<PartyModel>;
};


export type QueryPartyArgs = {
  id: Scalars['Int'];
};

export type PartyResponse = {
  __typename?: 'PartyResponse';
  errors?: Maybe<Array<FieldError>>;
  party?: Maybe<PartyModel>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type PartyModel = {
  __typename?: 'PartyModel';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  name: Scalars['String'];
  isPrivate: Scalars['Boolean'];
  currentUsersAmount: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createParty: PartyResponse;
  updateParty: PartyResponse;
  deleteParty: Scalars['Boolean'];
};


export type MutationCreatePartyArgs = {
  isPrivate: Scalars['Boolean'];
  name: Scalars['String'];
};


export type MutationUpdatePartyArgs = {
  name?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
};


export type MutationDeletePartyArgs = {
  id: Scalars['Int'];
};

export type CreatePartyMutationVariables = Exact<{
  name: Scalars['String'];
  isPrivate: Scalars['Boolean'];
}>;


export type CreatePartyMutation = (
  { __typename?: 'Mutation' }
  & { createParty: (
    { __typename?: 'PartyResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, party?: Maybe<(
      { __typename?: 'PartyModel' }
      & Pick<PartyModel, 'id' | 'name' | 'isPrivate'>
    )> }
  ) }
);

export type PartiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PartiesQuery = (
  { __typename?: 'Query' }
  & { parties: Array<(
    { __typename?: 'PartyModel' }
    & Pick<PartyModel, 'id' | 'name' | 'currentUsersAmount'>
  )> }
);

export type PartyQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type PartyQuery = (
  { __typename?: 'Query' }
  & { party: (
    { __typename?: 'PartyResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, party?: Maybe<(
      { __typename?: 'PartyModel' }
      & Pick<PartyModel, 'id' | 'name' | 'currentUsersAmount'>
    )> }
  ) }
);


export const CreatePartyDocument = gql`
    mutation CreateParty($name: String!, $isPrivate: Boolean!) {
  createParty(name: $name, isPrivate: $isPrivate) {
    errors {
      field
      message
    }
    party {
      id
      name
      isPrivate
    }
  }
}
    `;

export function useCreatePartyMutation() {
  return Urql.useMutation<CreatePartyMutation, CreatePartyMutationVariables>(CreatePartyDocument);
};
export const PartiesDocument = gql`
    query Parties {
  parties {
    id
    name
    currentUsersAmount
  }
}
    `;

export function usePartiesQuery(options: Omit<Urql.UseQueryArgs<PartiesQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PartiesQuery>({ query: PartiesDocument, ...options });
};
export const PartyDocument = gql`
    query Party($id: Int!) {
  party(id: $id) {
    errors {
      field
      message
    }
    party {
      id
      name
      currentUsersAmount
    }
  }
}
    `;

export function usePartyQuery(options: Omit<Urql.UseQueryArgs<PartyQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PartyQuery>({ query: PartyDocument, ...options });
};