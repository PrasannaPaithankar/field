// @generated automatically by Diesel CLI.

diesel::table! {
    machines (machine_id) {
        machine_id -> Int4,
        name -> Text,
        status -> Text,
        ip -> Text,
        os -> Text,
        cpu -> Text,
        ram -> Text,
        disk -> Text,
    }
}

diesel::table! {
    users (user_id) {
        user_id -> Int4,
        username -> Text,
        password -> Text,
        email -> Text,
        mobile -> Text,
        machine_list -> Text,
        role -> Text,
        created_at -> Text,
        last_login -> Text,
        last_logout -> Text,
        last_ip -> Text,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    machines,
    users,
);
