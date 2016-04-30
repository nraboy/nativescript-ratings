declare module "nativescript-ratings" {

    export class Ratings {
        constructor(configuration: IConfiguration);
        init();
        prompt();
    }

    export interface IConfiguration {
        id?: string;
        showOnCount?: number;
        title: string;
        text?: string;
        agreeButtonText?: string;
        remindButtonText?: string;
        declineButtonText?: string;
        androidPackageId?: string;
        iTunesAppId?: string;
    }

}
