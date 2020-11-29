const ROLE = {
  ADMIN: "admin",
  BASIC: "basic",
};

const users = [
  { userId: 1, userRole: ROLE.ADMIN, name: "Adminstrator" },
  { userId: 2, userRole: ROLE.BASIC, name: "User 2" },
  { userId: 3, userRole: ROLE.BASIC, name: "User 3" },
];

const projects = [
  { projectId: 1, projectName: "Project 1", owner: 1 },
  { projectId: 2, projectName: "Project 2", owner: 2 },
  { projectId: 3, projectName: "Project 3", owner: 3 },
];

module.exports = { ROLE, users, projects };
