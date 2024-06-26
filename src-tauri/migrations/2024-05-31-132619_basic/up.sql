-- Your SQL goes here
CREATE TABLE machines (
  machine_id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  status TEXT NOT NULL,
  ip TEXT NOT NULL,
  os TEXT NOT NULL,
  cpu TEXT NOT NULL,
  ram TEXT NOT NULL,
  disk TEXT NOT NULL
);

CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  username TEXT NOT NULL,
  password TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile TEXT NOT NULL,
  machine_list TEXT NOT NULL,
  role TEXT NOT NULL,
  created_at TEXT NOT NULL,
  last_login TEXT NOT NULL,
  last_logout TEXT NOT NULL,
  last_ip TEXT NOT NULL
);

INSERT INTO users (username, password, email, mobile, machine_list, role, created_at, last_login, last_logout, last_ip) VALUES ('admin', 'admin', 'admin@localhost', '1234567890', '1', 'admin', '2024-05-31 13:26:19', '2024-05-31 13:26:19', '2024-05-31 13:26:19', '127.0.0.1');

INSERT INTO machines (name, status, ip, os, cpu, ram, disk) VALUES ('hp', 'active', '127.0.0.1', 'windows', 'i5', '8GB', '1TB');
