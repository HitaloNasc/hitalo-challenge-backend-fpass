export interface ICharacter {
    id: number;
    name: string;
    description: string;
    modified: string;
    resourceURI: string;
    urls: Url[];
    thumbnail: Image;
    comics: ComicList;
    stories: StoryList;
    events: EventList;
    series: SeriesList;
}

type Url = {
    type: string;
    url: string;
};

type Image = {
    path: string;
    extension: string;
};

type ComicList = {
    available: number;
    returned: number;
    collectionURI: string;
    items: ComicSummary[];
};

type ComicSummary = {
    resourceURI: string;
    name: string;
};

type StoryList = {
    available: number;
    returned: number;
    collectionURI: string;
    items: StorySummary[];
};

type StorySummary = {
    resourceURI: string;
    name: string;
};

type EventList = {
    available: number;
    returned: number;
    collectionURI: string;
    items: EventSummary[];
};

type EventSummary = {
    resourceURI: string;
    name: string;
};

type SeriesList = {
    available: number;
    returned: number;
    collectionURI: string;
    items: SeriesSummary[];
};

type SeriesSummary = {
    resourceURI: string;
    name: string;
};
