CREATE TABLE manga_list (
    _id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    profile TEXT,
    cover TEXT,
    rating DECIMAL,
    status VARCHAR(60),
    review TEXT,
    released VARCHAR(60),
    author VARCHAR(60),
    artist VARCHAR(60),
    serialization VARCHAR(255),
    postedby VARCHAR(60),
    postedon TEXT[],
    lastupdatedon TEXT[],
    type VARCHAR(255),
    genres TEXT,
    comments JSONB
)

CREATE TABLE chapters (
    _id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    chapterfor TEXT,
    released VARCHAR(60),
    postedby VARCHAR(60),
    postedon TEXT[],
    lastupdatedon TEXT[],
    imgs TEXT[]
)