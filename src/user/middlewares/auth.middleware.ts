import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Response, Request } from "express";
import { ExpressRequestInterface } from "src/types/expressReqest.interface";
import { verify, JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "src/config";
import { UserService } from "src/user/user.service";

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private readonly userService: UserService) { }

  async use(req: ExpressRequestInterface, res: Response, next: NextFunction) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }
    const token = req.headers.authorization.split(' ')[1];


    try {
      const decode = verify(token, JWT_SECRET) as JwtPayload;
      const user = await this.userService.findById(decode.id)
      req.user = user;
      next()
    } catch (error) {
      console.log(error);
      req.user = null;
      next()
    }

  }
}
