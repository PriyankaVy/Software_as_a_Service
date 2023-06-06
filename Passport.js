"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const { UserModel } = require('./models/UserModel');
const userModel = new UserModel();
const User = userModel.model;
class Passport {
    constructor() {
        this.GOOGLE_CLIENT_ID = "459460742213-o2g03lkbf0ujsg935lsbfb16hmsbf1se.apps.googleusercontent.com";
        this.GOOGLE_CLIENT_SECRET = "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";
        passport.use(new GoogleStrategy({
            clientID: this.GOOGLE_CLIENT_ID,
            clientSecret: this.GOOGLE_CLIENT_SECRET,
            callbackURL: "https://bloggers-room.azurewebsites.net/auth/google/callback",
        }, (request, accessToken, refreshToken, profile, done) => __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('validating google profile:' + JSON.stringify(profile));
                console.log("userId:" + profile.id);
                console.log("displayName: " + profile.displayName);
                console.log("email: " + profile.emails[0].value);
                console.log("retrieve all of the profile info needed");
                const existingUser = yield User.findOne({ user_id: profile.id });
                if (existingUser) {
                    return done(null, existingUser);
                }
                const newUser = new User({
                    user_id: profile.id,
                    displayName: profile.displayName,
                    email: profile.emails[0].value
                });
                const savedUser = yield newUser.save();
                return done(null, savedUser);
            }
            catch (error) {
                return done(error, null);
            }
        })));
        passport.serializeUser(function (user, done) {
            done(null, user);
        });
        passport.deserializeUser(function (user, done) {
            done(null, user);
        });
    }
}
exports.default = Passport;
