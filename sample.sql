INSERT INTO department (name)
VALUES ("engineering"), ("product"), ("design"), ("sales"), ("marketing");

INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 60000, 1),
        ("Web Developer", 55000, 1),
        ("Technical Lead", 70000, 1),
        ("Product Manager", 70000, 2),
        ("Associate Product Manager", 60000, 2),
        ("UX Designer", 58000, 3),
        ("Design Lead", 68000, 3),
        ("Acccount Executive", 50000, 4),
        ("Product Marketing Manager", 55000, 5)
        ;
        
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Robeil", "Aregawi", 1, NULL),
        ("Nahom", "Aragawi", 2, NULL),
        ("Keleab", "Brhane", 3, NULL),
        ("Meron", "Tekle", 4, NULL),
        ("Soliana", "Robeil", 5, 4),
        ("Haben", "Brhane", 1, 1),
        ("Hanna", "Brhane", 2, 1),
        ("Silvana", "Brhane", 2, 1),
        ("Samuel", "Haile", 6, 2),
        ("Kidane", "Mesfin", 4, 3)
;