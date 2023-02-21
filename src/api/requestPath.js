

export const requestPath = {
  createUser: "/users/",
  loginUser: "/token/",
  currentUser: "/users/current_user/",
  allUsers: "/users/",
  followToUser: "/follow/",
  userById: (id) => `/users/${id}/`
}