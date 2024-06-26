// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

#[macro_use]
extern crate diesel;

pub mod models;
pub mod schema;
pub mod db;
pub mod machines;

fn main() {
  let pool = db::establish_connection();
  tauri::Builder::default()
    .manage(pool)
    .invoke_handler(tauri::generate_handler![machines::get_machines, machines::add_machine])
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
