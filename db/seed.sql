USE employee_db;

INSERT INTO department (name)
VALUES ("Back End Developer"), 
       ("Manager"), 
       ("Asistant Manager"), 
       ("Front End Developer"), 
       ("Fullstuck Developer"),
       ('Front Desk'),
       ('Mobile developer'),
       ('ceo'),
       ('Secretary');

INSERT INTO role (title, salary, department_id)
VALUES ("Back End Developer", 60000, 1),
        ("Front End Developer", 55000, 2),
        ("Manager", 70000, 3),
        ("Fullstack Develpoer", 70000, 4),
        ("Web-Develpoer", 60000, 5),
        ("Fullstuck-Developer", 58000, 6),
        ("Mobile-Developer", 68000, 7),
        ("Andriod-Develpoer", 50000, 8),
        ("Manager", 55000, 9),
        ('Driver', 35000,10)
        ;
        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robeil", "Aregawi", 1, 3),
        ("Nahom", "Aragawi", 2, NULL),
        ("Keleab", "Brhane", 3, NULL),
        ("Meron", "Tekle", 4, NULL),
        ("Soliana", "Robeil", 5, 4),
        ("Haben", "Brhane", 5, NULL),
        ("Hanna", "Brhane", 2, 1),
        ("Silvana", "Brhane", 2, 1),
        ("Samuel", "Haile", 2, NULL),
        ("Kidane", "Mesfin", 4, 3),
        ('Gere, Emun',5 ,7)
;