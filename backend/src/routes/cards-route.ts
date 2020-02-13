import { getAllCards } from '../controller'
import { Request, Response } from 'express'
import { HttpRequest } from 'http-request'
import MakeRoute from 'make-route'

interface MakeCardsRouteArgs {
    makeCallback: (controller: (httpRequest: HttpRequest) => any) => (req: Request, res: Response) => any
}

export default function makeCardsRoute ({ makeCallback }: MakeCardsRouteArgs): readonly MakeRoute[] {
    return Object.freeze([
        {
            route: '/',
            controller: makeCallback(getAllCards),
            method: 'get'
        }
    ])
}
