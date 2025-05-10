import {Server} from "../Server.ts";
import {Response} from "../Response.tsx";
import { toast } from "react-toastify";
import {EditGroup} from "../group/EditGroup.ts";
import {MemberResponse} from "./MemberResponse.tsx";

export interface EditMemberRequest {
  memberId: string;
  memberName: string;
  groups: EditGroup[];
}
export const MemberService = () => {
  const successNotify = (message: string) => toast.success(message);

  const editMember = (editMemberRequest: EditMemberRequest) => {
    // TODO: 변경사항 없을 경우 return;
    fetch(`${Server.url}:${Server.port}/api/${Server.version}/members`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId: editMemberRequest.memberId,
        memberName: editMemberRequest.memberName,
        groups: editMemberRequest.groups,
      }),
      credentials: "include",
    })
      .then(response => response.json())
      .then((response: Response<object>) => {
        successNotify(response.message);
      })
      .catch((error) => {
        alert(error);
        throw error;
      })
  }

  const getMemberList = async (): Promise<Response<MemberResponse[]>> => {
    try {
      const response = await fetch(`${Server.url}:${Server.port}/api/${Server.version}/members/list`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      alert(error);
      throw error;
    }
  }

  return { editMember, getMemberList };
}
