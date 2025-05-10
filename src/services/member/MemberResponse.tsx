import {GroupResponse} from "../group/GroupResponse.tsx";

export interface MemberResponse {
  id: string;
  name: string;
  groups: GroupResponse[];
};
