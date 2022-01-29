export interface Login {
    loggedIn: boolean
}

export interface Categories {
    id: number,
    text: string,
    screen: string
}

export interface LocalSettings {
    NotificationEnabled: boolean,
    NotificationTimer: string | Date | number,

}
