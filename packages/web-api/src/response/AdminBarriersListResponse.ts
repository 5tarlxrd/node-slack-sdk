/* tslint:disable */
/////////////////////////////////////////////////////////////////////////////////////////
//                                                                                     //
// !!! DO NOT EDIT THIS FILE !!!                                                       //
//                                                                                     //
// This file is auto-generated by scripts/generate-web-api-types.sh in the repository. //
// Please refer to the script code to learn how to update the source data.             //
//                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////

import { WebAPICallResult } from '../WebClient';
export type AdminBarriersListResponse = WebAPICallResult & {
  ok?:       boolean;
  barriers?: Barrier[];
  error?:    string;
  needed?:   string;
  provided?: string;
};

export interface Barrier {
  id?:                        string;
  enterprise_id?:             string;
  primary_usergroup?:         Usergroup;
  barriered_from_usergroups?: Usergroup[];
  restricted_subjects?:       string[];
  date_update?:               number;
}

export interface Usergroup {
  id?:   string;
  name?: string;
}
