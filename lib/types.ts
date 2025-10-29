export type Article = {
    type: "article",
    photo: string,
    title: string,
    body: string,
    review: {
        quote: string,
        source: string
    }
}

export type TourDate = {
    type: "tourdate",
    photo: string,
    city: string,
    theatre: string,
    dates: string,
    carrie: boolean,
    link: string
}