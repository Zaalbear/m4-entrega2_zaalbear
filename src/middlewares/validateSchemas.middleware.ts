import { NextFunction, Request, Response } from "express";
import { AnyZodObject, ZodError } from "zod";

interface IBooksSchemas {
    params?: AnyZodObject;
    body?: AnyZodObject;
    query?: AnyZodObject;
}

export class validateBooksSchema{
    static execute(schemas: IBooksSchemas){
        return async (req: Request, res: Response, next: NextFunction) => {
            try {
                if (schemas.params){
                    req.params = await schemas.params.parseAsync (req.params);
                };

                if (schemas.body){
                    req.body = await schemas.body.parseAsync(req.body);
                };

                if (schemas.query){
                    req.query = await schemas.query.parseAsync(req.query);
                };
            } catch (err) {
                if (err instanceof ZodError){
                    return res.status(409).json(err)
                }
            }
                
            next();
        }
    }
}