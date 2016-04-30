# NativeScript Application Ratings

This Telerik NativeScript plugin will prompt the user to rate your application after a defined amount of calls, or preferably, a defined amount of application opens.

![NativeScript Ratings](/nativescript-ratings-image.png)

## Installation

This plugin will work for both Android and iOS.  To install it into your project, execute the following from your Command Prompt (Windows) or Terminal (Mac and Linux) with the project as the current working directory:

```sh
tns plugin add nativescript-ratings
```

### Using the Demo Project

This plugin has a demo project bundled with it. To give it a try without creating a fresh project, execute the following with the **plugin directory** as the **current working directory**:

```sh
npm run setup
npm run demo.ios
npm run demo.android
```

Running `demo.ios` or `demo.android` will run for the appropriate platform.

## Using the Ratings Plugin (TypeScript)

The plugin is very basic.  First, it must be included within your project like so:

```typescript
import { Ratings } from "nativescript-ratings";
```

With the plugin imported it can be initialized like so:

```typescript
let ratings = new Ratings({
    id: "appname-1.0.0",
    showOnCount: 5,
    title: "Please rate",
    text: "Will you please rate my app?",
    agreeButtonText: "Rate Now",
    remindButtonText: "Remind Me Later",
    declineButtonText: "No Thanks",
    androidPackageId: "com.nativescript.demo",
    iTunesAppId: "12345"
});
```

Of the above configuration properties, only the `title` and `text` are required.  All other properties have default values, which you can choose to override by including your own.

To increase the show-counter, the `init()` function must be called like so:

```typescript
ratings.init();
```

Finally, a prompt can be shown if the show-count matches what was defined in the configuration properties:

```typescript
ratings.prompt();
```

If the remind button is pressed, the counter is reset and will show again when the values match.

## Resources

NativeScript - [https://www.nativescript.org](https://www.nativescript.org)

The Polyglot Developer - [https://www.thepolyglotdeveloper.com](https://www.thepolyglotdeveloper.com)
