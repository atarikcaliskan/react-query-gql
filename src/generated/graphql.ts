import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { fetcher } from '../utils/fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: any;
};

export type AuthResponse = {
  __typename?: 'AuthResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export type ChangePasswordInput = {
  confirmNewPassword: Scalars['String'];
  newPassword: Scalars['String'];
  oldPassword: Scalars['String'];
};

export type Client = {
  __typename?: 'Client';
  certificateId?: Maybe<Scalars['String']>;
  certificatePem?: Maybe<Scalars['String']>;
  connectedPrinters?: Maybe<Array<ConnectedPrinter>>;
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  privateKey?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};

export type ConnectedPrinter = {
  __typename?: 'ConnectedPrinter';
  baudRate: Scalars['Int'];
  hardwareId: Scalars['String'];
  port: Scalars['String'];
};

export type Edge = {
  __typename?: 'Edge';
  id: Scalars['String'];
  source: Scalars['String'];
  sourceHandle: Scalars['String'];
  target: Scalars['String'];
  targetHandle: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  fields?: Maybe<Array<Scalars['String']>>;
  message: Scalars['String'];
};

export type Flow = {
  __typename?: 'Flow';
  edges?: Maybe<Array<Edge>>;
  nodes?: Maybe<Array<Node>>;
};

export enum FlowNodeTypeEnum {
  Print = 'Print',
  Printer = 'Printer'
}

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  changeFullName: User;
  changePassword: AuthResponse;
  createPrinter: Printer;
  login: AuthResponse;
  logout: Scalars['Boolean'];
  register: AuthResponse;
  sendVerify: Scalars['String'];
  updateProfileImage: User;
  verifyUser: Scalars['Boolean'];
};


export type MutationChangeFullNameArgs = {
  fullName: Scalars['String'];
};


export type MutationChangePasswordArgs = {
  options: ChangePasswordInput;
};


export type MutationCreatePrinterArgs = {
  clientId: Scalars['String'];
  hardwareId: Scalars['String'];
  heatedBed: Scalars['Boolean'];
  name: Scalars['String'];
};


export type MutationLoginArgs = {
  options: LoginInput;
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationSendVerifyArgs = {
  id: Scalars['String'];
};


export type MutationUpdateProfileImageArgs = {
  imageUrl: Scalars['String'];
};


export type MutationVerifyUserArgs = {
  token: Scalars['String'];
};

export type Node = {
  __typename?: 'Node';
  data: NodeData;
  id: Scalars['String'];
  type: FlowNodeTypeEnum;
};

export type NodeData = {
  __typename?: 'NodeData';
  lastPrint?: Maybe<Scalars['DateTime']>;
  name: Scalars['String'];
};

export type Printer = {
  __typename?: 'Printer';
  clientId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  hardwareId?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  clients: Array<Client>;
  me?: Maybe<User>;
  printers: Array<Printer>;
};


export type QueryClientsArgs = {
  id?: InputMaybe<Scalars['String']>;
};


export type QueryPrintersArgs = {
  id?: InputMaybe<Scalars['String']>;
};

export type RegisterInput = {
  email: Scalars['String'];
  fullName: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  apiKey: Scalars['String'];
  createdAt: Scalars['DateTime'];
  deletedAt?: Maybe<Scalars['DateTime']>;
  email: Scalars['String'];
  flow: Flow;
  fullName: Scalars['String'];
  id: Scalars['String'];
  identityId?: Maybe<Scalars['String']>;
  imageUrl?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  printers?: Maybe<Array<Printer>>;
  updatedAt: Scalars['DateTime'];
  verified: Scalars['Boolean'];
};

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string } | null };


export const MeDocument = `
    query Me {
  me {
    id
  }
}
    `;
export const useMeQuery = <
      TData = MeQuery,
      TError = unknown
    >(
      variables?: MeQueryVariables,
      options?: UseQueryOptions<MeQuery, TError, TData>
    ) =>
    useQuery<MeQuery, TError, TData>(
      variables === undefined ? ['Me'] : ['Me', variables],
      fetcher<MeQuery, MeQueryVariables>(MeDocument, variables),
      options
    );

useMeQuery.getKey = (variables?: MeQueryVariables) => variables === undefined ? ['Me'] : ['Me', variables];
;

useMeQuery.fetcher = (variables?: MeQueryVariables, options?: RequestInit['headers']) => fetcher<MeQuery, MeQueryVariables>(MeDocument, variables, options);