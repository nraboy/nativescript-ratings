import * as Application from "application";
import * as Dialogs from "ui/dialogs";
import * as Utility from "utils/utils";
import * as ApplicationSettings from "application-settings";

declare var android: any;

export interface IConfiguration {
    id?: string;
    showOnCount?: number;
    title: string;
    text: string;
    agreeButtonText?: string;
    remindButtonText?: string;
    declineButtonText?: string;
    androidPackageId?: string;
    iTunesAppId?: string;
}

export class Ratings {

    private configuration: IConfiguration;
    private showCount: number;

    constructor(configuration: IConfiguration) {
        this.configuration = configuration;
        this.configuration.id = this.configuration.id ? this.configuration.id : "ratings-0";
        this.configuration.showOnCount = this.configuration.showOnCount ? this.configuration.showOnCount : 5;
        this.configuration.agreeButtonText = this.configuration.agreeButtonText ? this.configuration.agreeButtonText : "Rate Now";
        this.configuration.remindButtonText = this.configuration.remindButtonText ? this.configuration.remindButtonText : "Remind Me Later";
        this.configuration.declineButtonText = this.configuration.declineButtonText ? this.configuration.declineButtonText : "No Thanks";
    }

    init() {
        this.showCount = ApplicationSettings.getNumber(this.configuration.id, 0);
        this.showCount++;
        ApplicationSettings.setNumber(this.configuration.id, this.showCount);
    }

    prompt() {
        if (this.showCount == this.configuration.showOnCount) {
            Dialogs.confirm({
                title: this.configuration.title,
                message: this.configuration.text,
                okButtonText: this.configuration.agreeButtonText,
                cancelButtonText: this.configuration.declineButtonText,
                neutralButtonText: this.configuration.remindButtonText
            }).then(result => {
                if (result == true) {
                    let appStore = "";
                    if (Application.android) {
                        let androidPackageName = this.configuration.androidPackageId ? this.configuration.androidPackageId : Application.android.packageName;
                        let uri = android.net.Uri.parse("market://details?id=" + androidPackageName);
                        let myAppLinkToMarket = new android.content.Intent(android.content.Intent.ACTION_VIEW, uri);
                        // Launch the PlayStore
                        Application.android.foregroundActivity.startActivity(myAppLinkToMarket);
                    } else if (Application.ios) {
                        appStore = "itms-apps://itunes.apple.com/en/app/id" + this.configuration.iTunesAppId;
                    }
                    Utility.openUrl(appStore);
                } else if (result == false) {
                    // Decline
                } else {
                    ApplicationSettings.setNumber(this.configuration.id, 0);
                }
            });
        }
    }

}
