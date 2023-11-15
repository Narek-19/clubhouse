import passport from "passport";
import { Strategy as GithubStrategy } from "passport-github";

passport.use(
  "github",
  new GithubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
      callbackURL: "http://localhost:3001/auth/github/callback",
    },
    (token, tokenSecret, profile, cb) => {
      const user = {
        fullname: profile.displayName,
        avatarUrl:profile.photos?.[0].value
      };
      console.log(user, "user");
      cb();
    }
  )
);

export { passport };
