export interface Login {
    loggedIn: boolean
}

export interface Categories {
    text: string,
    screen: string
}

export interface LocalSettings {
    NotificationEnabled: boolean,
    NotificationTimer: string | Date | number,

}
