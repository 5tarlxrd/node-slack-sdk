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
export type AuthTestResponse = WebAPICallResult & {
  ok?:                    boolean;
  url?:                   string;
  team?:                  string;
  user?:                  string;
  team_id?:               string;
  user_id?:               string;
  bot_id?:                string;
  enterprise_id?:         string;
  error?:                 string;
  app_name?:              string;
  app_id?:                string;
  is_enterprise_install?: boolean;
  needed?:                string;
  provided?:              string;
};
