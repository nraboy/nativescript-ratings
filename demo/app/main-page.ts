import { EventData } from "data/observable";
import { Page } from "ui/page";
import { Ratings } from "nativescript-ratings";

export function navigatingTo(args: EventData) {
    var page = <Page>args.object;
}

export function navigatedTo(args: EventData) {
    let ratings = new Ratings(
        {
            id: "0",
            showOnCount: 2,
            title: "What do you think?",
            text: "If you like this app, please take a moment to leave a positive rating.",
            agreeButtonText: "Rate Now",
            remindButtonText: "Remind Me Later",
            declineButtonText: "No Thanks",
            androidPackageId: "com.nativescript.demo",
            iTunesAppId: "927183647"
        }
    );
    ratings.init();
    ratings.prompt();
}
