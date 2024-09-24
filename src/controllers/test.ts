import { Request, Response } from "express";

export function testFunction(request: Request, response: Response){
    console.log(`I'm inside test function`);
    
    response.send('hello world');
}