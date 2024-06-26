use crate::models::Machine;
use crate::models::User;
use crate::schema::machines::dsl::*;
use crate::schema::users::dsl::*;
use diesel::prelude::*;
use diesel::r2d2::{ConnectionManager, Pool};

#[tauri::command]
pub fn get_machines(userid: i32, dbconnection: tauri::State<Pool<ConnectionManager<PgConnection>>>) -> Vec<Machine> {
  let dbconnection = dbconnection.get().expect("Could not get connection from pool");

  let userres = users
    .filter(user_id.eq(userid))
    .load::<User>(&dbconnection)
    .expect("Error loading user");

  // the user.machine_list is a string of machine_id's separated by commas
  let machine_ids: Vec<&str> = userres[0].machine_list.split(",").collect();
  let mut list_output: Vec<Machine> = Vec::new();
  for mid in machine_ids {
    let mid_int = mid.parse::<i32>().unwrap();
    let machineres = machines
      .filter(machine_id.eq(mid_int))
      .load::<Machine>(&dbconnection)
      .expect("Error loading machine");
    list_output.push(machineres[0].clone());
  }
  list_output
}

#[tauri::command]
pub fn add_machine(new_machine: Machine, dbconnection: tauri::State<Pool<ConnectionManager<PgConnection>>>) -> Machine {
  let dbconnection = dbconnection.get().expect("Could not get connection from pool");

  let insert_res = diesel::insert_into(machines)
    .values(&new_machine)
    .get_result::<Machine>(&dbconnection)
    .expect("Error saving new machine");

  insert_res
}