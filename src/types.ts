export class Movie {

    id!: number;
    original_language!: string;
    overview!: string;
    popularity!: number;
    release_date!: string;
    title!: string;
    poster_path!: string;
    runtime!: number;
    genres!: Genre[];
    productionCompanies!: ProdCompany[];
    comments!: Comment[];
}

export class Genre {

    id!: number;
    name!: string;
}

export class ProdCompany {

    id!: number;
    logoPath!: string;
    name!: string;
    originCountry!: string;
}

export class Comment {

    id!: number;
    movieId!: number;
    text!: string;
    rating!: number;
    date!: string;
}