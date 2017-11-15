export class Image{
    _id: String;
    date: String;
    longitude: String;
    latitude: String;
    id_journey: String;
    isFavourite: Boolean;
    tags: Array<String>;
    title: String;
    user_id: String;

    constructor() {
        this._id = '';
        this.date = '';
        this.longitude = '';
        this.latitude = '';
        this.id_journey = '';
        this.isFavourite = false;
        this.tags = [];
        this.title = '';
        this.user_id = '';
    }
}
