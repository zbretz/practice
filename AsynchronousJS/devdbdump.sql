--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2 (Debian 14.2-1.pgdg110+1)
-- Dumped by pg_dump version 14.2 (Debian 14.2-1.pgdg110+1)

-- DROP DATABASE IF EXISTS postgres2;
-- create database postgres2;

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: appointment; Type: TABLE; Schema: public; Owner: admin
--

DROP TABLE IF EXISTS public.appointment;

CREATE TABLE public.appointment (
    id integer NOT NULL,
    cleaner_id integer NOT NULL,
    date date NOT NULL,
    "time" time without time zone NOT NULL,
    available boolean DEFAULT true NOT NULL
);


ALTER TABLE public.appointment OWNER TO admin;

--
-- Name: appointment_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.appointment_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.appointment_id_seq OWNER TO admin;

--
-- Name: appointment_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.appointment_id_seq OWNED BY public.appointment.id;


--
-- Name: cleaner; Type: TABLE; Schema: public; Owner: admin
--
DROP TABLE IF EXISTS public.cleaner;

CREATE TABLE public.cleaner (
    id integer NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(50) NOT NULL,
    phone character varying(50) NOT NULL,
    about_me text[],
    password character varying(70) NOT NULL
);


ALTER TABLE public.cleaner OWNER TO admin;

--
-- Name: cleaner_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.cleaner_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.cleaner_id_seq OWNER TO admin;

--
-- Name: cleaner_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.cleaner_id_seq OWNED BY public.cleaner.id;


--
-- Name: client; Type: TABLE; Schema: public; Owner: admin
--

DROP TABLE IF EXISTS public.client;

CREATE TABLE public.client (
    id integer NOT NULL,
    first_name character varying(30) NOT NULL,
    last_name character varying(30) NOT NULL,
    email character varying(50) NOT NULL,
    phone character varying(50) NOT NULL,
    unit_number character varying(10),
    street character varying(50) NOT NULL,
    city character varying(30) NOT NULL,
    postal_code integer NOT NULL,
    state character varying(2) NOT NULL,
    special_instructions text[],
    password character varying(70) NOT NULL
);


ALTER TABLE public.client OWNER TO admin;

--
-- Name: client_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.client_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.client_id_seq OWNER TO admin;

--
-- Name: client_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.client_id_seq OWNED BY public.client.id;


--
-- Name: photo; Type: TABLE; Schema: public; Owner: admin
--

DROP TABLE IF EXISTS public.photo;

CREATE TABLE public.photo (
    id integer NOT NULL,
    client_id integer NOT NULL,
    image_url text
);


ALTER TABLE public.photo OWNER TO admin;

--
-- Name: photo_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.photo_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.photo_id_seq OWNER TO admin;

--
-- Name: photo_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.photo_id_seq OWNED BY public.photo.id;


--
-- Name: reservation; Type: TABLE; Schema: public; Owner: admin
--

DROP TABLE IF EXISTS public.reservation;

CREATE TABLE public.reservation (
    id integer NOT NULL,
    client_id integer NOT NULL,
    cleaner_id integer NOT NULL,
    appointment_id integer NOT NULL,
    status character varying(15) DEFAULT 'pending'::character varying NOT NULL
);


ALTER TABLE public.reservation OWNER TO admin;

--
-- Name: reservation_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.reservation_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.reservation_id_seq OWNER TO admin;

--
-- Name: reservation_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.reservation_id_seq OWNED BY public.reservation.id;


--
-- Name: video; Type: TABLE; Schema: public; Owner: admin
--

DROP TABLE IF EXISTS public.video;

CREATE TABLE public.video (
    id integer NOT NULL,
    cleaner_id integer NOT NULL,
    video_url text NOT NULL
);


ALTER TABLE public.video OWNER TO admin;

--
-- Name: video_id_seq; Type: SEQUENCE; Schema: public; Owner: admin
--

CREATE SEQUENCE public.video_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.video_id_seq OWNER TO admin;

--
-- Name: video_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: admin
--

ALTER SEQUENCE public.video_id_seq OWNED BY public.video.id;


--
-- Name: appointment id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.appointment ALTER COLUMN id SET DEFAULT nextval('public.appointment_id_seq'::regclass);


--
-- Name: cleaner id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.cleaner ALTER COLUMN id SET DEFAULT nextval('public.cleaner_id_seq'::regclass);


--
-- Name: client id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.client ALTER COLUMN id SET DEFAULT nextval('public.client_id_seq'::regclass);


--
-- Name: photo id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.photo ALTER COLUMN id SET DEFAULT nextval('public.photo_id_seq'::regclass);


--
-- Name: reservation id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation ALTER COLUMN id SET DEFAULT nextval('public.reservation_id_seq'::regclass);


--
-- Name: video id; Type: DEFAULT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.video ALTER COLUMN id SET DEFAULT nextval('public.video_id_seq'::regclass);


--
-- Data for Name: appointment; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.appointment (id, cleaner_id, date, "time", available) FROM stdin;
1	1	2022-05-18	10:00:00	t
2	1	2022-05-18	12:00:00	t
3	1	2022-05-18	14:00:00	t
4	1	2022-05-19	16:00:00	t
5	1	2022-05-19	10:00:00	t
6	1	2022-05-13	12:00:00	t
7	1	2022-05-13	14:00:00	t
8	1	2022-05-13	16:00:00	t
9	1	2022-05-14	10:00:00	t
10	1	2022-05-14	12:00:00	t
11	1	2022-05-14	14:00:00	t
12	1	2022-05-14	16:00:00	t
13	1	2022-05-15	10:00:00	t
14	1	2022-05-15	12:00:00	t
15	1	2022-05-15	14:00:00	t
16	1	2022-05-15	16:00:00	t
17	1	2022-05-17	10:00:00	f
18	1	2022-05-17	12:00:00	f
19	1	2022-05-17	14:00:00	f
20	1	2022-05-17	16:00:00	t
21	1	2022-05-18	10:00:00	t
22	1	2022-05-18	12:00:00	t
23	1	2022-05-18	14:00:00	t
24	1	2022-05-18	16:00:00	t
25	2	2022-05-16	10:00:00	t
26	2	2022-05-16	12:00:00	t
27	2	2022-05-16	14:00:00	t
28	2	2022-05-16	16:00:00	t
29	2	2022-05-17	10:00:00	t
30	2	2022-05-17	12:00:00	t
31	2	2022-05-17	14:00:00	t
32	2	2022-05-17	16:00:00	t
33	2	2022-05-04	10:00:00	t
34	2	2022-05-04	12:00:00	f
35	2	2022-05-04	14:00:00	f
36	2	2022-05-04	16:00:00	f
37	2	2022-05-15	10:00:00	t
38	2	2022-05-15	12:00:00	t
39	2	2022-05-15	14:00:00	t
40	2	2022-05-15	16:00:00	t
41	2	2022-05-18	10:00:00	t
42	2	2022-05-18	12:00:00	t
43	2	2022-05-18	14:00:00	t
44	2	2022-05-18	16:00:00	t
45	3	2022-05-16	10:00:00	f
46	3	2022-05-16	12:00:00	t
47	3	2022-05-16	14:00:00	t
48	3	2022-05-16	16:00:00	t
49	3	2022-05-17	10:00:00	f
50	3	2022-05-17	12:00:00	f
51	3	2022-05-17	14:00:00	f
52	3	2022-05-17	16:00:00	t
53	3	2022-05-04	10:00:00	f
54	3	2022-05-04	12:00:00	f
55	3	2022-05-04	14:00:00	f
56	3	2022-05-04	16:00:00	f
57	3	2022-05-15	10:00:00	t
58	3	2022-05-15	12:00:00	t
59	3	2022-05-15	14:00:00	t
60	3	2022-05-15	16:00:00	f
61	3	2022-05-18	10:00:00	t
62	3	2022-05-18	12:00:00	t
63	3	2022-05-18	14:00:00	t
64	3	2022-05-18	16:00:00	t
\.


--
-- Data for Name: cleaner; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.cleaner (id, first_name, last_name, email, phone, about_me, password) FROM stdin;
1	Lura	Terbrug	lterbrug0@cornell.edu	(260) 3778189	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	$2b$10$aZZmg4uSGN.fVB.ZNLMU9eO78wZexN5Kvm/k5bHK1UFGxlAWjsKG.
2	Lanie	Cressar	lcressar1@illinois.edu	(595) 7227831	{"Morbi sem mauris","laoreet ut","rhoncus aliquet","pulvinar sed","nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue","risus semper porta volutpat","quam pede lobortis ligula","sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes","nascetur ridiculus mus. Vivamus vestibulum sagittis sapien."}	$2b$10$scyrR7i1EKqmD4JdRQ3QsuQxEP.O4tX6LtxCYtBqwOMQ0Y0US2bAW
3	Marley	Campos	mcampos2@biglobe.ne.jp	(558) 7193448	{"Integer non velit. Donec diam neque","vestibulum eget","vulputate ut","ultrices vel","augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra","magna vestibulum aliquet ultrices","erat tortor sollicitudin mi","sit amet lobortis sapien sapien non mi. Integer ac neque. Duis bibendum."}	SWCTu6IoWJ
4	Ranique	Trundle	rtrundle3@irs.gov	(134) 7812313	{"Vivamus in felis eu sapien cursus vestibulum. Proin eu mi. Nulla ac enim. In tempor","turpis nec euismod scelerisque","quam turpis adipiscing lorem","vitae mattis nibh ligula nec sem. Duis aliquam convallis nunc. Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque","vestibulum eget","vulputate ut","ultrices vel","augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra","magna vestibulum aliquet ultrices","erat tortor sollicitudin mi","sit amet lobortis sapien sapien non mi. Integer ac neque."}	sA3pV9VLLxh
5	Dela	Growy	dgrowy4@gmpg.org	(557) 6355155	{"Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum."}	m4FqVpEk4
6	Fredelia	Waldren	fwaldren5@paypal.com	(973) 2008117	{"Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh."}	3lnqH6VrI74
7	Nester	Starbeck	nstarbeck6@ezinearticles.com	(482) 6262696	{"Vestibulum rutrum rutrum neque. Aenean auctor gravida sem."}	EA9ECFiymE
8	Cosetta	Peete	cpeete7@oaic.gov.au	(175) 9973989	{"Nullam orci pede","venenatis non","sodales sed","tincidunt eu","felis. Fusce posuere felis sed lacus. Morbi sem mauris","laoreet ut","rhoncus aliquet","pulvinar sed","nisl. Nunc rhoncus dui vel sem. Sed sagittis."}	mHVIOoRD60Qn
9	Addia	Arlidge	aarlidge8@scribd.com	(453) 2467929	{"Pellentesque ultrices mattis odio. Donec vitae nisi."}	DHV8AJq
10	Cariotta	Ekkel	cekkel9@simplemachines.org	(704) 8987128	{"Fusce posuere felis sed lacus. Morbi sem mauris","laoreet ut","rhoncus aliquet","pulvinar sed","nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue","risus semper porta volutpat","quam pede lobortis ligula","sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes","nascetur ridiculus mus."}	q9C9o7Ums
\.


--
-- Data for Name: client; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.client (id, first_name, last_name, email, phone, unit_number, street, city, postal_code, state, special_instructions, password) FROM stdin;
1	Jana	Lacer	jlacer0@marketwatch.com	(701) 3659604	\N	9 Armistice Pass	Grand Forks	58207	ND	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	$2b$10$FkFUH6W0kiVEOV3zTUBl1ubL.Tfc4Paftu7TF3tXE7Cqj4DjOORH.
2	Chrissy	Cheng	ccheng1@aboutads.info	(423) 1525749	776	3789 John Wall Lane	Chattanooga	37405	TN	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	$2b$10$Mhsl6Ul9y7zwBoOcSBd2ke.ywsLve/w0FXOiWbnaS7fMjfkh3E81u
3	Rafa	Vokins	rvokins2@addthis.com	(323) 7761740	304	2384 Redwing Street	Los Angeles	90076	CA	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	q3cHk1KK
4	Julissa	Cridlon	jcridlon3@dedecms.com	(520) 7974444	\N	7 Vahlen Court	Tucson	85715	AZ	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	NeBxhnIJ9WPH
5	Reggy	Hartwright	rhartwright4@weebly.com	(210) 3040160	483	5 Jana Junction	San Antonio	78225	TX	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	hxFkzGH5Snz
6	Vincent	McCartney	vmccartney5@gmpg.org	(210) 3264151	\N	3 Vahlen Drive	San Antonio	78265	TX	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	HFOl02ZJH
7	Trude	Gillyatt	tgillyatt6@desdev.cn	(404) 8110650	\N	17078 Myrtle Crossing	Atlanta	30392	GA	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	cF90ApHfX
8	Chariot	Fawbert	cfawbert7@nbcnews.com	(619) 7090767	527	88 Farragut Court	San Diego	92137	CA	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	5L0IAlfGy
9	Cirilo	Schultheiss	cschultheiss8@moonfruit.com	(512) 4398770	\N	79 Green Ridge Way	Austin	78764	TX	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	dNnyCa
10	Daryl	Kaemena	dkaemena9@deliciousdays.com	(504) 5159801	\N	467 Laurel Avenue	New Orleans	70187	LA	{"Mauris enim leo","rhoncus sed","vestibulum sit amet","cursus id","turpis. Integer aliquet","massa id lobortis convallis","tortor risus dapibus augue","vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero."}	qSatNE
11	1	1	1	1	1	1	1	1	1	{""}	$2b$10$INgmnrXzrN2fISFGSTQt/uLPMfcZR6.UVDtcP57bWzHIxwYIe.5pO
12	1	1	1	1	1	1	1	1	1	{""}	$2b$10$FcYk0fMOWWzFiq5Xx2dGI.6qY6j2u1L8WGcZZ53abktQaI63IZs2y
13	2	2	2	2	2	2	2	2	2	{""}	$2b$10$I45Zm0ELmF4pOg71euoKUeQUzqy631owrqGqJQXJk.WzKzPapS/da
14	3	3	3	3	3	3	3	3	3	{""}	$2b$10$s/RZ3oYOeDOVaUu9WJ/84u86RzN8E/h53/hbVVBSSHzsbXRx6PyDi
15	4	4	4	4	4	4	4	4	4	{"4\t\n"}	$2b$10$27WMEmJelP4yp.w3w85hqOjCgVSa/yYEWyMBB0eLG2odZaDmZWwUm
\.


--
-- Data for Name: photo; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.photo (id, client_id, image_url) FROM stdin;
1	7	http://dummyimage.com/1617x818.png/dddddd/000000
2	2	http://dummyimage.com/1151x557.png/cc0000/ffffff
3	10	http://dummyimage.com/1771x496.png/cc0000/ffffff
4	1	http://dummyimage.com/1158x129.png/5fa2dd/ffffff
5	6	http://dummyimage.com/1906x658.png/5fa2dd/ffffff
6	3	http://dummyimage.com/1102x880.png/ff4444/ffffff
7	5	http://dummyimage.com/1649x259.png/ff4444/ffffff
8	8	http://dummyimage.com/617x381.png/ff4444/ffffff
9	4	http://dummyimage.com/282x847.png/ff4444/ffffff
10	9	http://dummyimage.com/1789x561.png/ff4444/ffffff
12	11	\N
13	12	\N
14	13	\N
15	14	\N
16	15	\N
\.


--
-- Data for Name: reservation; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.reservation (id, client_id, cleaner_id, appointment_id, status) FROM stdin;
\.


--
-- Data for Name: video; Type: TABLE DATA; Schema: public; Owner: admin
--

COPY public.video (id, cleaner_id, video_url) FROM stdin;
1	4	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
2	8	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
3	9	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
4	6	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
5	3	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
6	7	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
7	10	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
8	1	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
9	5	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
10	2	http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4
\.


--
-- Name: appointment_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.appointment_id_seq', 50, false);


--
-- Name: cleaner_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.cleaner_id_seq', 11, false);


--
-- Name: client_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.client_id_seq', 15, true);


--
-- Name: photo_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.photo_id_seq', 16, true);


--
-- Name: reservation_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.reservation_id_seq', 13, false);


--
-- Name: video_id_seq; Type: SEQUENCE SET; Schema: public; Owner: admin
--

SELECT pg_catalog.setval('public.video_id_seq', 11, false);


--
-- Name: appointment appointment_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_pkey PRIMARY KEY (id);


--
-- Name: cleaner cleaner_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.cleaner
    ADD CONSTRAINT cleaner_pkey PRIMARY KEY (id);


--
-- Name: client client_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.client
    ADD CONSTRAINT client_pkey PRIMARY KEY (id);


--
-- Name: photo photo_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.photo
    ADD CONSTRAINT photo_pkey PRIMARY KEY (id);


--
-- Name: reservation reservation_appointment_id_key; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_appointment_id_key UNIQUE (appointment_id);


--
-- Name: reservation reservation_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_pkey PRIMARY KEY (id);


--
-- Name: video video_pkey; Type: CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_pkey PRIMARY KEY (id);


--
-- Name: appointment appointment_cleaner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.appointment
    ADD CONSTRAINT appointment_cleaner_id_fkey FOREIGN KEY (cleaner_id) REFERENCES public.cleaner(id);


--
-- Name: photo photo_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.photo
    ADD CONSTRAINT photo_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.client(id);


--
-- Name: reservation reservation_appointment_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_appointment_id_fkey FOREIGN KEY (appointment_id) REFERENCES public.appointment(id);


--
-- Name: reservation reservation_cleaner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_cleaner_id_fkey FOREIGN KEY (cleaner_id) REFERENCES public.cleaner(id);


--
-- Name: reservation reservation_client_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.reservation
    ADD CONSTRAINT reservation_client_id_fkey FOREIGN KEY (client_id) REFERENCES public.client(id);


--
-- Name: video video_cleaner_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: admin
--

ALTER TABLE ONLY public.video
    ADD CONSTRAINT video_cleaner_id_fkey FOREIGN KEY (cleaner_id) REFERENCES public.cleaner(id);


--
-- PostgreSQL database dump complete
--

