import { getUserCardsController, createUserController } from '../controller'
import { Request, Response } from 'express'
import { HttpRequest } from 'http-request'
import MakeRoute from 'make-route'

interface MakeUserRouteArgs {
    makeCallback: (controller: (httpRequest: HttpRequest) => any) => (req: Request, res: Response) => any
}

export default function makeUserRoute ({ makeCallback }: MakeUserRouteArgs): readonly MakeRoute[] {
    return Object.freeze([
        {
            route: '/',
            controller: makeCallback(createUserController),
            method: 'post'
        },
        {
            route: '/cards/:creator',
            controller: makeCallback(getUserCardsController),
            method: 'get'
        }
    ])
}
