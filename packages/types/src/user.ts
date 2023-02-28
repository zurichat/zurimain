export interface User {
  id: string;
  first_name: string;
  last_name: string;
  display_name: string;
  email: string;
  phone: string;
  status: number;
  time_zone: string;
  created_at: string;
  updated_at: string;
  token: string;
}

export default User;
