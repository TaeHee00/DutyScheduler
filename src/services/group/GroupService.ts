import {Server} from "../Server.ts";
import {Response} from "../Response.tsx";
import { toast } from "react-toastify";
import {GroupResponse} from "./GroupResponse.tsx";

export const GroupService = () => {
  const successNotify = (groupName: string) => toast.success(`${groupName} 그룹이 생성되었습니다!`);

  const createGroup = (groupName: string) => {
    if (groupName.trim() === "") {
      alert("그룹명을 입력해주세요.");
      return;
    }

    fetch(`${Server.url}:${Server.port}/api/${Server.version}/groups`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: groupName,
      }),
      credentials: "include",
    })
      .then(response => response.json())
      .then((response: Response<GroupResponse>) => {
        console.log(response);
        successNotify(response.data.name);
      })
      .catch((error) => {
        alert(error);
      })
  }

  const getGroupList = async (): Promise<Response<GroupResponse[]>> => {
    try {
      const response = await fetch(`${Server.url}:${Server.port}/api/${Server.version}/groups`, {
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
  };

  const joinGroup = (
    memberId: string,
    groupId: string,
  ) => {
    fetch(`${Server.url}:${Server.port}/api/${Server.version}/groups/join`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        memberId: memberId,
        groupId: groupId,
      }),
      credentials: "include",
    })
      .then(response => response.json())
      .then((response: Response<object>) => {
        console.log(response);
        alert(response);
      })
  }

  return { createGroup, getGroupList, joinGroup };
}
