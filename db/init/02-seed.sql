-- Seed users table with realistic data
-- Note: password_hash values are placeholders (in real app, these would be bcrypt hashes)
-- All passwords are 'password123' hashed format for demo purposes

INSERT INTO users (email, username, first_name, last_name, password_hash, phone_number, date_of_birth, avatar_url, bio, is_active, is_verified, last_login_at, created_at) VALUES
    ('sarah.johnson@example.com', 'sarahj', 'Sarah', 'Johnson', '$2b$10$YQhZ5Z8Z8Z8Z8Z8Z8Z8Z8O', '+1-555-0101', '1990-03-15', 'https://i.pravatar.cc/150?img=1', 'Software engineer passionate about open source and coffee. Based in San Francisco.', TRUE, TRUE, '2025-12-11 14:30:00', '2023-01-15 10:00:00'),

    ('michael.chen@example.com', 'mchen', 'Michael', 'Chen', '$2b$10$XQhZ5Z8Z8Z8Z8Z8Z8Z8Z8P', '+1-555-0102', '1988-07-22', 'https://i.pravatar.cc/150?img=2', 'Product manager | Tech enthusiast | Runner', TRUE, TRUE, '2025-12-12 09:15:00', '2023-02-20 11:30:00'),

    ('emily.rodriguez@example.com', 'emilyrod', 'Emily', 'Rodriguez', '$2b$10$WQhZ5Z8Z8Z8Z8Z8Z8Z8Z8Q', '+1-555-0103', '1995-11-08', 'https://i.pravatar.cc/150?img=3', 'UX designer creating beautiful and accessible experiences.', TRUE, TRUE, '2025-12-10 16:45:00', '2023-03-10 09:15:00'),

    ('james.williams@example.com', 'jwilliams', 'James', 'Williams', '$2b$10$VQhZ5Z8Z8Z8Z8Z8Z8Z8Z8R', '+1-555-0104', '1992-05-30', 'https://i.pravatar.cc/150?img=4', 'Full-stack developer. Love building scalable systems.', TRUE, TRUE, '2025-12-11 20:00:00', '2023-04-05 13:20:00'),

    ('olivia.brown@example.com', 'oliviab', 'Olivia', 'Brown', '$2b$10$UQhZ5Z8Z8Z8Z8Z8Z8Z8Z8S', '+1-555-0105', '1991-09-12', 'https://i.pravatar.cc/150?img=5', 'Data scientist | ML enthusiast | Dog mom', TRUE, TRUE, '2025-12-12 08:00:00', '2023-05-18 15:45:00'),

    ('david.martinez@example.com', 'dmartinez', 'David', 'Martinez', '$2b$10$TQhZ5Z8Z8Z8Z8Z8Z8Z8Z8T', '+1-555-0106', '1987-12-25', 'https://i.pravatar.cc/150?img=6', 'DevOps engineer automating all the things!', TRUE, TRUE, '2025-12-09 12:30:00', '2023-06-22 10:00:00'),

    ('sophia.anderson@example.com', 'sophiaa', 'Sophia', 'Anderson', '$2b$10$SQhZ5Z8Z8Z8Z8Z8Z8Z8Z8U', '+1-555-0107', '1994-02-14', 'https://i.pravatar.cc/150?img=7', 'Marketing manager with a passion for growth hacking.', TRUE, TRUE, '2025-12-11 11:20:00', '2023-07-30 14:10:00'),

    ('daniel.taylor@example.com', 'dtaylor', 'Daniel', 'Taylor', '$2b$10$RQhZ5Z8Z8Z8Z8Z8Z8Z8Z8V', '+1-555-0108', '1989-08-03', 'https://i.pravatar.cc/150?img=8', 'Security researcher. Always learning, always hacking (ethically).', TRUE, TRUE, '2025-12-12 07:45:00', '2023-08-12 09:30:00'),

    ('emma.thomas@example.com', 'emmat', 'Emma', 'Thomas', '$2b$10$QQhZ5Z8Z8Z8Z8Z8Z8Z8Z8W', '+1-555-0109', '1993-04-19', 'https://i.pravatar.cc/150?img=9', 'Content strategist and writer. Helping brands tell their stories.', TRUE, FALSE, '2025-12-08 15:00:00', '2023-09-05 16:20:00'),

    ('alexander.moore@example.com', 'alexm', 'Alexander', 'Moore', '$2b$10$PQhZ5Z8Z8Z8Z8Z8Z8Z8Z8X', '+1-555-0110', '1986-10-07', 'https://i.pravatar.cc/150?img=10', 'CTO | Builder | Investor', TRUE, TRUE, '2025-12-11 18:30:00', '2023-10-11 11:00:00'),

    ('isabella.jackson@example.com', 'isabellaj', 'Isabella', 'Jackson', '$2b$10$OQhZ5Z8Z8Z8Z8Z8Z8Z8Z8Y', '+1-555-0111', '1996-06-21', 'https://i.pravatar.cc/150?img=11', 'Frontend developer | React lover | Coffee addict', TRUE, TRUE, '2025-12-12 10:10:00', '2023-11-20 12:30:00'),

    ('william.white@example.com', 'willw', 'William', 'White', '$2b$10$NQhZ5Z8Z8Z8Z8Z8Z8Z8Z8Z', '+1-555-0112', '1990-01-28', 'https://i.pravatar.cc/150?img=12', 'Backend engineer specializing in distributed systems.', TRUE, TRUE, '2025-12-10 14:20:00', '2024-01-08 10:15:00'),

    ('mia.harris@example.com', 'miah', 'Mia', 'Harris', '$2b$10$MQhZ5Z8Z8Z8Z8Z8Z8Z8Z81', '+1-555-0113', '1997-11-16', 'https://i.pravatar.cc/150?img=13', 'Mobile app developer | iOS & Android', TRUE, FALSE, '2025-12-07 09:00:00', '2024-02-14 13:40:00'),

    ('christopher.martin@example.com', 'chrism', 'Christopher', 'Martin', '$2b$10$LQhZ5Z8Z8Z8Z8Z8Z8Z8Z82', '+1-555-0114', '1985-09-09', 'https://i.pravatar.cc/150?img=14', 'Solutions architect helping companies scale.', TRUE, TRUE, '2025-12-11 13:50:00', '2024-03-22 15:00:00'),

    ('charlotte.thompson@example.com', 'charlottet', 'Charlotte', 'Thompson', '$2b$10$KQhZ5Z8Z8Z8Z8Z8Z8Z8Z83', '+1-555-0115', '1992-07-04', 'https://i.pravatar.cc/150?img=15', 'Product designer. Obsessed with user research and prototyping.', TRUE, TRUE, '2025-12-12 06:30:00', '2024-04-10 09:20:00'),

    ('matthew.garcia@example.com', 'mattg', 'Matthew', 'Garcia', '$2b$10$JQhZ5Z8Z8Z8Z8Z8Z8Z8Z84', '+1-555-0116', '1991-03-26', 'https://i.pravatar.cc/150?img=16', 'Cloud architect | AWS certified | Serverless advocate', FALSE, TRUE, '2025-11-30 11:00:00', '2024-05-15 14:45:00'),

    ('amelia.martinez@example.com', 'ameliam', 'Amelia', 'Martinez', '$2b$10$IQhZ5Z8Z8Z8Z8Z8Z8Z8Z85', '+1-555-0117', '1994-12-11', 'https://i.pravatar.cc/150?img=17', 'QA engineer ensuring quality in every release.', TRUE, TRUE, '2025-12-09 17:30:00', '2024-06-20 10:30:00'),

    ('joshua.robinson@example.com', 'joshr', 'Joshua', 'Robinson', '$2b$10$HQhZ5Z8Z8Z8Z8Z8Z8Z8Z86', '+1-555-0118', '1988-05-18', 'https://i.pravatar.cc/150?img=18', 'Technical writer making complex topics simple.', TRUE, TRUE, '2025-12-10 10:45:00', '2024-07-28 16:15:00'),

    ('ava.clark@example.com', 'avac', 'Ava', 'Clark', '$2b$10$GQhZ5Z8Z8Z8Z8Z8Z8Z8Z87', '+1-555-0119', '1995-08-29', 'https://i.pravatar.cc/150?img=19', 'Business analyst bridging tech and business needs.', TRUE, FALSE, '2025-12-06 12:00:00', '2024-08-05 11:50:00'),

    ('andrew.rodriguez@example.com', 'andrewr', 'Andrew', 'Rodriguez', '$2b$10$FQhZ5Z8Z8Z8Z8Z8Z8Z8Z88', '+1-555-0120', '1990-10-13', 'https://i.pravatar.cc/150?img=20', 'Database administrator | PostgreSQL expert', TRUE, TRUE, '2025-12-12 05:15:00', '2024-09-12 13:25:00');

-- Display seed completion message
DO $$
BEGIN
    RAISE NOTICE 'Successfully seeded % users', (SELECT COUNT(*) FROM users);
END $$;
