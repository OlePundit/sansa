--
-- PostgreSQL database dump
--

-- Dumped from database version 10.23
-- Dumped by pg_dump version 10.23

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: auth_group; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--



--
-- Data for Name: django_content_type; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.django_content_type VALUES (1, 'admin', 'logentry');
INSERT INTO public.django_content_type VALUES (2, 'auth', 'permission');
INSERT INTO public.django_content_type VALUES (3, 'auth', 'group');
INSERT INTO public.django_content_type VALUES (4, 'auth', 'user');
INSERT INTO public.django_content_type VALUES (5, 'contenttypes', 'contenttype');
INSERT INTO public.django_content_type VALUES (6, 'sessions', 'session');
INSERT INTO public.django_content_type VALUES (7, 'technologies', 'post');
INSERT INTO public.django_content_type VALUES (8, 'technologies', 'services');
INSERT INTO public.django_content_type VALUES (9, 'technologies', 'contact');


--
-- Data for Name: auth_permission; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.auth_permission VALUES (1, 'Can add log entry', 1, 'add_logentry');
INSERT INTO public.auth_permission VALUES (2, 'Can change log entry', 1, 'change_logentry');
INSERT INTO public.auth_permission VALUES (3, 'Can delete log entry', 1, 'delete_logentry');
INSERT INTO public.auth_permission VALUES (4, 'Can view log entry', 1, 'view_logentry');
INSERT INTO public.auth_permission VALUES (5, 'Can add permission', 2, 'add_permission');
INSERT INTO public.auth_permission VALUES (6, 'Can change permission', 2, 'change_permission');
INSERT INTO public.auth_permission VALUES (7, 'Can delete permission', 2, 'delete_permission');
INSERT INTO public.auth_permission VALUES (8, 'Can view permission', 2, 'view_permission');
INSERT INTO public.auth_permission VALUES (9, 'Can add group', 3, 'add_group');
INSERT INTO public.auth_permission VALUES (10, 'Can change group', 3, 'change_group');
INSERT INTO public.auth_permission VALUES (11, 'Can delete group', 3, 'delete_group');
INSERT INTO public.auth_permission VALUES (12, 'Can view group', 3, 'view_group');
INSERT INTO public.auth_permission VALUES (13, 'Can add user', 4, 'add_user');
INSERT INTO public.auth_permission VALUES (14, 'Can change user', 4, 'change_user');
INSERT INTO public.auth_permission VALUES (15, 'Can delete user', 4, 'delete_user');
INSERT INTO public.auth_permission VALUES (16, 'Can view user', 4, 'view_user');
INSERT INTO public.auth_permission VALUES (17, 'Can add content type', 5, 'add_contenttype');
INSERT INTO public.auth_permission VALUES (18, 'Can change content type', 5, 'change_contenttype');
INSERT INTO public.auth_permission VALUES (19, 'Can delete content type', 5, 'delete_contenttype');
INSERT INTO public.auth_permission VALUES (20, 'Can view content type', 5, 'view_contenttype');
INSERT INTO public.auth_permission VALUES (21, 'Can add session', 6, 'add_session');
INSERT INTO public.auth_permission VALUES (22, 'Can change session', 6, 'change_session');
INSERT INTO public.auth_permission VALUES (23, 'Can delete session', 6, 'delete_session');
INSERT INTO public.auth_permission VALUES (24, 'Can view session', 6, 'view_session');
INSERT INTO public.auth_permission VALUES (25, 'Can add post', 7, 'add_post');
INSERT INTO public.auth_permission VALUES (26, 'Can change post', 7, 'change_post');
INSERT INTO public.auth_permission VALUES (27, 'Can delete post', 7, 'delete_post');
INSERT INTO public.auth_permission VALUES (28, 'Can view post', 7, 'view_post');
INSERT INTO public.auth_permission VALUES (29, 'Can add services', 8, 'add_services');
INSERT INTO public.auth_permission VALUES (30, 'Can change services', 8, 'change_services');
INSERT INTO public.auth_permission VALUES (31, 'Can delete services', 8, 'delete_services');
INSERT INTO public.auth_permission VALUES (32, 'Can view services', 8, 'view_services');
INSERT INTO public.auth_permission VALUES (33, 'Can add contact', 9, 'add_contact');
INSERT INTO public.auth_permission VALUES (34, 'Can change contact', 9, 'change_contact');
INSERT INTO public.auth_permission VALUES (35, 'Can delete contact', 9, 'delete_contact');
INSERT INTO public.auth_permission VALUES (36, 'Can view contact', 9, 'view_contact');


--
-- Data for Name: auth_group_permissions; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--



--
-- Data for Name: auth_user; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.auth_user VALUES (1, 'pbkdf2_sha256$260000$njzQKadLu5c87fDQ4OoP1D$lFmeu6vvcRZCyx7dOGzqW0veEmeGxjZbnP7LqQiVo1w=', '2023-07-30 16:11:40.109676+03', true, 'salvacar', '', '', '', true, true, '2023-01-06 03:19:00.018+03');


--
-- Data for Name: auth_user_groups; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--



--
-- Data for Name: auth_user_user_permissions; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--



--
-- Data for Name: django_admin_log; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.django_admin_log VALUES (1, '2023-01-06 03:42:13.671+03', '1', 'fdbgfh', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (2, '2023-01-06 04:39:50.975+03', '1', 'SEO IN KENYA', 2, '[{"changed": {"fields": ["Title", "Body", "Slug"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (3, '2023-01-06 05:03:45.525+03', '1', 'SEO IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (4, '2023-01-06 05:05:29.679+03', '1', 'SEO IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (5, '2023-01-06 05:50:24.904+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (6, '2023-01-06 06:03:19.646+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (7, '2023-01-06 06:06:36.074+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (8, '2023-01-06 06:07:46.604+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (9, '2023-01-06 06:08:29.248+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (10, '2023-01-07 01:42:58.781+03', '3', 'CONTENT MARKETING AND WRITING SERVICES', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (11, '2023-01-07 01:52:09.818+03', '4', 'GRAPHIC DESIGN IN KENYA', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (12, '2023-01-07 01:58:45.502+03', '5', 'SOCIAL LISTENING SERVICES', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (13, '2023-01-07 03:31:21.976+03', '5', 'SOCIAL LISTENING SERVICES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (14, '2023-01-07 03:35:41.67+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (15, '2023-01-07 03:37:14.24+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (16, '2023-01-07 03:38:18.874+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (17, '2023-01-07 03:39:42.812+03', '4', 'GRAPHIC DESIGN IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (18, '2023-01-07 03:41:43.466+03', '1', 'SEO IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (19, '2023-01-07 03:42:43.237+03', '1', 'SEO IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (20, '2023-01-07 03:55:51.792+03', '4', 'GRAPHIC DESIGN IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (21, '2023-01-07 03:57:36.9+03', '4', 'GRAPHIC DESIGN IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (22, '2023-01-11 06:37:07.377+03', '6', 'PAID SOCIAL MEDIA MARKETING', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (23, '2023-01-11 06:39:11.684+03', '7', 'GOOGLE SEARCH ADVERTISING', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (24, '2023-01-11 06:40:50.022+03', '8', 'GOOGLE DISPLAY ADVERTISING', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (25, '2023-01-11 06:45:04.36+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Title", "Body", "Slug"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (26, '2023-01-11 06:45:15.384+03', '8', 'GOOGLE DISPLAY ADVERTISING', 3, '', 8, 1);
INSERT INTO public.django_admin_log VALUES (27, '2023-01-11 08:04:09.839+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (28, '2023-01-11 08:04:51.965+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (29, '2023-01-11 08:26:24.722+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (30, '2023-01-11 08:29:56.564+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (31, '2023-01-11 08:33:40.519+03', '6', 'PAID SOCIAL MEDIA MARKETING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (32, '2023-01-11 08:34:02.57+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (33, '2023-01-24 05:57:39.487+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 1, '[{"added": {}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (34, '2023-01-24 06:01:30.164+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (35, '2023-01-24 06:08:50.76+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (36, '2023-01-24 06:16:47.976+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (37, '2023-01-24 06:18:36.577+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (38, '2023-01-24 06:20:17.512+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (39, '2023-01-24 10:19:04.41+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (40, '2023-01-24 12:06:52.614+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (41, '2023-01-24 12:07:32.595+03', '7', 'GOOGLE DISPLAY AND SEARCH ADVERTISING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (42, '2023-01-24 12:08:02.109+03', '6', 'PAID SOCIAL MEDIA MARKETING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (43, '2023-01-24 12:08:12.158+03', '5', 'SOCIAL LISTENING SERVICES', 2, '[]', 8, 1);
INSERT INTO public.django_admin_log VALUES (44, '2023-01-24 12:08:25.163+03', '4', 'GRAPHIC DESIGN IN KENYA', 2, '[]', 8, 1);
INSERT INTO public.django_admin_log VALUES (45, '2023-01-24 12:09:05.861+03', '3', 'CONTENT MARKETING AND WRITING SERVICES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (46, '2023-01-24 12:09:35.9+03', '2', 'SOCIAL MEDIA MARKETING IN KENYA', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (47, '2023-01-25 08:16:35.492+03', '9', 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (48, '2023-01-25 08:26:23.692+03', '3', 'CONTENT MARKETING AND WRITING SERVICES', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (49, '2023-01-26 00:13:03.358+03', '6', 'PAID SOCIAL MEDIA MARKETING', 2, '[{"changed": {"fields": ["Body"]}}]', 8, 1);
INSERT INTO public.django_admin_log VALUES (50, '2023-01-28 11:31:39.045+03', '1', 'Social Media Users in Kenya', 1, '[{"added": {}}]', 7, 1);
INSERT INTO public.django_admin_log VALUES (51, '2023-01-28 11:34:09.192+03', '1', 'Social Media Users in Kenya', 2, '[{"changed": {"fields": ["Body"]}}]', 7, 1);
INSERT INTO public.django_admin_log VALUES (52, '2023-01-28 12:21:19.751+03', '1', 'Social Media Users in Kenya', 2, '[{"changed": {"fields": ["Body", "Image"]}}]', 7, 1);
INSERT INTO public.django_admin_log VALUES (53, '2023-01-28 12:50:05.404+03', '1', 'Social Media Users in Kenya', 2, '[{"changed": {"fields": ["Body"]}}]', 7, 1);
INSERT INTO public.django_admin_log VALUES (54, '2023-01-28 23:18:55.581+03', '2', 'Contact object (2)', 3, '', 9, 1);


--
-- Data for Name: django_migrations; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.django_migrations VALUES (1, 'contenttypes', '0001_initial', '2023-04-17 17:52:04.289948+03');
INSERT INTO public.django_migrations VALUES (2, 'auth', '0001_initial', '2023-04-17 17:52:04.747405+03');
INSERT INTO public.django_migrations VALUES (3, 'admin', '0001_initial', '2023-04-17 17:52:04.815868+03');
INSERT INTO public.django_migrations VALUES (4, 'admin', '0002_logentry_remove_auto_add', '2023-04-17 17:52:04.834911+03');
INSERT INTO public.django_migrations VALUES (5, 'admin', '0003_logentry_add_action_flag_choices', '2023-04-17 17:52:04.856952+03');
INSERT INTO public.django_migrations VALUES (6, 'contenttypes', '0002_remove_content_type_name', '2023-04-17 17:52:04.903844+03');
INSERT INTO public.django_migrations VALUES (7, 'auth', '0002_alter_permission_name_max_length', '2023-04-17 17:52:04.931633+03');
INSERT INTO public.django_migrations VALUES (8, 'auth', '0003_alter_user_email_max_length', '2023-04-17 17:52:04.952641+03');
INSERT INTO public.django_migrations VALUES (9, 'auth', '0004_alter_user_username_opts', '2023-04-17 17:52:05.683032+03');
INSERT INTO public.django_migrations VALUES (10, 'auth', '0005_alter_user_last_login_null', '2023-04-17 17:52:05.706025+03');
INSERT INTO public.django_migrations VALUES (11, 'auth', '0006_require_contenttypes_0002', '2023-04-17 17:52:05.713798+03');
INSERT INTO public.django_migrations VALUES (12, 'auth', '0007_alter_validators_add_error_messages', '2023-04-17 17:52:05.734011+03');
INSERT INTO public.django_migrations VALUES (13, 'auth', '0008_alter_user_username_max_length', '2023-04-17 17:52:05.771197+03');
INSERT INTO public.django_migrations VALUES (14, 'auth', '0009_alter_user_last_name_max_length', '2023-04-17 17:52:05.790858+03');
INSERT INTO public.django_migrations VALUES (15, 'auth', '0010_alter_group_name_max_length', '2023-04-17 17:52:05.809474+03');
INSERT INTO public.django_migrations VALUES (16, 'auth', '0011_update_proxy_permissions', '2023-04-17 17:52:05.821607+03');
INSERT INTO public.django_migrations VALUES (17, 'auth', '0012_alter_user_first_name_max_length', '2023-04-17 17:52:05.846579+03');
INSERT INTO public.django_migrations VALUES (18, 'sessions', '0001_initial', '2023-04-17 17:52:05.899573+03');
INSERT INTO public.django_migrations VALUES (19, 'technologies', '0001_initial', '2023-04-17 17:52:05.985409+03');
INSERT INTO public.django_migrations VALUES (20, 'technologies', '0002_contact', '2023-04-17 17:52:06.011501+03');
INSERT INTO public.django_migrations VALUES (21, 'technologies', '0003_alter_contact_message', '2023-04-17 17:52:06.024558+03');
INSERT INTO public.django_migrations VALUES (22, 'technologies', '0004_post_image', '2023-04-17 17:52:06.096307+03');


--
-- Data for Name: django_session; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.django_session VALUES ('0j37puok82p7a76tdi6aalckg2w2jxup', '.eJxVjDkOwjAURO_iGlneEgMlPWeI_ooDKJHipELcHSylAE037828zADbWoatyjKMbM7Gm8Nvh0APmRrgO0y32dI8rcuItil2p9VeZ5bnZXf_DgrU8l1HFQm5j-qSECWE4PyJY-iRtYUwO2EXUH0mVWVMvouxD3iEjjSY9wcZ-jlu:1pDane:JOIDjyj7N3TX1RXyjoxnAtcYE-wlhkMbZXLAGI0umI8', '2023-01-20 03:41:34.765+03');
INSERT INTO public.django_session VALUES ('1v0latqj7cj81rjtotlt88chqi3v2gm5', '.eJxVjDkOwjAURO_iGlneEgMlPWeI_ooDKJHipELcHSylAE037828zADbWoatyjKMbM7Gm8Nvh0APmRrgO0y32dI8rcuItil2p9VeZ5bnZXf_DgrU8l1HFQm5j-qSECWE4PyJY-iRtYUwO2EXUH0mVWVMvouxD3iEjjSY9wcZ-jlu:1pDvHL:CKWnUQ1RVulln3TRm8tZ444NR3l1pBW8MzEh7MpAQsM', '2023-01-21 01:33:35.616+03');
INSERT INTO public.django_session VALUES ('48zho2zdknfbar9kuhs7hl5ohtkp8yhl', '.eJxVjDkOwjAURO_iGlneEgMlPWeI_ooDKJHipELcHSylAE037828zADbWoatyjKMbM7Gm8Nvh0APmRrgO0y32dI8rcuItil2p9VeZ5bnZXf_DgrU8l1HFQm5j-qSECWE4PyJY-iRtYUwO2EXUH0mVWVMvouxD3iEjjSY9wcZ-jlu:1pFRsl:gCNAcW8Wtd5CcRhE2QwnM8XgYYRdtvcVaAmA1Kxkx18', '2023-01-25 06:34:31.862+03');
INSERT INTO public.django_session VALUES ('auvouifulh0k2gqggm0b0sajkw2n037v', '.eJxVjDkOwjAURO_iGlneEgMlPWeI_ooDKJHipELcHSylAE037828zADbWoatyjKMbM7Gm8Nvh0APmRrgO0y32dI8rcuItil2p9VeZ5bnZXf_DgrU8l1HFQm5j-qSECWE4PyJY-iRtYUwO2EXUH0mVWVMvouxD3iEjjSY9wcZ-jlu:1pK8Gg:cytgKl4-peL8kf4bHVZlUgCww5OIAbIPBzFDk9kqiCg', '2023-02-07 04:38:34.678+03');
INSERT INTO public.django_session VALUES ('mdqvg58sxavo3n9hivyklwbnjqu7wmi7', '.eJxVjDkOwjAURO_iGlneEgMlPWeI_ooDKJHipELcHSylAE037828zADbWoatyjKMbM7Gm8Nvh0APmRrgO0y32dI8rcuItil2p9VeZ5bnZXf_DgrU8l1HFQm5j-qSECWE4PyJY-iRtYUwO2EXUH0mVWVMvouxD3iEjjSY9wcZ-jlu:1pQHJT:W0A8wEN1adok26VV8qnJcWQlj9YzCgXER-zqdwXxNe0', '2023-02-24 03:30:51.693+03');
INSERT INTO public.django_session VALUES ('rusdraon0h2s2ynj8yqkcc5s431w5vcn', '.eJxVjEEOgjAQRe_StWnoUAbGpXvPQGamraCmTSisjHdXEha6_e-9_zIjb-s0bjUu4xzM2Thz-t2E9RHzDsKd861YLXldZrG7Yg9a7bWE-Lwc7t_BxHX61kBOqEsCXQ-ceu-FVIXb2ACihsZjoh4HbmIQbMFpgpYHIo8KTiKa9wfiaTfU:1qDEUr:u2bIF-O9eXVEgnzHcSWOUsiyTce80EhJvtuKfisg2tc', '2023-07-09 04:24:57.911753+03');
INSERT INTO public.django_session VALUES ('yg6i0ewintjjggtkyv2ssfjaxut3mrx9', '.eJxVjEEOgjAQRe_StWnoUAbGpXvPQGamraCmTSisjHdXEha6_e-9_zIjb-s0bjUu4xzM2Thz-t2E9RHzDsKd861YLXldZrG7Yg9a7bWE-Lwc7t_BxHX61kBOqEsCXQ-ceu-FVIXb2ACihsZjoh4HbmIQbMFpgpYHIo8KTiKa9wfiaTfU:1qQ6Cy:yTQYnLHCeSRx8LIiVCStoKqL918rYWpm-lXYX4ht8hA', '2023-08-13 16:11:40.11071+03');


--
-- Data for Name: technologies_contact; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.technologies_contact VALUES (1, 'Glenn', 'Omondi', 'glennomondi.go@gmail.com', 'test', 'oyaaahh');
INSERT INTO public.technologies_contact VALUES (2, 'Glenn', 'Omondi', 'glennomondi.go@gmail.com', 'test', 'test');
INSERT INTO public.technologies_contact VALUES (3, '', '', '', '', '');


--
-- Data for Name: technologies_post; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.technologies_post VALUES (1, 'Social Media Users in Kenya', '<p>&nbsp;</p>

<h2>Kenya&rsquo;s Digital Landscape</h2>

<p>&nbsp;</p>

<p><span style="color:#000000">Kenya had 23.35 million internet users as of January 2022. This figure represented 42% of the total population.</span></p>

<p>&nbsp;</p>

<h2><strong>Mobile Phone Use in Kenya as of 2022</strong></h2>

<p>&nbsp;</p>

<p><span style="color:#000000">There were 63.48 million mobile phones in Kenya in January, 2022. However, we must note that some people use more than one mobile phone. They might have one mobile for personal use and the other for work purposes. Hence the reason why the number of mobile phones was higher than the total population.</span></p>

<p><br />
&nbsp;</p>

<p><span style="color:#1e1e1e"><span style="background-color:#ffffff"><img class="responsive" src="https://lh6.googleusercontent.com/jsde2O6Ae9nmj5vqasSCqYvHdmUjLC2v5i3v94v191DlH4Fv5EOKBLtkRGw4SdjLFi5xNOjmEkCIU93aNO7mZTvp2QFhXSOFPtTc-gba-DZUXTvISCthvB5kmKp_RkfSQgyOd62Uc-iRIxHKWEgQNHeIngl6NQiUWw3KcTSrbtNvTZMWN_oXIoLdc4uQYg" style="height:624px; width:624px" /></span></span></p>

<p>&nbsp;</p>

<h2><strong>Monthly Active Social Media Users in Kenya Per Platform</strong></h2>

<p>&nbsp;</p>

<h3><strong>Facebook</strong></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">Facebook had 12,445,700 users in January of 2022, which represented 21.8% of the total population. With regard to total internet users, Facebook&#39;s users represented 53.32% the population. Majority of the users were men, accounting for 56.7%. The largest age group was people aged between 18 and 24 (4,400,000).</span></p>

<p>&nbsp;</p>

<h3><strong>Instagram&nbsp;</strong></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">Instagram had 2,717,000 users in January, 2022, accounting for 4.8% of the total population. As a proportion of the total internet users, Instagram accounted for&nbsp; 11.65%. Majority of the users were male - 54.2%. The largest age group was 18 -24 (1077200).</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">People aged 18 to 24 were the largest user group (1 077 200).</span></p>

<p>&nbsp;</p>

<h3><strong>LinkedIn</strong></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">LinkedIn handled 2908000 users in January&nbsp; 2022, which accounted for 5.1% of the population.&nbsp; With regard to the total internet users, LinkedIn had 12.46% of the population. Users aged between 25 and 34 made up the largest age group (1,800,000).</span></p>

<p>&nbsp;</p>

<h3><strong>Youtube</strong></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">There were 9.29 million users on YouTube in early 2022, representing 15.7% of the population. Males users made up 57.3 % of the total monthly active users whereas female users catered for 42.7%. With regard to the total internet users, YouTube&rsquo;s users accounted for 39.8 percent.</span></p>

<p>&nbsp;</p>

<h3><strong>Snapchat</strong></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">Snapchat&rsquo;s total users in January 2022 were 1.75 million, which represented 3.1 % of the entire population. As a percentage of the total internet users, Snapchat had 7.5%.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Considering the fact that snapchat restricts its use to users above 13 years, then the proportion of the entire population climbs to 4.7%. 70% of snap chat users were female and 28.1% male.</span></p>

<p>&nbsp;</p>

<h3><strong>Twitter</strong></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">The total monthly active users on Twitter were 1.35 million in January, 2022, accounting for 2.4% of the total population.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Twitter restricts its use to users aged 13 and above. Therefore, Twitter&rsquo;s users represented 3.6% of the total eligible population.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">With regard to the total internet user base, Twitter users represented 5.8% of the population.</span></p>

<p>&nbsp;</p>

<p>&nbsp;</p>

<h2><strong>Further Insights</strong></h2>

<p>&nbsp;</p>

<p><span style="color:#1e1e1e"><span style="background-color:#ffffff"><img class="responsive" src="https://lh5.googleusercontent.com/AZ2gMVsF9mnz5NIL1zm7o3WvJ8tsVaTFABgKDnQls2hN1rMP5-xMbPNTuC5BP3OHcJJkHwj5e5aasGRKXq25J1AC-isI4JHkyepk1ZMKLPAC7gxxpkUatCjhrPanugJ85Og5s-Iz8OHKC6lFqLY5Lfl47sD-RbTOsB3I92QRd-2xSjADz1FQJ6sW9JVBYQ" style="height:327px; width:624px" /></span></span></p>

<p>&nbsp;</p>

<p><span style="color:#1e1e1e"><span style="background-color:#ffffff">Age groups 21-35 are the most active on professional platforms liked LinkedIn, Skype and Twitter, probably because they are at the stage where they are trying to build their professional lives</span></span></p>

<p>&nbsp;</p>

<p><span style="color:#1e1e1e"><span style="background-color:#ffffff">Age groups 21-25 are the most active on social media, followed by age groups 26 -35. Probably due to the tech savviness of this age group. 36 - 45 and above 45 are the least active, probably because this age group grew up before the dot com bubble. So if you want to target this age group, then you should probably target them on conventional media like TV and newspaper.</span></span></p>

<p>&nbsp;</p>

<p><span style="color:#1e1e1e"><span style="background-color:#ffffff"><img class="responsive" src="https://lh5.googleusercontent.com/2qw6phCTMn0ZLhYEEWaUOR3LewWanisT-alSdewmLcgpIwcxJP2HU6UCEfWohq3BtZJNw3ZQ8UGHs6Erek6ssJelujK4rBJwSkIlR1oqlTSEVTplXG8ymopixyRtfx3TgehpNLIv0plYL15Lkw3YNsn_PsBFO8yAxwr5nS6CkmwuyUuH59-3j-wi_8u66w" style="height:436px; width:624px" /></span></span></p>

<p><br />
&nbsp;</p>

<p><span style="color:#000000">Males dominate females on all platforms, except Tiktok and Snapchat, perhaps due to the aesthetic nature of these apps. So if you want to target women, then it would be advisable to advertise on these platforms.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Facebook accounts for the highest monthly active users across all social media platforms, with 53.32 percent of the total local internet user base. Therefore, it is more lucrative to market on facebook due to their high ad reach.</span></p>

<p>&nbsp;</p>', '2023-01-28 11:25:42+03', 'social-media-users-in-kenya', 'images/social-audio.png');


--
-- Data for Name: technologies_services; Type: TABLE DATA; Schema: public; Owner: salvacar_data
--

INSERT INTO public.technologies_services VALUES (1, 'SEO IN KENYA', '<h2>What is SEO?</h2>

<p>&nbsp;</p>

<p><img alt="Tips to Improve Your SEO Marketing Strategies - Angel SEO" src="https://www.angelseoservices.com/wp-content/uploads/2020/04/improve-your-seo-marketing-strategies.png" style="height:121px; width:250px" /></p>

<p>&nbsp;</p>

<p>Search engine optimization, as the name suggests, is the process of improving your site for better results in search engines such as Google or Bing. If your page appears on the first-page search results for instance, then users have a better chance of viewing your site and clicking.</p>

<p><span style="color:#000000">&nbsp;</span></p>

<h2>HOW DOES SEO WORK?</h2>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">Google uses bots to crawl pages (Identify the content in your website and its relevance) so that it can rank websites in search results. Keywords are important in improving the ranking of your page. Aside from keywords, google also uses other factors in trying to improve the performance of your site. Factors such as:</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<h3><em>Performance</em></h3>

<p><span style="color:#000000">How well does your site work on various devices such as mobile?</span></p>

<p>&nbsp;</p>

<h3><em>Links</em></h3>

<p><span style="color:#000000">How well are the pages on your website linked?</span></p>

<p>&nbsp;</p>

<h3><em>Meta content </em></h3>

<p><span style="color:#000000">More information about your site.</span></p>

<p>&nbsp;</p>

<h3><em>Backlinks</em></h3>

<p><span style="color:#000000">How many websites are linking back to your site?</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">And several other factors.</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<h2>HOW DOES SEO BENEFIT YOUR BUSINESS?</h2>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">SEO helps in increasing the traffic to your site, thus increasing the click-through rate&nbsp; of your website (The number of people who are clicking on your website).</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">Searching has become a fundamental part of our lives. Be it students doing research for their essay, or a researcher looking for findings for his paper. Google alone process about 40,000 searches per second. So online searches make up a bulk of the traffic that businesses get. Plus it is organic, meaning unlike paid ads, you cannot pay google to rank your page better. You must put in the work.</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">If customers find your page on their own, they are more likely to become loyal customers, compared to when they get to your business through paid ads or third-party mentions, such as influencers. Many buyers like to trust their own instincts.</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">Another factor is that when a buyer is searching online, they already have purchasing intent. Thus, it is much easier to convert such a prospective client.</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<h2>GET QUALITY SEO IN KENYA</h2>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">We have well-trained SEO specialists who have dedicated years to honing their craft, and helping pages rank better in online search results. Let us increase the size of traffic to your website, thus the number of your prospective clients and sales.</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<p><span style="color:#000000">Here is what we will achieve do for you:</span></p>

<p><span style="color:#000000">&nbsp;</span></p>

<h3><em>Page audit</em></h3>

<p><span style="color:#000000">To determine how best we can improve your page.</span></p>

<p>&nbsp;</p>

<h3><em>Competitive analysis.</em></h3>

<p><span style="color:#000000">To figure out what your competitors are doing, and what you can do better.</span></p>

<p>&nbsp;</p>

<h3><em>Keyword analysis</em></h3>

<p><span style="color:#000000">To determine which keywords perform best for your demographic.</span></p>

<p>&nbsp;</p>

<h3><em>Technical SEO </em></h3>

<p><span style="color:#000000">We will consult on how you can improve the performance of your site or do a page optimization ourselves if you lack a development team.</span></p>

<p>&nbsp;</p>

<h3><em>Content marketing</em></h3>

<p><span style="color:#000000">We will create SEO-optimized blog articles to improve your ranking and enhance brand loyalty.</span></p>

<p>&nbsp;</p>

<h3><em>Improved search results in online searches</em></h3>

<p><span style="color:#000000">Get in touch with us today, so we can help you curve out your nich&eacute;.</span></p>

<p>&nbsp;</p>

<h3><em>Email outreach</em></h3>

<p><span style="color:#000000">We will help you build backlinks to your site through email outreach</span></p>

<p>&nbsp;</p>', '2023-01-03 03:41:44+03', 'seo-in-kenya');
INSERT INTO public.technologies_services VALUES (2, 'SOCIAL MEDIA MARKETING IN KENYA', '<p><span style="color:#000000">Social media marketing is an affordable and sustainable way to market your business in Kenya. Even more so if you are bootstrapping, or an MSME or startup. It is unfortunate that this method has largely gone ignored, especially among older businesses.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000"><img alt="social-media-daily-users" src="https://lh3.googleusercontent.com/BR7UGTqWRkXju_rhNMMRQ7Bl4TEARDGxEUORLkO9LdmFSbtaqped6EI3CnPNEoc_OX3hi0tCoOJhRtTxpgSrNibXHDlAZ7NNG8I8ibAitM97xau8LRx_NJ6j33khAQvcVG7aDre1ygiH8GEYEwdOhnyci6lR_L53xZhDxbez4Ptzs6KXvJgpAzngaUzvDQ" style="height:351px; width:624px" /></span></p>

<p><br />
<br />
<br />
&nbsp;</p>

<p><span style="color:#000000">Facebook alone accounts for almost 3 billion active users. That&rsquo;s almost half of the world&rsquo;s population.&nbsp;</span></p>

<p>&nbsp;</p>

<h2>HOW SOCIAL MEDIA MARKETING IN KENYA CAN BENEFIT YOUR BUSINESS</h2>

<p>&nbsp;</p>

<p><span style="color:#000000">For some reason, there is an infatuation with traditional forms of marketing like door-to-door. But even if you are going to go to 30 different people in one day, a simple post on Twitter can yield thrice that number. So social media advertising definitely trumps most conventional forms of advertising.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Social media can help you grow a steady number of customers organically. Thus, helping you build your brand loyalty in an affordable way.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Social media is also free to use and has users drawn from all ages, geographical locations, and income groups. You can definitely find your intended target group on social media. You can cast a wide net or narrow down your targeting to reach exactly the type of customer you want. And did I say it&#39;s free?</span></p>

<p>&nbsp;</p>

<h2>WHY CHOOSE US AS YOUR SOCIAL MEDIA MARKETING PARTNER?</h2>

<p>&nbsp;</p>

<h3><em>Social media audit</em></h3>

<p><span style="color:#000000">We will do a thorough audit of your business, and social media sites (if you have any). The audit will help us identify your target audience and social media insights. The information from the social media audit will help us understand how we can leverage your business to gain more traction on social.</span></p>

<p>&nbsp;</p>

<h3><em>Social media strategy</em></h3>

<p><span style="color:#000000">We will tailor-make a social media strategy for your business. The social media strategy will encompass various factors that will form the hallmarks of our campaign. Factors such as:</span></p>

<p>&nbsp;</p>

<h3><em>Content pillars</em></h3>

<p><span style="color:#000000">The thematic approach for the campaign.</span></p>

<p>&nbsp;</p>

<h3><em>Competitive analysis&nbsp;</em></h3>

<p><span style="color:#000000">What are your competitors doing?</span></p>

<p>&nbsp;</p>

<h3><em>SWOT analysis&nbsp;</em></h3>

<p><span style="color:#000000">Your Strengths weaknesses, opportunities, and threats. We will leverage your strengths to exploit the opportunities. Whilst mitigating your threats and weaknesses.</span></p>

<p>&nbsp;</p>

<h3><em>Content Calendar</em></h3>

<p><span style="color:#000000">Finally, we will create a content calendar outlining the daily posts. The content calendar will be inclusive of scripts, copy, and creative direction for a certain period, e.g. one month.</span></p>

<p>&nbsp;</p>

<h3><em>Graphics</em></h3>

<p><span style="color:#000000">We will provide creative visuals for your online campaign. The visuals will not only evoke the intended emotion in your target audience, but also inform, and entertain.</span></p>

<p>&nbsp;</p>

<h2>OTHER SERVICES WE OFFER TO BOLSTER YOUR SOCIAL MEDIA</h2>

<p>&nbsp;</p>

<ul>
	<li>Social Media Marketing Automation. We can automate your marketing so that you can focus on your core business. Meaning, we will schedule your social media posts using various tools at our disposal.</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li>Data-driven social media marketing. We can rely on our social listening tools to target specific social media users. We will base our targeting on the sentimentality of their recent posts. This is a particularly useful tool for crisis management and political campaigns.</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li>Paid-marketing campaigns. We have hands-on experience with ad platforms on different social media. So we can conduct highly targeted campaigns to reach users of specific interests, behaviours, geographical locations, and demographics.</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li>Community Management.</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li>Social media management.</li>
</ul>

<p>&nbsp;</p>

<ul>
	<li>Bulk sms and emails.</li>
</ul>

<p>&nbsp;</p>', '2023-01-06 05:43:40+03', 'social-media-marketing-in-kenya');
INSERT INTO public.technologies_services VALUES (3, 'CONTENT MARKETING AND WRITING SERVICES', '<h2>CONTENT MARKETING IN KENYA</h2>

<p>&nbsp;</p>

<p><span style="color:#000000">Content marketing is an affordable way to reach out to your target audience. Content marketing can help you cultivate brand loyalty from the onset. Content marketing can serve not only to inform prospective customers, but also to entertain.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Customers can learn interesting new facts they were not privy to. You can also let your customers know about new products, features or services. Some forms of content marketing include blog posts and email marketing.</span></p>

<p>&nbsp;</p>

<h2>SOME OF THE CONTENT WRITING SERVICES WE OFFER</h2>

<p>&nbsp;</p>

<ul>
	<li><span style="color:#000000">Email marketing</span></li>
	<li><span style="color:#000000">Blog and article writing</span></li>
	<li><span style="color:#000000">Academic writing</span></li>
	<li><span style="color:#000000">Research papers</span></li>
	<li><span style="color:#000000">Business Proposals</span></li>
	<li><span style="color:#000000">Concept notes</span></li>
	<li><span style="color:#000000">Partnership proposals</span></li>
	<li><span style="color:#000000">Go to market strategies</span></li>
	<li><span style="color:#000000">Social media strategies</span></li>
	<li><span style="color:#000000">Newsletters</span></li>
</ul>

<p>&nbsp;</p>

<p><span style="color:#000000">We have a dedicated team of writers who are passionate about what they do and have the knack for proper research. We have written for years, for clients across different sectors and practices. So you can trust us to be your content writing partner.</span></p>

<p><br />
&nbsp;</p>', '2023-01-07 01:34:00+03', 'content-marketing-and-writing-services');
INSERT INTO public.technologies_services VALUES (4, 'GRAPHIC DESIGN IN KENYA', '<p>&nbsp;</p>

<p><span style="color:#000000">Different colors evoke different kinds of emotion in people. Its the reason why women like flowers. We associate white with peace, red with passion, and black with elegance or power.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">There is a significance in different kinds of fonts. Magazines and online publications use Sans fonts because they are easy to read.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">Whereas&nbsp; newspapers use serif fonts. Serif fonts communicate boldness or seriousness. If you are a business like a liquor store, or entertainment business, you can use funky fonts that portray fun or happiness.&nbsp; You didn&rsquo;t know this? Don&#39;t worry because it&#39;s not your job. Let us focus on putting visuals behind your online campaign, promo, or advertisement, so you can focus on your core business. We understand how to mix the right colour schemes, typography and visuals to evoke the intended emotion in your target group.</span></p>

<p>&nbsp;</p>

<h2>OUR GRAPHIC DESIGN SERVICES</h2>

<p>&nbsp;</p>

<ul>
	<li><span style="color:#000000">Social media posters</span></li>
	<li><span style="color:#000000">Flyers</span></li>
	<li><span style="color:#000000">Banners</span></li>
	<li><span style="color:#000000">Signage</span></li>
	<li><span style="color:#000000">Website banners and visuals</span></li>
	<li><span style="color:#000000">Google display ads</span></li>
	<li><span style="color:#000000">Book covers</span></li>
	<li><span style="color:#000000">News paper ads</span></li>
	<li><span style="color:#000000">Website design mockups</span></li>
	<li><span style="color:#000000">Brochures</span></li>
	<li><span style="color:#000000">Newsletter design</span></li>
	<li><span style="color:#000000">Outdoor advertising (Billboards and displays)</span></li>
	<li><span style="color:#000000">Letterheads</span></li>
	<li><span style="color:#000000">Brand manuals</span></li>
</ul>

<p>&nbsp;</p>', '2023-01-07 01:43:50+03', 'graphic-design-in-kenya');
INSERT INTO public.technologies_services VALUES (5, 'SOCIAL LISTENING SERVICES', '<p><span style="color:#000000">Social listening is the process of accessing and analyzing what people say about a company, brand or individual on social media. It is useful because if a company or entity knows what people think about it, it can come up with ways to respond.</span></p>

<p>&nbsp;</p>

<h2>HOW CAN SOCIAL LISTENING IN KENYA BENEFIT YOUR BUSINESS?</h2>

<p>&nbsp;</p>

<h3><em>Crisis Management&nbsp;</em></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">If your company or brand is undergoing a crisis, you can single out people who are making bad comments about you. Then you can respond to their concerns.</span></p>

<p>&nbsp;</p>

<h3><em>Political Campaigns&nbsp;</em></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">Social listening can help you identify individuals with doubts about your policies or manifesto. Then you can give them a change in opinion.</span></p>

<p>&nbsp;</p>

<h3><em>Social media marketing campaigns&nbsp;</em></h3>

<p>&nbsp;</p>

<p><span style="color:#000000">Social listening tools can help you visualize the results of your social media marketing campaign. Social listening can also help you&nbsp; reach specific users who have expressed thoughts about your brand. Thus, helping you to build brand loyalty.&nbsp;&nbsp;</span></p>

<p>&nbsp;</p>

<h2>HOW CAN SOCIAL LISTENING BENEFIT PR FIRMS IN KENYA?</h2>

<p>&nbsp;</p>

<p><span style="color:#000000">PR firms and marketing agencies do a lot of crisis management and outreach, and social media marketing reports. This is where social listening tools come in. We will provide you with insights that can help you gauge the performance of your online campaigns.</span></p>

<p>&nbsp;</p>

<h2>HOW TO LEVERAGE BIG DATA IN SOCIAL MEDIA MARKETING</h2>

<p>&nbsp;</p>

<p><span style="color:#000000">The world we are living in is ever changing. Emerging technologies search as AI and blockchain are shaping our reality. Your competitors are leveraging on such technologies to gain an edge. It is not enough to post on social media and sit back, waiting for comments. You need to reach your prospective clients in their own timelines.&nbsp;</span></p>

<p>&nbsp;</p>

<h2>HOW CAN WE HELP YOU TO START LISTENING?</h2>

<p>&nbsp;</p>

<p><span style="color:#000000">We have inbuilt tools to help us get data from various social media platforms in large chunks. We then analyze the data using the latest technologies. And send you a spreadsheet with all the facts you need to know. We can change the settings to fit users in a particular geographical location. We can also know whether a post is negative or positive towards your brand.</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">For enterprises such as PR firms and marketing agencies, we can install for you software that will help you do your own mining and analysis. Don&#39;t worry, you don&rsquo;t need to have technical knowledge. Our personnel will train you on how to use the software. So let us help you step into the world of data driven marketing.</span></p>

<p>&nbsp;</p>', '2023-01-07 01:54:49+03', 'social-listening-services');
INSERT INTO public.technologies_services VALUES (6, 'PAID SOCIAL MEDIA MARKETING', '<p><img alt="social-media" src="https://kfdigi.com/wp-content/uploads/2021/01/Social-Media-Trends-in-2020-1000x484-1.png" style="height:145px; width:300px" /></p>

<p>&nbsp;</p>

<p><span style="color:#000000">The important thing when doing a paid online marketing campaign is to have a clear understanding of what you want to achieve. It could be an increase in your social media following, an increase in engagement, or direct messages. Because they will realise different kinds of gains for your business. Do you want to receive feedback for a particular product? Or do you want to create awareness?&nbsp; Without clear objectives a paid marketing campaign could be costly.&nbsp;</span></p>

<p>&nbsp;</p>

<p><span style="color:#000000">One of the benefits of paid social media ads is that you can choose your target group depending on interests, behaviours, demographics or age. But if you do not configure the ad correctly, then the campaign will not yield the desired results.&nbsp;</span></p>

<p>&nbsp;</p>

<h2>WHY DO A PAID SOCIAL MEDIA MARKETING CAMPAIGN WITH US?</h2>

<p>&nbsp;</p>

<ul>
	<li style="list-style-type:disc"><span style="color:#000000">Campaign strategy</span></li>
	<li style="list-style-type:disc"><span style="color:#000000">Content calendar</span></li>
	<li style="list-style-type:disc"><span style="color:#000000">Graphics</span></li>
	<li style="list-style-type:disc"><span style="color:#000000">Ad Scheduling</span></li>
</ul>

<p>&nbsp;</p>

<p><span style="color:#000000">We have a team of marketers, graphic designers and copywriters who. have experience using the ad interfaces of various platforms. Facebook, youtube, Google, Instagram, Twitter, you name it.</span></p>

<p>&nbsp;</p>', '2023-01-11 06:34:35+03', 'paid-social-media-marketing');
INSERT INTO public.technologies_services VALUES (7, 'GOOGLE DISPLAY AND SEARCH ADVERTISING', '<h2>GOOGLE SEARCH ADVERTISING</h2>

<p>&nbsp;</p>

<p><img alt="google search ad" src="http://www.tnasuite.com/wp-content/uploads/2020/02/Screenshot-2020-02-18T123053.464.png" style="height:195px; width:300px" /></p>

<p>&nbsp;</p>

<p><span style="color:#000000">These are a type of google advertising that appear in search results. Google search ads usually appear at the top of the page. When a buyer is searching for something, then it means that they have an interest in acquiring that thing. At the very least, they might want to get information about what they are searching for. So google search ads help you target users with intent. Google search ads are useful in increasing your click through rate and conversion</span></p>

<p>&nbsp;</p>

<h3>WHY DO GOOGLE SEARCH&nbsp; ADVERTISING WITH US?</h3>

<p>&nbsp;</p>

<p><span style="color:#000000">We have a team of experts who have specified in google advertising for a very long time. Our copywriters will help put engaging and thoughtful words on your advertising. Thus, increasing your click through rate. Let us help you turn your next advertising campaign into a resounding success.</span></p>

<p>&nbsp;</p>

<h2>GOOGLE DISPLAY ADVERTISING</h2>

<p>&nbsp;</p>

<p><img alt="" src="https://search.brave.com/images?q=google+search+ads&amp;source=web&amp;img=12" /><img alt="google display" src="https://www.verticalrail.com/wp-content/uploads/2019/03/display-ad.png" style="height:197px; width:300px" /></p>

<p>&nbsp;</p>

<p>Google display advertising is advertising using images. You have probably come across this kind of advertising on various websites. Think of it like an online version of a billboard.&nbsp;</p>

<p>&nbsp;</p>

<h3>HOW DISPLAY ADS WORK</h3>

<p>&nbsp;</p>

<p>When you have a website you can apply for google to display ads on your website. Depending on the amount of traffic your website receives. Google uses its Display Network to serve ads to users of a particular interest, or behavior, depending on their digital footprint. So it is highly targeted marketing, and it does this depending on the specifications you provided when creating the ad. Therefore it is important to have experience dealing with these types of ads, because if you customize the ad improperly then your advertising spend might be for nothing. The amount you will pay google will depend on the amount of users who have clicked on the ad. This is known as CPC. (Cost per click)</p>

<p>&nbsp;</p>

<p>We have experience creating display ads for different types of clients. We can help you create highly targeted ads to reach your intended target group, and make sure that every penny you spend is worth it. Our team of graphic designers will also help you to create engaging visuals for the campaign. Our copywriters will come up with copy that will trigger clicks from your intended target audience.</p>

<p>&nbsp;</p>', '2023-01-11 06:37:42+03', 'google-display-and-search-advertising');
INSERT INTO public.technologies_services VALUES (9, 'WEB DESIGN IN KENYA: FAST & RESPONSIVE WEBSITES', '<p>Web design is an art as much as it is a skill. A certain survey tried to determine why people liked a particular phone. The main finding was that many people were not sure why they used the phone in question.</p>

<p>The phone company explained that its UI is thoughtfully embedded in its UX, such that it&rsquo;s almost impossible to note the subtle differences. And that is what web design is about; User Experience (UX) and User Interface (UI).</p>

<p>A great website evokes emotion in the businesses&rsquo; target audience. It is more of psychology. A careful mix of words, colors, and elements increases your website&#39;s click-through rate.</p>

<p>&nbsp;</p>

<h2>ARE YOU LOOKING FOR AN AFFORDABLE AND QUALITY WEBSITE DESIGN IN KENYA?</h2>

<p>&nbsp;</p>

<p>We create modern and responsive websites. Thus, enabling you to connect with your customers at the click of a button.</p>

<p>Manage sales, customer queries, and even online marketing all from a single dashboard. Let us automate your sales processes as you sit back, relax, and watch your online audience grow.</p>

<p>&nbsp;</p>

<h2>OUR TOP WEB DESIGNERS IN KENYA WILL CREATE A WEBSITE FOR YOU THAT WILL:</h2>

<p>&nbsp;</p>

<ul>
	<li>Be affordable.</li>
	<li>Increase traffic to your business.</li>
	<li>Be fast and responsive.</li>
	<li>Enable you to engage with your customers.</li>
	<li>Be Secure &ndash; Your sensitive data such as customer information will be safe.</li>
	<li>Have excellent UI/ UX.</li>
	<li>Be easy to maintain &ndash; We will create an admin dashboard for you so that you can upload content such as new products and blog posts, and edit prices.</li>
	<li>Create short and sensible user journeys &ndash; The number of steps a user takes to complete a process like placing an order.</li>
</ul>

<p>&nbsp;</p>

<h2>WHY ARE WE A TOP WEB DESIGN COMPANY IN KENYA?</h2>

<p>&nbsp;</p>

<h3><em>The client is King.</em></h3>

<p>Even though we have years of experience in our line of work, we understand that you are the expert in your business.</p>

<p>&nbsp;</p>

<h3><em>Our aim is to help you achieve your vision.</em></h3>

<p>We will engage you at every step of the way, and we won&rsquo;t stop working until we get client satisfaction. So don&rsquo;t be afraid to share your opinions with us.</p>

<p>&nbsp;</p>

<h3><em>We will create a website design that will blow your mind.</em></h3>

<p>We don&rsquo;t believe in substandard work. We will create a world-class design that will suit your needs.</p>

<p>&nbsp;</p>

<h2>WHAT FEATURES SHOULD YOU EXPECT IN OUR WEB DESIGN?</h2>

<p>&nbsp;</p>

<p>We create WordPress sites that come with a Content Management System. Thus, making it easy for you to maintain the website. You do not need web development knowledge. They are also very affordable.</p>

<p>We create custom websites coded from scratch using languages such as Python Django or PHP Laravel. These websites also come with a complete admin dashboard, to make the process of maintenance easier. And we also do payment system integration.</p>

<p>We do a variety of websites such as blogs, eCommerce sites, personal websites, and business websites.</p>

<p>&nbsp;</p>

<h2>RESPONSIVE MOBILE WEB DESIGN IN KENYA</h2>

<p>&nbsp;</p>

<p>60% of online traffic comes from mobile users. So we optimize our websites for mobile. Thus, they are completely responsive. Meaning, content automatically grows or shrinks according to the user&#39;s device type.</p>

<p>Mobile optimization helps you increase the size of your target audience. We got you covered regardless of your users&#39; devices. We optimize your website for mobile, tablets, small laptops, or even desktops.</p>

<p>We use various strategies to increase your website&#39;s performance, irrespective of the storage size or RAM of the user&#39;s device. Thus, tremendously increasing, the user experience of your clients across all device types and income groups.</p>

<p>Not only do we improve the performance and responsiveness of new web designs, but also existing website on different devices.</p>

<p>We can also help you with SEO marketing strategies to enable you to target various devices.</p>

<p>&nbsp;</p>

<h2>THE KEY TO UNLOCKING A GREAT WEBSITE DESIGN IN KENYA</h2>

<p>&nbsp;</p>

<p>There are several methods we use to create a great website design, leading to a high conversion rate. These methods include:</p>

<p>&nbsp;</p>

<h3><em>An excellent UI</em></h3>

<p>A careful mix of colors and elements such as buttons and icons.</p>

<p>&nbsp;</p>

<h3><em>Thoughtful UX</em></h3>

<p>Improving the user experience of your clients using a well-linked and navigable website. Intuitive element placement, and short user journeys are important. We also use our team of copywriters to craft the right set of words that will stroke the emotions of prospective clients. Thus, triggering clicks and increasing your rate of conversion.</p>

<p>&nbsp;</p>

<h2>A GREAT WEBSITE IS LIKE A 24/ 7 PR MANAGER:</h2>

<p>&nbsp;</p>

<ul>
	<li>It responds to the needs of your clients around the clock.</li>
	<li>It gives users the right information when they need it.</li>
	<li>It makes it easier for users to get in contact with your business.</li>
	<li>It enables users to perform various actions. E.g., placing orders, making payments, and liking, commenting, or sharing.</li>
</ul>

<p>Let our team communicate your brand&#39;s message through well-thought color schemes, typefaces and fonts, and words. We can also use our graphic designers to create a brand manual for you that will outline the brand&rsquo;s creative direction, and provide a creative structure. Enabling users to begin identifying with your brand, thus increasing your brand loyalty.</p>

<p>&nbsp;</p>

<h2>HOW WILL WE MAKE YOUR WEBSITE DIFFERENT?</h2>

<p>&nbsp;</p>

<p>Web designers create over 250,000 every day. So how will we make your website stand out from this sea of websites?</p>

<p>One, using a User Interface in line with your brand colors and right words that communicate your value proposition. We will create a well-linked website that is navigable and helps solve the problems of your clients.</p>

<p>Presently, it is not enough to create a good website. You have to do search engine, social media, and content marketing to augment your efforts. This is why creating a website with us is one of the best decisions you will ever make. We offer a suite of services that act as an incubator for websites.</p>

<p>Let our SEO Specialists advise you on the best Search engine techniques to help your website gain preference in search engine searches.</p>

<p>Our social media marketers will use social media marketing to increase traffic to your website without spending a dime.</p>

<p>Our team of graphic designers will also help you create thoughtful visuals for your website and online campaigns.</p>

<p>Lastly, our copywriters will help you find the pefect mix of words for your website and social media.</p>

<p>&nbsp;</p>

<h2>OUR 4-STEP PROCESS TO CREATE A TOP WEB DESIGN IN KENYA</h2>

<p>&nbsp;</p>

<h3>Project Introduction</h3>

<p>&nbsp;</p>

<ul>
	<li>We hold an initial meeting with the client.</li>
	<li>The client is free to present his ideas at this stage.</li>
	<li>We go through the brief with the client, and advise them appropriately.</li>
	<li>We come up with wireframes (simple web design layouts).</li>
	<li>Finally, we discuss a payment plan.</li>
</ul>

<p><a href="https://salvacar.co.ke/#contact">GET QUOTATION</a></p>

<p><img alt="Project introduction" src="https://salvacar.co.ke/static/assets/images/happyclient-01.jpg" style="height:167px; width:250px" /></p>

<p>&nbsp;</p>

<h3>Project Implementation</h3>

<p>&nbsp;</p>

<p>After the client agrees on the initial design, we start the process of implementation. We hold a brainstorm session with the design team to come up with different creative directions. Then our UI/ UX designers create a mockup for the client&#39;s approval. After which, we begin the process of hard coding the website.</p>

<p><a href="https://salvacar.co.ke/#contact">GET QUOTATION</a></p>

<p><img alt="Project implementation" src="https://salvacar.co.ke/static/assets/images/happyclient-02.jpg" style="height:167px; width:250px" /></p>

<h3>Project Review</h3>

<p>&nbsp;</p>

<p>After project completion, our team of web designers reviews the design internally. Once our team implements all the changes, we contact the client for a final review. The client can communicate any further revisions, if any. Upon the client&#39;s satisfaction, we finally hand over the website credentials.</p>

<p><a href="https://salvacar.co.ke/#contact">GET QUOTATION</a></p>

<p><img alt="Project review" src="https://salvacar.co.ke/static/assets/images/happyclient-03.jpg" style="height:167px; width:250px" /></p>

<p>For web development projects, we offer one month of free maintenance. After the maintenance period, we can discuss a new contract if need be.</p>

<p><a href="https://salvacar.co.ke/#contact">GET QUOTATION</a></p>

<p>&nbsp;</p>

<h3>Project Maintenance</h3>

<p>&nbsp;</p>

<p>&nbsp;</p>

<p><img alt="Project maintenance" src="https://salvacar.co.ke/static/assets/images/happyclient-05.jpg" style="height:200px; width:300px" /></p>

<h2>&nbsp;</h2>

<h2>WHAT DO YOU NEED FOR A FUNCTIONAL WEBSITE DESIGN IN KENYA?</h2>

<p>&nbsp;</p>

<h3>Backend</h3>

<p>&nbsp;</p>

<p><img alt="Backend" src="https://salvacar.co.ke/static/assets/images/backend.png" style="height:100px; width:100px" /></p>

<p>The information architecture that connects the front end to the database. It helps the app complete its functions e.g., creating a new user.</p>

<p>&nbsp;</p>

<h3>Frontend</h3>

<p>&nbsp;</p>

<p><img alt="Frontent" src="https://salvacar.co.ke/static/assets/images/frontend.png" style="height:100px; width:100px" /></p>

<p>These are the visual effects that help a user to interact with a website. In simple terms, it is everything that a user can see on the website.</p>

<p>&nbsp;</p>

<h3>Source Code</h3>

<p>&nbsp;</p>

<p><img alt="Source code" src="https://salvacar.co.ke/static/assets/images/code.png" style="height:100px; width:100px" /></p>

<p>This is the website&#39;s original code.</p>

<p>&nbsp;</p>

<h3>Web Domain</h3>

<p>&nbsp;</p>

<p><img alt="domain" src="https://salvacar.co.ke/static/assets/images/domain.png" style="height:100px; width:100px" /></p>

<p>This is the website&rsquo;s online address, e.g., www.mywebsite.com</p>

<p>&nbsp;</p>

<h3>Web Hosting</h3>

<p>&nbsp;</p>

<p><img alt="web hosting" src="https://salvacar.co.ke/static/assets/images/server.png" style="height:100px; width:100px" /></p>

<p>This is the storage site for your website&#39;s code. Think of it like an online location for your website. Some hosting services include host pinnacle and Kenya web experts.</p>

<p>&nbsp;</p>', '2023-01-24 05:55:23+03', 'web-design-in-kenya');


--
-- Name: auth_group_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.auth_group_id_seq', 1, false);


--
-- Name: auth_group_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.auth_group_permissions_id_seq', 1, false);


--
-- Name: auth_permission_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.auth_permission_id_seq', 36, true);


--
-- Name: auth_user_groups_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.auth_user_groups_id_seq', 1, false);


--
-- Name: auth_user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.auth_user_id_seq', 1, true);


--
-- Name: auth_user_user_permissions_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.auth_user_user_permissions_id_seq', 1, false);


--
-- Name: django_admin_log_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.django_admin_log_id_seq', 54, true);


--
-- Name: django_content_type_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.django_content_type_id_seq', 9, true);


--
-- Name: django_migrations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.django_migrations_id_seq', 22, true);


--
-- Name: technologies_contact_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.technologies_contact_id_seq', 3, true);


--
-- Name: technologies_post_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.technologies_post_id_seq', 1, true);


--
-- Name: technologies_services_id_seq; Type: SEQUENCE SET; Schema: public; Owner: salvacar_data
--

SELECT pg_catalog.setval('public.technologies_services_id_seq', 9, true);


--
-- PostgreSQL database dump complete
--

