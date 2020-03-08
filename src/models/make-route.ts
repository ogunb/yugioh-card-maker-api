import { Request, Response } from 'express'

export default interface MakeRoute {
    method: 'get' | 'post' | 'put' | 'delete' | 'patch',
    route: string,
    controller: (arg0: Request, arg1: Response) => any,
 }
