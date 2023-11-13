import React, { useState } from "react";
import { User } from "../Types";

const About: React.FC = () => {
  const [user, setUser] = useState<User>({
    id: 12,
    name: "string",
    email: "string",
    type: "string",
    created_at: "string",
    updated_at: "string",
  });

  return <div>{user.id}</div>;
};

export default About;
