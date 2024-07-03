import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtConstants } from "./auth.constant";
import { Injectable } from "@nestjs/common";

@Injectable()
export class jwtStrategy extends PassportStrategy(Strategy){

    constructor() {
        super({
          jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
          ignoreExpiration: false,
          secretOrKey: JwtConstants.secret,
        });
    }

    async validate(payload:any){
        return {id:payload.sub,email:payload.email}
    }
}