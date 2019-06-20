use yunko_2000;

create table hospitaldepartments
(
    id    int auto_increment
        primary key,
    label varchar(120) not null
);

create table doctors
(
    id              int auto_increment
        primary key,
    name            varchar(70) not null,
    surname         varchar(70) not null,
    work_experience int         null,
    phone_number    bigint      null,
    email           varchar(70) null,
    floor           int         null,
    office          int         null,
    description     text        null,
    department_id   int         null,
    constraint doctors_hospitaldepartments_id_fk
        foreign key (department_id) references hospitaldepartments (id)
            on update cascade on delete set null
);

create table comments
(
    id        int auto_increment
        primary key,
    text      text     null,
    data      datetime not null,
    user_id   int      null,
    doctor_id int      null,
    constraint comments_doctors_id_fk
        foreign key (doctor_id) references doctors (id)
            on update cascade on delete set null,
    constraint comments_user_id_fk
        foreign key (user_id) references social.user (id)
            on update cascade on delete set null
);

create table user
(
    id       int auto_increment
        primary key,
    name     varchar(70) not null,
    surname  varchar(70) not null,
    email    varchar(70) not null,
    password varchar(70) not null
);
*******************************************************************

insert into user (name, surname, email, password) VALUE ('Vasyl', 'Torek', 'Vasyl2@mail.ua', '1');
insert into user (name, surname, email, password) VALUE ('Tomat', 'Bochkaek', 'Tomat@mail.ua', '2');
insert into user (name, surname, email, password) VALUE ('Kokos', 'Kokosiv', 'Kokos@mail.ua', '3');
insert into user (name, surname, email, password) VALUE ('Arbuz', 'Arbuzych', 'Arbuz@mail.ua', '4')

****************************************************************************
insert into doctors (name, surname, work_experience, phone_number, email, floor, office, description, department_id) 
value ('Borus', 'York', '20', '380969156325', 'Borus@mail.com', '2', '25','Bla BLa BLa','1');
insert into doctors (name, surname, work_experience, phone_number, email, floor, office, description, department_id) 
value ('Lola', 'Snob', '55', '380969188325', 'Lola@mail.com', '1', '15','Bla BLa BLa','2');
insert into doctors (name, surname, work_experience, phone_number, email, floor, office, description, department_id) 
value ('Kolya', 'Hurskuy', '10', '380969155825', 'Kolya@mail.com', '3', '35','Bla BLa BLa','3');
insert into doctors (name, surname, work_experience, phone_number, email, floor, office, description, department_id) 
value ('Jesika', 'Alba', '100', '380961456325', 'Jesika@mail.com', '5', '55','Bla BLa BLa','5');
*****************************************************************************************************
insert into hospitaldepartments( label) value ('Therapeutic department');
insert into hospitaldepartments( label) value ('Department of Surgery');
insert into hospitaldepartments( label) value ('Physiotherapy department');
insert into hospitaldepartments( label) value ('Ward office');
insert into hospitaldepartments( label) value ('Urology department');