CREATE DATABASE commonApp

CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    role TEXT NULL DEFAULT NULL
)

CREATE TABLE invitations (
    id SERIAL PRIMARY KEY,
    issued_by  SERIAL NOT NULL,
    date_issued date NOT NULL,
    client_email TEXT NOT NULL,
    client_role_id SERIAL NOT NULL,
    FOREIGN KEY(issued_by)
    REFERENCES user(id)
    ON DELETE CASCADE,
    FOREIGN KEY(client_role_id)
    REFERENCES roles(id)
    ON UPDATE CASCADE
)

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY (role_id) REFERENCES roles (id)
)

CREATE TABLE admins (
    id SERIAL PRIMARY KEY,
    user_id SERIAL,
    name TEXT NOT NULL,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
)



CREATE TABLE recruiters (
    id SERIAL PRIMARY KEY,
    FOREIGN KEY user_id SERIAL,
    industry TEXT NOT NULL,
    region TEXT NOT NULL,
    company_size TEXT NOT NULL,
    company_stage TEXT NOT NULL,
)

CREATE TABLE applicants (
    id SERIAL PRIMARY KEY,
    user_id SERIAL,
    name TEXT NOT NULL,
    experience int,
    linkedin int,
    school TEXT,
    desired_position TEXT,
    desired_industry TEXT,
    desired_company_size int,
    desired_region TEXT,
    desired_company_stage TEXT,
    desired_resume TEXT,
    FOREIGN KEY(user_id)
    REFERENCES users(id)
    ON DELETE CASCADE
)