export class Movie {

    id!: number;
    original_language!: string;
    overview!: string;
    popularity!: number;
    release_date!: string;
    title!: string;
    poster_path!: string;
    runtime!: number;
    spoken_languages!: Language[];
    genres!: Genre[];
    productionCompanies!: ProdCompany[];
    vote_average!: number;
    comments!: Comment[];
}

export class Genre {

    id!: number;
    name!: string;
}

export class ProdCompany {

    id!: number;
    logo_path!: string;
    name!: string;
    origin_country!: string;
}

export class Language {

    english_name!: string;
    iso_639_1!: string;
    name!: string;
}

export class Comment {

    id!: number;
    movie_id!: number;
    text!: string;
    rating!: number;
    date!: string;
}