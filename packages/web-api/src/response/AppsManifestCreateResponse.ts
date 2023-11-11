/* eslint-disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AppsManifestCreateResponse = WebAPICallResult & {
  app_id?:              string;
  credentials?:         Credentials;
  error?:               string;
  errors?:              Error[];
  needed?:              string;
  oauth_authorize_url?: string;
  ok?:                  boolean;
  provided?:            string;
  response_metadata?:   ResponseMetadata;
};

export interface Credentials {
  client_id?:          string;
  client_secret?:      string;
  signing_secret?:     string;
  verification_token?: string;
}

export interface Error {
  code?:    string;
  message?: string;
  pointer?: string;
}

export interface ResponseMetadata {
  messages?: string[];
}
