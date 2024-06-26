use serde::{Serialize, Deserialize};
use crate::schema::machines;
use crate::schema::users;

#[derive(Serialize, Deserialize, Queryable, Insertable, Clone, Debug)]
#[diesel(table_name = machines)]
pub struct Machine {
  pub machine_id: i32,
  pub name: String,
  pub status: String,
  pub ip: String,
  pub os: String,
  pub cpu: String,
  pub ram: String,
  pub disk: String
}

#[derive(Serialize, Deserialize, Queryable, Insertable)]
#[diesel(table_name = users)]
pub struct User {
  pub user_id: i32,
  pub username: String,
  pub password: String,
  pub email: String,
  pub mobile: String,
  pub machine_list: String,
  pub role: String,
  pub created_at: String,
  pub last_login: String,
  pub last_logout: String,
  pub last_ip: String,
}



