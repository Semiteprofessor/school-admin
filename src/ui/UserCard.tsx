import React from "react";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-ranchoPurple even:bg-ranchoYellow p-4">
      <div className="flex items-center gap-2">
        {/* <div className={`w-8 h-8 rounded-full ${type}-500`}>
          {type === "student" && <RiStudentLine />}
          {type === "teacher" && <RiTeacherLine />}
          {type === "parent" && <RiFamilyLine />}
          {type === "staff" && <RiUserGroupLine />}
        </div>
        <div>{type.charAt(0).toUpperCase() + type.slice(1)}</div> */}
      </div>
    </div>
  );
};

export default UserCard;
