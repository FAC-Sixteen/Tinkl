BEGIN;

DROP TABLE IF EXISTS toilets CASCADE;

CREATE TABLE toilets (
    id SERIAL PRIMARY KEY,
    active BOOLEAN NOT NULL,
    name VARCHAR(60) NOT NULL,
    description VARCHAR(280),
    longitude numeric NOT NULL,
    latitude numeric NOT NULL,
    address TEXT,
    opening_hour TIME,
    closing_hour TIME,
    accessible BOOLEAN,
    gender_neutral BOOLEAN,
    baby_changing BOOLEAN,
    customer_toilet BOOLEAN NOT NULL,
    price numeric(3,2),
    radar BOOLEAN,
    removal_reason VARCHAR(280)
);

INSERT INTO toilets (
    active,
    name,
    description,
    longitude,
    latitude,
    address,
    opening_hour,
    closing_hour,
    accessible,
    gender_neutral,
    baby_changing,
    customer_toilet,
    price
) VALUES (
    true,
    'Waterstones',
    'Toilet in the back behind the counter',
    -0.12354,
    51.57823,
    '2-4 The Broadway, Crouch End, London N8 9SN',
    '09:00',
    '17:00',
    true,
    false,
    true,
    true,
    0.00
);

COMMIT;