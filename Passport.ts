const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { UserModel } = require('./models/UserModel');

const userModel = new UserModel();
const User = userModel.model;

class Passport {
    GOOGLE_CLIENT_ID: string = "459460742213-o2g03lkbf0ujsg935lsbfb16hmsbf1se.apps.googleusercontent.com";
    GOOGLE_CLIENT_SECRET: string = "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";

    constructor() {
        passport.use(new GoogleStrategy({
            clientID: this.GOOGLE_CLIENT_ID,
            clientSecret: this.GOOGLE_CLIENT_SECRET,
            callbackURL: "https://bloggers-room.azurewebsites.net/auth/google/callback",

        },
            async (request, accessToken, refreshToken, profile, done) => {
                try {
                    console.log('validating google profile:' + JSON.stringify(profile));
                    console.log("userId:" + profile.id);
                    console.log("displayName: " + profile.displayName);
                    console.log("email: " + profile.emails[0].value);
                    console.log("retrieve all of the profile info needed");
                    const existingUser = await User.findOne({ user_id: profile.id });
                    if (existingUser) {
                        return done(null, existingUser);
                    }

                    const newUser = new User({
                        user_id: profile.id,
                        displayName: profile.displayName,
                        email: profile.emails[0].value
                    });

                    const savedUser = await newUser.save();
                    return done(null, savedUser);
                }
                catch (error) {
                    return done(error, null);
                }
            })
        );

        passport.serializeUser(function (user, done) {
            done(null, user);
        });

        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}

export default Passport;